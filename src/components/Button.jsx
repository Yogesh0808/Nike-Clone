import React from 'react'

const Button = ({label , iconURL ,
backgroundColor , textColor , borderColor , fullWidth}) => {
  return (
    <div>
    <button className={`flex justify-center items-center gap-2 px-7 py-4 text-lg font-montserrat leading-none
    ${
      backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : " bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}
    >
    {label} 

    {iconURL && 
    <img src={iconURL}
        alt="arrow-right icon"
    className='ml-2 rounded-r-full w-5 h-5'
    />}
    </button>
    </div>
  )
}

export default Button