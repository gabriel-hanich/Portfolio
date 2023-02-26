<?php
/*
* Plugin Name: Projects
* Description: Write about the Projects I have completed
*/

function projects_register_cpt() {
	register_post_type('projects',
		[
            'labels'=>[
                'name' => 'Projects',
                'singular_name' => 'Project' 
            ],
            'public'=> true,
            'has_archive' => false,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_rest' => true, // To use Gutenberg editor.
            'menu_icon' => 'dashicons-hammer',
            'supports' => ['title', 'editor']
        ]
	);
}

function projects_remove_cpt(){
    unregister_post_type('projects');
}

function projects_get_meta(){
    $projects_meta_boxes = [
        [
            'heading_text' => 'Project Name',
            'label_text' => 'Project Name',
            'value_key' => 'projectName',
            'type' => 'string'
        ],
        [
            'heading_text' => 'Technologies Used',
            'label_text' => 'For each technology, find a link to an icon of the logo of the technology, Paste them across and seperate by commas',
            'value_key' => 'projectTech',
            'type' => 'string'
        ],
        [
            'heading_text' => 'Repo Link',
            'label_text' => 'Link to the Github Repository OR link to the project itself',
            'value_key' => 'projectLink',
            'type' => 'string'
        ],
        [
            'heading_text' => 'Start Date',
            'label_text' => 'The Date You actively started working on the project ',
            'value_key' => 'startDate',
            'type' => 'date'  
        ],
        [
            'heading_text' => 'End Date',
            'label_text' => 'The Date you finished active development or stopped maintaing the project',
            'value_key' => 'endDate',
            'type' => 'string'  
        ],
        [
            'heading_text' => 'Is Imporant',
            'label_text' => 'Whether or not the project should appear on the home screen or be hidden to the side (0=No and 1=Yes)',
            'value_key' => 'isImportant',
            'type' => 'number'  
        ]
    ];
    return $projects_meta_boxes;
}


function projects_add_meta_boxes(){
    $meta_list = projects_get_meta();
    $i=0;
    while($i < count($meta_list)){
        add_meta_box(
            $meta_list[$i]['value_key'],
           $meta_list[$i]['heading_text'],
            function($post) use ( $meta_list, $i ){
                projects_render_meta_box($post, $meta_list[$i]['label_text'], $meta_list[$i]['value_key'], $meta_list[$i]['type']);
            },
            'projects'
        );
        $i++;
    }
    

}

function projects_render_meta_box($post, $label_text, $value_key, $type){
    $value = get_post_meta($post->ID, $value_key, true);
    ?>
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
        <label for="<?php echo $value_key ?>" style="font-size: 1.15rem; width: 85%;"><?php echo esc_html( $label_text ); ?></label>
        <input name="<?php echo $value_key ?>" id="<?php echo $value_key ?>" type='<?php echo $type ?>' value="<?php echo $value ?>" style='font-size: 1.15rem'>
    </div>
    <?php
}   

function projects_save_meta_data( $post_id){
    $meta_list = projects_get_meta();
    $i=0;
    while($i < count($meta_list) + 1){
        if(array_key_exists($meta_list[$i]['value_key'], $_POST)){
            update_post_meta(
                $post_id,
                $meta_list[$i]['value_key'],
                $_POST[$meta_list[$i]['value_key']]
            );
        }
        $i++;
    }
}


function projects_register_fields() {
    $meta_list = projects_get_meta();
    $i=0;
    while($i < count($meta_list)){
        register_rest_field( 'projects',
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


add_action('init', 'projects_register_cpt');
add_action('deactivate_plugin', 'projects_remove_cpt');
add_action( 'add_meta_boxes', 'projects_add_meta_boxes');
add_action( 'save_post', 'projects_save_meta_data' );

add_action( 'rest_api_init', 'projects_register_fields' );