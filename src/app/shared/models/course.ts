export type module =  {
    notePath: string,
    questionPath: string,
    videoPath: string,
    videoTitle: string,
    _id: string
}

export interface Course {
    title: string;
    description: string;
    imgName: string;
    imgPath: string;
    teacher: string;
    price: number;
    modules: module[]
}