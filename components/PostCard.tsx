"use client"
import { Prompt } from '@/types';
import axios from 'axios';

import Image from 'next/image';

import React, {  useState } from 'react'

import {useEditModal} from '@/hooks/useEditModal';

import toast from 'react-hot-toast';
import { usePathname ,useRouter} from 'next/navigation';
import { useSession } from 'next-auth/react';




interface PostCardProps{
    post:Prompt;
    handleTagclick:(text:string)=>void;

   
}
const PostCard = ({
    post,
    handleTagclick
   
}:PostCardProps) => {

 
    const pathName= usePathname();
    const router=useRouter();
    const editModal=useEditModal();
    const [copied,setCopied]=useState("")
    const{data:session}=useSession();

    const handleCopy=()=>{
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(()=>setCopied(""),3000)
    }

    const handleEdit=async(post:Prompt)=>{
     
     editModal.setId(post._id);
      
     editModal.onOpen();

    }
   

    const handleDelete=async(post:Prompt)=>{
     
      const hasConfirmed=confirm("Are you sure you want to delete");

      if(hasConfirmed){
        try{
          await axios.delete(`/api/prompt/${post._id}`)
          toast.success('deleted successfully');
        }catch(error){
          toast.error('something went wrong')
        }finally{
         window.location.reload();
        }
      }

    }

    const handlePostClick=()=>{
     
     
      if(post.creator._id===session?.user.id){
        router.push(`/profile`)
      }else{
        router.push(`/profile/${post.creator._id}?username=${post.creator.username}`)
      }
     
    }
    

  return (
    <>
    
     <div className='flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter  w-fit h-fit '>
      <div className=' flex justify-between items-start gap-5'>
              <div onClick={handlePostClick}
              className=' flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                  <Image
                   src={post.creator.image}
                   alt='User_image'
                   width={40}
                   height={40}
                   className=' rounded-full object-contain'/>
                   <div className=' flex flex-col'>
                      <h3 className=' font-satoshi font-semibold text-gray-900'>
                      {post.creator.username}
                      </h3>
                      <p className=' font-inter text-sm text-gray-500'>
                      {post.creator.email}
                      </p>
                   </div>
              </div>
              <div onClick={handleCopy}
               className='w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer'>
                  <Image 
                  src={copied===post.prompt ?
                  '/assets/icons/tick.svg':'/assets/icons/copy.svg'
                  }
                  alt='copy_icon'
                  width={12}
                  height={12}
                  />
              </div>
              </div>
              <p className='my-4 font-satoshi text-sm text-gray-700'>
                {post.prompt}
                </p>
                
              <p
              onClick={()=>handleTagclick(post.tag)}
              className='font-inter text-sm cursor-pointer  bg-gradient-to-r
               from-blue-600 to-cyan-600 bg-clip-text text-transparent' >
                {post.tag}
                </p>
               
             { pathName === '/profile' &&(
            <div className='mt-5 flex items-center justify-center gap-4 border-t border-gray-300 pt-3'>
            <p
            onClick={()=>handleEdit(post)}
             className='font-inter text-sm cursor-pointer 
             bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent '>
                Edit
              </p>
               <p 
               onClick={()=>handleDelete(post)}
                className='font-inter text-sm cursor-pointer 
                bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent '>
               Delete
             </p>
             </div>
             )}   
          </div>
   
  </>
  )
}

export default PostCard
