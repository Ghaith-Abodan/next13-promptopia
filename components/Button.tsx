
interface ButtonProps{
    label:string;
    secondary?:boolean;
    fullWidth?:boolean;
    large?:boolean;
    onClick:()=>void;
    disabled?:boolean;
    outline?:boolean;

}

const Button = ({
    label, 
    secondary, 
    fullWidth, 
    onClick, 
    large, 
    disabled, 
    outline 
}:ButtonProps) => {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    font-semibold
    hover:opacity-80
    transition
    border-0
    ${fullWidth ? 'w-full' : 'w-fit'}
    ${secondary ? ' bg-transparent text-gray-500 '  : 'bg-primary-orange text-white '}
    ${large ? 'text-xl px-5 py-3' : 'text-md px-4 py-2'}
    ${outline ? 'bg-transparent border-white text-white' : ''}
  
      `}
    
    >
      {label}
    </button>
  )
}

export default Button
