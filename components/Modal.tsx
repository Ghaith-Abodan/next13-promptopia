
import {AiOutlineClose} from 'react-icons/ai'
import { useCallback } from "react";
import Button from './Button';


interface ModalProps{

      isOpen?: boolean;
      onClose: () => void;
      onSubmit: () => void;
      title?: string;
      desc?:string;
      body?: React.ReactElement;
      footer?: React.ReactElement;
      actionLabel: string;
      disabled?: boolean;
}

const Modal = ({
   isOpen,
   onClose,
   onSubmit, 
   title, 
   body, 
   actionLabel, 
   disabled,
   desc
}:ModalProps) => {

    //to Colse Modal
    const handleColse=useCallback(()=>{
        if(disabled){
            return;
        }

        onClose();

    },[disabled,onClose])


    //to Submit
    const HandleSubmit=useCallback(()=>{
        if(disabled){
            return;
        }
        onSubmit();
    },[disabled,onSubmit])

if(!isOpen){
  return null;
}
  return (
   
      <div
       className="
       flex
       items-center
       justify-center
       overflow-x-hidden
       overflow-y-auto
       fixed
       inset-0
       z-50
       outline-none
       focus:outline-none
       bg-neutral-800
       bg-opacity-70
              ">
            
      <div
       className="
       relative
       w-full
       lg:w-3/6
       mx-auto
       lg:max-w-3xl
       lg:h-auto  
      
       ">
     
       {/*Content */} 
      <div 
      className="
  
       h-auto
       rounded-lg
       shadow-lg
       relative
       flex
       flex-col
       border
      border-gray-300
      bg-white
       bg-clip-padding
       p-6

       backdrop-blur-lg 
       backdrop-filter
       outline-none
       focus:outline-none          ">

         {/*Header */} 
     <div className='gradient'/>   

      <div 
       className="
       flex
       items-center
       justify-between
       rounded-top
      
       ">
       <h1 
        className="
        
        text-4xl
        font-extrabold
        leading-[1.15] 
        text-black   
        ">
       <span 
        className="
        bg-gradient-to-r
        from-blue-600
        to-cyan-600 
        bg-clip-text 
        text-transparent
        ">
        {title}
        </span> 
        </h1> 
       <button 
        className="
     
        ml-auto
        border-0
        text-black
        hover:opacity-70
        transition

        "
        onClick={handleColse}
        >
        <AiOutlineClose size={20}/>
        </button> 
      </div>  
     {/*Desc */} 
    
     <div className='mt-5 '>
   
     <p className=' text-gray-500 text-lg font-normal max-w-3xl text-left'>
   
     {desc}
     </p>

     </div>
    {/*Body */} 
      <div className='mt-10 mb-10 w-full z-10  max-w-3xl flex flex-col gap-7 glassmorphism'>
        <div 
         className='
          relative
          flex-auto
           '>
         {body}   
        </div>
    {/*Footer */}  
    <div
        className='
        flex
        flex-row
        gap-5
        items-center
        justify-end 
        '>

      
    <Button disabled={disabled} label='Cancel'
            secondary   onClick={handleColse}  />
     <Button disabled={disabled} label={actionLabel}
              onClick={HandleSubmit}  />
      </div>
      </div>
       
  
      </div>     
      </div>
      </div> 
      
  
  
  )
}

export default Modal
