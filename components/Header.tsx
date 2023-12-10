

interface HeaderProps{
title: string;
subTitle: string;
desc: string;

    
}

const Header = ({
  title,
  subTitle,
  desc
}:HeaderProps) => {
  return (
   <>
    <h1 className=" mt-5 text-5xl font-extrabold leading-[1.15]
                    text-black sm:text-6xl text-center">
      {title}
    
    <br className=" max-md:hidden"/>
    <span className=" bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500
                     bg-clip-text text-transparent text-center">
     {subTitle} 
    </span>
    </h1>
    <p className="text-center mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl " >
      {desc}
    </p>
  </>
  )
}

export default Header
