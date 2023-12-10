"use client"

import Profile from '@/components/Profile'
import useCurrentUserPrompts from '@/hooks/useCurrentUserPrompts'

import { EditProvider } from '@/providers/edit-provider'

import { Prompt } from '@/types'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'




const MyProfile = () => {

const {data:session}=useSession();
const [posts,setPosts]=useState<Prompt[]>([])

const {data:userPrompts,isLoading}=useCurrentUserPrompts(session?.user?.id)


    useEffect(()=>{

      if(userPrompts && !isLoading){

        setPosts(userPrompts);

      }
      
    },[isLoading,userPrompts])

  return (
    <>
  <EditProvider/>
    <Profile
     name="My"
     desc="Welcome to your personalized profile page"
     data={posts}
   />
      </>
   
  )
}

export default MyProfile
