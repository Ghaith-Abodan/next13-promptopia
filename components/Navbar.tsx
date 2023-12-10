"use client"

import { useCreateModal } from "@/hooks/useCreateModal";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";


const Navbar = () => {

    const {data:session}=useSession();
   
    const [providers,setProviders]=useState<any>(null);
    const [toggleDropdown,setToggleDropdown]=useState(false);

    const createModal=useCreateModal();
    useEffect(()=>{

        const setProvider=async()=>{
            const response= await getProviders();
            setProviders(response);
        }
        setProvider();
    },[])

  return (
    

    
    <nav className=" flex w-full mb-16 justify-between pt-3">
      <Link href="/" className="flex gap-2 items-center">
        <Image 
         src="/assets/images/logo.svg"
         alt="logo"
         width={30}
         height={30}
         className=" object-contain"/>
         <p className=" font-satoshi font-semibold text-lg text-black tracking-wide max-sm:hidden">
            Promptopia
            </p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
            {
                session?.user ?(
                <div className=" flex items-center gap-3 md:gap-5">
                   <div onClick={createModal.onOpen}
                   className=" rounded-full border border-black bg-black py-1.5 px-5
                    text-white transition-all hover:bg-white hover:text-black text-center text-sm
                      font-inter flex items-center justify-center ">
                      Create Post      
                   </div>  
                   <button type="button"
                   className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white
                    text-center text-sm font-inter flex items-center justify-center;"
                   onClick={()=>signOut()}>
                    Sign Out
                    </button> 

                    <Link href="/profile">
                        <Image 
                        src={session.user.image || ''}
                        alt="profile-image"
                        width={37}
                        height={37}
                        className=" rounded-full object-contain"/>

                    </Link>  
                </div>
                ):(
                    <>
                    {providers && 
                    Object.values(providers).map((provider:any)=>(
                        <button type="button"
                                key={provider.name}
                                onClick={()=>signIn(provider.id)}
                                className="rounded-full border border-black bg-black py-1.5 px-5
                                text-white transition-all hover:bg-white hover:text-black text-center text-sm
                                  font-inter flex items-center justify-center">
                                   Sign In     
                        </button>
                    ))}
                    </>
                )
            }
      </div>

      {/* Mobbile Navigation */}
      <div className="sm:hidden flex relative">
         {session?.user ?(
            <div className="flex">
                <Image
                src={session.user.image || ''}
                alt="menu"
                width={37}
                height={37}
                className=" rounded-full"
                onClick={()=>{setToggleDropdown((prev)=>!prev)}}
                />

                {
                    toggleDropdown && (
                        <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white
                         min-w-[210px] flex flex-col gap-2 justify-end items-end">
                            <Link href="/profile"
                             className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                             onClick={()=>setToggleDropdown(false)}>
                                  My Profile
                            </Link>
                            <Link href="/create/prompt"
                             className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                             onClick={()=>setToggleDropdown(false)}>
                                 Create Prompt
                            </Link>
                            <button type="button"
                   className="mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black
                    text-center text-sm font-inter flex items-center justify-center "
                   onClick={()=>{
                    signOut()
                    setToggleDropdown(false) }}>
                    Sign Out
                    </button> 
                        </div>
                    )
                }
            </div>
         ):(
            <>
            {providers && 
            Object.values(providers).map((provider:any)=>(
                <button type="button"
                        key={provider.name}
                        onClick={()=>signIn(provider.id)}
                        className="rounded-full border border-black bg-black py-1.5 px-5
                        text-white transition-all hover:bg-white hover:text-black text-center text-sm
                          font-inter flex items-center justify-center">
                           Sign In     
                </button>
            ))}
            </>
         )
         
         }       
      </div>
    </nav>
   
  )
}

export default Navbar
