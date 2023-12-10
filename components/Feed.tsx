"use client"


import { Prompt } from "@/types"

import { ChangeEvent, useEffect, useState } from "react"
import PromptList from "./PromptList"
import useFetchPrompt from "@/hooks/useFetchPrompt"



const Feed = () => {


    const [items,setItems]=useState<Prompt[]>([]);
    const [searchText,setSearchText]=useState('');
   
    const [searchResults,setSearchResults]=useState<Prompt[]>([]);
  
    const {data:prompts,isLoading}=useFetchPrompt();
      
   
    useEffect(()=>{
    if(prompts||!isLoading)
    {
  
      setItems(prompts)
    }
    },[isLoading])



  
   
     const filterPrompts=(searchtext:string) =>{

      const regex=new RegExp(searchtext,"i");
      return items.filter((item)=>
      regex.test(item.creator.username)||
      regex.test(item.prompt)||
      regex.test(item.tag))
     }

    const handleSearchChange= (e:ChangeEvent<HTMLInputElement>)=>{
    
    setSearchText(e.target.value);
    
   
      const searchResult=filterPrompts(e.target.value);
      setSearchResults(searchResult);
  
   
    }
const handleTagclick=(text:string)=>{
  setSearchText(text);

  const searchResult=filterPrompts(text);
      setSearchResults(searchResult);
  
}
 

    

    

  return (
    <>
  
    <section className='mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2 '>
    <form className='relative w-full flex-center'>
            <input 
              type='text'
              placeholder='Search for a tag or username'
              value={searchText}
              onChange={handleSearchChange}
             
              className=' block w-full rounded-md border border-gray-200
                    bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium
                     focus:border-black focus:outline-none focus:ring-0'/>
      
     </form>
      </section>
     

     
      {
        searchText?(
          <PromptList data={searchResults}
                    handleTagclick={handleTagclick}
                   />
        ):(
          <PromptList data={items}
          handleTagclick={handleTagclick}
         />
        )
      }
       
 
       </>
  )
}

export default Feed
