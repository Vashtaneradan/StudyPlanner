export interface Semester {
    semesterNr: number,
    lectures: Array<Lecture>,
    lectureData: Lecture,
}

export interface Lecture {
    name: string,
    ects: number,
    grade: number,
    edit: boolean,
}