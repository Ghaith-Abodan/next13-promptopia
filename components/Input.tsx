
interface InputProps{
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
    

}

const Input = ({
  placeholder, 
  value, 
  type = "text", 
  onChange, 
  disabled, 
  label 
}:InputProps) => {
  return (
    <div className="w-full">
      {label && <span className="font-satoshi font-semibold text-gray-700 text-base">
                <span className=" font-normal">
                (#product, webdevelopment, #idea)
                </span>
                {label}
                </span>
        }
     <input
     disabled={disabled}
     onChange={onChange}
     value={value}
     placeholder={placeholder}
     type={type}
     className="
     w-full 
     rounded-lg 
     mt-2 
     p-3 
     text-sm 
     text-gray-500 
     outline-0
     
     "
     
     />

    </div>
  )
}

export default Input;
