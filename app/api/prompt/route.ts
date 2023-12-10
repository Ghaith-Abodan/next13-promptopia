
import Prompt from "@/models/prompt";

import { connenctToDB } from "@/utils/database";


import {  NextResponse } from "next/server";




export async function GET(req:Request){

    if(req.method!=="GET"){
        return new NextResponse('Error server Prompts',{status:500});
    }
  
    try{
        await connenctToDB();

  //check if this username
   
        

    const prompts  = await Prompt.find().populate('creator')

        
   

  
     return  NextResponse.json(prompts)
    
    
    }catch(error){
        console.log(error);
        return new NextResponse('Error server Prompts',{status:500});
    }
   

}