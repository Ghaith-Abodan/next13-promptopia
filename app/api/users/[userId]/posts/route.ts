
import Prompt from "@/models/prompt";
import { connenctToDB } from "@/utils/database";
import {  NextResponse } from "next/server";




export async function GET(req:Request,{params}:{params:{userId:string}}){

    if(req.method!=="GET"){
        return new NextResponse('Error server Prompts',{status:500});
    }

    if(!params.userId){
        return new NextResponse('Error server Prompts',{status:500});
    }
    try{
        await connenctToDB();

     const prompts  = await Prompt.find({
        creator:params.userId,
     }).populate('creator');

        
        return  NextResponse.json(prompts)

    }catch(error){
        console.log(error);
        return new NextResponse('Error server Prompts',{status:500});
    }

}