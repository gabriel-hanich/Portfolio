export type Experience = {
  title: string,
  strDate: string,
  icon: string
}

export type FullExperience = {
  title: string,
  icon: string,
  strDate: string,
  startDate: Date,
  prettifiedDate:string,
  barWidth: string
}

export type Project = {
    slug: string,
    title: string,
    shortDesc: string,
    gitLink: string,
    icons: string[]
    field: string,
    dotColor: string,
    bodyText: string
}

export type SiteData = {
    projects: Project[],
    experience: Experience[]
}