interface Contributor {
    name : string
    image : string
}

export interface ProjectDetailsType {
    id : number
    projectName : string
    description : string
    image : string
    techStack : string[]
    contributors : Contributor[]
    links : {
        github : string
        documentation : string
    }
}
