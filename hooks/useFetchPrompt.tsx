import useSWR from "swr";
import fetcher from "@/utils/fetcher";

const useFetchPrompt = (promptId?: string) => {


  const  { data, error, isLoading, mutate } = useSWR(promptId ? `/api/prompt/${promptId}` : `/api/prompt`, fetcher);
  

    
    return {
        
        data,
        error, 
        isLoading, 
        mutate 
 }


}

export default useFetchPrompt
