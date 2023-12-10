"use client"

import Profile from '@/components/Profile'
import useCurrentUserPrompts from '@/hooks/useCurrentUserPrompts'



import { Prompt } from '@/types'
import { useSearchParams } from 'next/navigation'




import React, { useEffect, useState } from 'react'




const MyProfile = ({params}:{params:{profilId:string}}) => {



const searchParam=useSearchParams().get('username');

const [posts,setPosts]=useState<Prompt[]>([])

const {data:userPrompts,isLoading}=useCurrentUserPrompts(params.profilId)

  
    useEffect(()=>{

      if(userPrompts && !isLoading){
      
        setPosts(userPrompts);
       
      }
      
    },[isLoading,userPrompts])

  return (
    <>
 
    <Profile
     name={searchParam}
     desc="Welcome to your personalized profile page"
     data={posts}
   />
      </>
   
  )
}

export default MyProfile
