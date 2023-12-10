interface TextAreaProps{
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
      
  
  }

const TextArea = ({
    placeholder,
    value,
    disabled,
    onChange,
    label
}:TextAreaProps) => {
  return (
    <div className="w-full">
      {label && <span 
      className="
      font-satoshi 
      font-semibold
       text-gray-700 
       text-base">
            
      {label}
        </span>}

        <textarea
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full 
        flex 
        rounded-lg 
        h-[200px] 
        mt-2 
        p-3 
        text-sm
        text-gray-500 
        outline-0"
        
        />
    </div>
  )
}

export default TextArea
