
import Prompt from "@/models/prompt";

import { connenctToDB } from "@/utils/database";

import {  NextResponse } from "next/server";




export async function GET(
    req:Request,{params}:{params:{promptId:string}})
    {

    if(req.method!=="GET"){
        return new NextResponse('Error server Method',{status:403});
    }
    
    try{
        await connenctToDB();

     const prompt  = await Prompt.findById(params.promptId).populate('creator');

        if(!prompt){
            return new NextResponse('not promptfound',{status:404});  
        }
        return  NextResponse.json(prompt)

    }catch(error){
        console.log(error);
        return new NextResponse('Error server Prompts',{status:501});
    }

}

export async function PATCH(
    req:Request,{params}:{params:{promptId:string}})
    {
        if(req.method!=="PATCH"){
            return new NextResponse('Error server Prompts',{status:500});
        }

        const {prompt,tag}=await req.json()

       
        try{
            await connenctToDB();

            const existingPrompt=await Prompt.findById(params.promptId)
    
            if(!existingPrompt){
                return new NextResponse(' prompt not found',{status:404});  
            }

            existingPrompt.prompt=prompt;
            existingPrompt.tag=tag;

            await existingPrompt.save();

            return NextResponse.json(existingPrompt);    
        }catch(error){
            console.log(error);
            return new NextResponse('Error server Prompts',{status:500});
        }
       

}

export async function DELETE(
    req:Request,{params}:{params:{promptId:string}})
    {
        if(req.method!=="DELETE"){
            return new NextResponse('Error server Prompts',{status:500});
        }

        try{
            await connenctToDB();

            const prompt=await Prompt.findByIdAndRemove(params.promptId)

            return new NextResponse('Prompt deleted successfully',{status:200});    
        }catch(error){
            console.log(error);
            return new NextResponse('Failed to delete prompt',{status:500});
        }
       

}