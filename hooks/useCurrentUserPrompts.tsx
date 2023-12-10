import useSWR from "swr";
import fetcher from "@/utils/fetcher";

const useCurrentUserPrompts = (id?: string) => {


  const  { data, error, isLoading, mutate } = useSWR(id ? `/api/users/${id}/posts` : null, fetcher);
  

    
    return {
        
        data,
        error, 
        isLoading, 
        mutate 
 }


}

export default useCurrentUserPrompts
