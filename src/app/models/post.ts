export class Post {
    constructor(
        public userId?: number,
        public message?: string,
        public imgURL?: string,
        public privacy?: boolean,
        public createDate?: string,
        public id?: number,
        public firstName?: string,
        public lastName?: string
    ){

    }
}