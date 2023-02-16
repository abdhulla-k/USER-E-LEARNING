export type IndividualCourse = {
    "_id": string,
    "userId": string,
    "courses": {
        "courseId": string,
        "_id": string
    },
    "course_details": CourseDetails[]
}

export type Module = {
    "videoTitle": string,
    "videoPath": string,
    "notePath": string,
    "questionPath": string,
    "_id": string
}
export type CourseDetails = {
    "_id": string,
    "title": string,
    "description": string,
    "imgPath": string,
    "imgName": string,
    "price": number,
    "teacher": string,
    "modules": Module[],
    "__v": 0
}

export interface CartResponse {
    "status": boolean,
    "data": [
        {
            "_id": string,
            "userId": string,
            "courses": {
                "courseId": string,
                "_id": string
            },
            "course_details": CourseDetails[]
        }
    ]
}