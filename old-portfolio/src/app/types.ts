export interface packet{
    fullName: String,
    introText: String,
    aboutText: String,
    achievementList: topic[],
    educationList: topic[],
    resumeLink: String
}

export interface topic{
    title: String,
    explainer: String
    timePeriod: String
}
