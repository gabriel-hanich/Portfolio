<?php
/*
* Plugin Name: Experience
* Description: The experience I have in various programming languages, systems and paradigms
*/

function experience_register_cpt() {
	register_post_type('experiences',
		[
            'labels'=>[
                'name' => 'Experiences',
                'singular_name' => 'Experience' 
            ],
            'public'=> true,
            'has_archive' => false,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_rest' => true, // To use Gutenberg editor.
            'menu_icon' => 'dashicons-clock',
            'supports' => ['title']
        ]
	);
}

function experience_remove_cpt(){
    unregister_post_type('experiences');
}

function experience_get_meta(){
    $experience_meta_boxes = [
        [
            'heading_text' => 'Experience Label',
            'label_text' => 'The name of the language, service or paradigm',
            'value_key' => 'experienceLabel',
            'type' => 'string'
        ],
        [
            'heading_text' => 'Start Date',
            'label_text' => 'The date when you first started learning this',
            'value_key' => 'experienceStart',
            'type' => 'date'
        ],
        [
            'heading_text' => 'Icon link',
            'label_text' => 'A link to an image of the logo of the paradigm or language',
            'value_key' => 'experienceIcon',
            'type' => 'string'
        ],
    ];
    return $experience_meta_boxes;
}


function experience_add_meta_boxes(){
    $meta_list = experience_get_meta();
    $i=0;
    while($i < count($meta_list)){
        add_meta_box(
            $meta_list[$i]['value_key'],
            $meta_list[$i]['heading_text'],
            function($post) use ( $meta_list, $i ){
                experience_render_meta_box($post, $meta_list[$i]['label_text'], $meta_list[$i]['value_key'], $meta_list[$i]['type']);
            },
            'experiences'
        );
        $i++;
    }
    

}

function experience_render_meta_box($post, $label_text, $value_key, $type){
    $value = get_post_meta($post->ID, $value_key, true);
    ?>
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
        <label for="<?php echo $value_key ?>" style="font-size: 1.15rem; width: 85%;"><?php echo esc_html( $label_text ); ?></label>
        <input name="<?php echo $value_key ?>" id="<?php echo $value_key ?>" type='<?php echo $type ?>' value="<?php echo $value ?>" style='font-size: 1.15rem'>
    </div>
    <?php
}   

function experience_save_meta_data( $post_id){
    $meta_list = experience_get_meta();
    $i=0;
    while($i < count($meta_list)){
        if(array_key_exists($meta_list[$i]['value_key'], $_POST)){
            update_post_meta(
                $post_id,
                $meta_list[$i]['value_key'],
                $_POST[$meta_list[$i]['value_key']]
            );
        }
        $i = $i + 1;
    }

}

function experience_register_fields() {
    $meta_list = experience_get_meta();
    $i=0;
    while($i < count($meta_list)){
        register_rest_field( 'experiences',
            $meta_list[$i]['value_key'],
            array(
                'get_callback'    => function( $post ) use ( $meta_list, $i ){
                    return get_post_meta( $post['id'], $meta_list[$i]['value_key'], true );
                },
                'update_callback' => function( $value, $post ) use ( $meta_list, $i ){
                    update_post_meta( $post->ID, $meta_list[$i]['value_key'], $value );
                },
                'schema'          => array(
                    'type' => $meta_list[$i]['type'],
                ),
            )
        );
        $i = $i + 1;
    }
}


add_action('init', 'experience_register_cpt');
add_action('deactivate_plugin', 'experience_remove_cpt');
add_action( 'add_meta_boxes', 'experience_add_meta_boxes');
add_action( 'save_post', 'experience_save_meta_data' );

add_action( 'rest_api_init', 'experience_register_fields' );