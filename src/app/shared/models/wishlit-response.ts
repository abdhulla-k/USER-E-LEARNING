export type detail = {
    "_id": string,
    "title": string,
    "description": string,
    "imgPath": string,
    "imgName": string,
    "price": number,
    "teacher": string,
    "modules": [
        {
            "videoTitle": string,
            "videoPath": string,
            "notePath": string,
            "questionPath": string,
            "_id": string
        }
    ]
}

export type courseDetails = {
    "_id": string,
    "user": string,
    "course_details": detail[]
}

export interface WishlistResponse {
    "status": boolean,
    "data": courseDetails[]
}