
import Prompt from "@/models/prompt";
import { connenctToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST=async(req:Request)=>{


    const { currentUser ,prompt , tag }=await req.json();
    
        console.log(currentUser)
    
    try{
        await connenctToDB();

     const newPrompt = await Prompt.create({
            creator:currentUser,
            prompt,
            tag
        })

        return new NextResponse(newPrompt,{status:201})
    }catch(error){
        console.log(error);
        return new NextResponse('Error Prompt Server',{status:500})
    }

}