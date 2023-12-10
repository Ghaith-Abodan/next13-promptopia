import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connenctToDB } from "@/utils/database";





const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID || '' ,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET || '' ,
    })
    ],
    callbacks:{


         session:async({ session})=>{
            
            const userSession=await User.findOne({
                email: session.user?.email,

            })
          
            if(userSession){
                session.user.id = userSession._id

            }
         
            return session
            
           
   
},
      signIn: async ({profile})=>{

          
            try{
                connenctToDB();

               
                // check if user new or exisit
                const currentUser=await User.findOne({
                    email: profile?.email
                   
                    
                });
                
                if(!currentUser){
                    await User.create({
                     email: profile?.email,
                     username: profile?.name?.replace(" ","").toLowerCase(),
                     image: profile?.picture
                    
                    });
                    
                }
                return true;
            }
            catch(error){
                console.log(error);
                return false;
            }
            
        }
    }
 
})

export { handler as GET , handler as POST}

