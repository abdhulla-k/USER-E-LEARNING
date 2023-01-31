export type course = {
    courseId: string
}

export interface userData {
    "userDetails": {
        "_id": string,
        profile_img: string,
        "name": string,
        "email": string,
        "password": string,
        "user_verified": boolean
    },
    entrolledCourse: course[]
}