"use client"

import axios from "axios";


import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { usePathname, useRouter } from 'next/navigation';
import Input from "../Input";
import Modal from "../Modal";
import TextArea from "../TextArea";
import {useEditModal} from "@/hooks/useEditModal";
import useFetchPrompt from "@/hooks/useFetchPrompt";




const EditModal = () => {
    
  
    const editModal=useEditModal();
 
    const [Loading,setLoading]=useState(false);
    const [post,setPost]=useState({
      prompt:"",
      tag:"",
    });
   
    
    const {data:prompt,isLoading}= useFetchPrompt(editModal.promptId);
    
    
    useEffect(()=>{

      if(prompt || !isLoading){
        setPost(prompt)
      }
    },[isLoading])
     

    const onSubmit = async()=>{

      
     try{
     setLoading(true);
          
    if(!editModal.promptId) return alert('Prompt Id not found');

   await axios.patch(`/api/prompt/${editModal.promptId}`,{
      prompt:post?.prompt,
        tag:post?.tag
      })
      toast.success('Created Success');
      editModal.onClose();
      window.location.reload();
     

    }catch(error){
        toast.error('Something went wrong');
    }finally{
     setLoading(false);
     
    }
        

    }

    const onChangeTag=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPost({...post,tag:e.target.value});
      }


    const onChangePrompt=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setPost({...post,prompt:e.target.value});
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
    disabled={Loading}
    isOpen={editModal.isOpen}
    title="Update Post"
    actionLabel="Update"
    onClose={editModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent} 
    desc='Update and share amazing prompts with the
    world, and let your imagination run wild with
     any AI-powered platform '    />
    </>
  )
  


}

export default EditModal;
