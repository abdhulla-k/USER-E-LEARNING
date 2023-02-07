export interface GetMyCourseResponse {
    status: boolean;
    courses: CoursesEntity[];
}

export interface CoursesEntity {
    _id: string;
    userId: string;
    courses: Courses;
    __v: number;
    course_details: CourseDetailsEntity[];
}

export interface Courses {
    courseId: string;
    _id: string;
}

export interface CourseDetailsEntity {
    _id: string;
    title: string;
    description: string;
    imgPath: string;
    imgName: string;
    price: number;
    teacher: string;
    modules: ModulesEntity[];
    __v: number;
}

export interface ModulesEntity {
    videoTitle: string;
    videoPath: string;
    notePath: string;
    questionPath: string;
    _id: string;
}
