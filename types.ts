export interface Prompt{
    _id:string;
    prompt:string;
    tag:string;
    creator:Creator;
}

export interface Creator{
    _id:string;
    email:string;
    username:string;
    image:string;
}