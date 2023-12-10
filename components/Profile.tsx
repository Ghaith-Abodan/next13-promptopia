import { Prompt } from '@/types';
import React from 'react'
import PromptList from './PromptList';

interface ProfileProps{
    name: string | null;
    desc: string;
    data:Prompt[];
}

const Profile = ({
    name,
    desc,
    data
}:ProfileProps) => {
  return (
    <section className='w-full'>
      <h1 
      className='text-left mt-5 text-5xl font-extrabold 
      leading-[1.15] text-black sm:text-6xl '>
         <span className=' bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent '>
        {name} Profile
        </span>
        </h1>
      <p 
      className='text-left mt-5 text-lg text-gray-600
       sm:text-xl max-w-2xl '>
        {desc}
        </p> 
     <PromptList data={data}
     handleTagclick={()=>{}}/>
           
    </section>
  )
}

export default Profile
