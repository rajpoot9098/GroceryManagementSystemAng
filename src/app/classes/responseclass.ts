export class Responseclass {
    constructor(
        public  successcode:string,
        public  msg:string,
        public  data:object,
        public  additionaldata:object
        ){}
}
