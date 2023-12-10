"use client"
import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";




export default async function Home() {



  return (
    <>
  
    
   <section className=" w-full flex flex-col items-center justify-center">
  
   <Header title=" Dicover & Share" subTitle="AI-Powered Prompts" 
           desc="
                Promptopia is an open-source AI promting
                too for modern world to discover, create 
                and share creative prompts"/>

    <Feed/>
  
   </section>
   </>
  )
}
