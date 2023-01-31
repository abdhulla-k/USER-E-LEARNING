export type course = {
    courseId: string
}

export type links = {
    _id: string,
    linkdIn: string,
    gitHub: string,
    twitter: string,
    instagram: string
}

export interface userData {
    "userDetails": {
        "_id": string,
        profile_img: string,
        "name": string,
        "email": string,
        "password": string,
        "user_verified": boolean,
        "links": links
    },
    entrolledCourse: course[]
}