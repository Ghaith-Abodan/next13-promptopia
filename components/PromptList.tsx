import { Prompt } from '@/types'
import React from 'react'
import PostCard from './PostCard';




interface PromptListProps{
data:Prompt[];
handleTagclick:(text:string)=>void
}


const PromptList = ({data,handleTagclick}:PromptListProps) => {
 
  return (
    <>
  
   { data.length>0 ?(
      <div className=' space-y-2 py-8 sm:columns-1  xl:columns-1  '>
    
      {data.map((item)=>(
      <PostCard key={item._id}
            post={item}
            handleTagclick={(text:string)=>handleTagclick(text)}/>
        
            ))}
           </div>
        
            ) :(
      
      <p className='text-gray-900 text-center text-2xl mt-15'>there not results</p>)
     
    
     }

     </>
 
  
   
  )
}

export default PromptList
