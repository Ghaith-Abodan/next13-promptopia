"use client"

import axios from "axios";
import { useSession } from "next-auth/react";

import { useCallback, useState } from "react"
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
import Input from "../Input";
import Modal from "../Modal";
import TextArea from "../TextArea";
import {useCreateModal} from "@/hooks/useCreateModal";


const CreateModal = () => {


    const {data:session}=useSession();
      
    const router=useRouter();

    const createModal=useCreateModal();

    const [isLoading,setIsLoading]=useState(false);
    const [post,setPost]=useState({
      prompt:"",
      tag:"",
    });
   
   
  

    const onSubmit =async()=>{

        try{
            setIsLoading(true);

            const userId=session?.user?.id
         
          
            if(userId){
              await axios.post('/api/prompt/new',{
                currentUser:userId,
                prompt:post?.prompt,
                tag:post?.tag
              })
              
             toast.success('Created Success');
             
             createModal.onClose();
             window.location.reload();

            }
          
            }catch(error){
                toast.error('Something went wrong');
                console.log(error);
            }finally{
              setIsLoading(false);
             
            }
        

    }

    const onChangeTag=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPost({...post,tag:e.target.value});
        console.log(e.target.value);
      }


    const onChangePrompt=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setPost({...post,prompt:e.target.value});
        console.log(e.target.value);
    }

    const bodyContent=(
        <div className=" flex flex-col gap-4">
           <TextArea
            value={post.prompt}
            placeholder="Write your prompt here..."
            disabled={isLoading}
            label=' your AI prompt'
            onChange={onChangePrompt}
            
            />
           <Input
           placeholder="#tag"
           onChange={onChangeTag}
           value={post.tag}
           disabled={isLoading}
           label='Tag'
           /> 
        </div>
    )

  return (
    <>
    <Modal
    disabled={isLoading}
    isOpen={createModal.isOpen}
    title="Create Post"
    actionLabel="Create"
    onClose={createModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent} 
    desc='Create and share amazing prompts with the
    world, and let your imagination run wild with
     any AI-powered platform '    />
    </>
  )
  


}

export default CreateModal;
