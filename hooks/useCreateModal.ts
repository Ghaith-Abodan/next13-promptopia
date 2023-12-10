import {create} from 'zustand';

interface CreateModalProps{
    isOpen: boolean;
    onOpen:()=>void;
    onClose:()=>void;

}

export const useCreateModal=create<CreateModalProps>((set)=>({
    isOpen:false,
    onOpen:()=> set({isOpen:true}),
    onClose:()=> set({isOpen:false})
}))

