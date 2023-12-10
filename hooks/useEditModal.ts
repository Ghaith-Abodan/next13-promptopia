import {create} from 'zustand';

interface EditModalProps{
    promptId?: string;
    isOpen: boolean;
    onOpen:()=>void;
    onClose:()=>void;
    setId:(id:string)=>void;

}

export const useEditModal=create<EditModalProps>((set)=>({
    isOpen:false,
    promptId:undefined,
    onOpen:()=> set({isOpen:true}),
    onClose:()=> set({isOpen:false}),
    setId:(id:string)=> set({promptId:id}),
  
    
    
}))



