import React from 'react'

function Input({children,textarea, Type, label, ...props}) {
    const property=`w-full h-10 rounded-sm bg-stone-300 shadow-md border-b-2 border-black focus:border-none placeholder-stone-500`
  return (
    <>
    <h1 className='text-stone-600 text-lg font-semibold font-Libre'>{label}</h1>
    {!textarea ? <input type={Type} className={property} {...props}>{children}</input> :<textarea type={Type} className={property} {...props}>{children}</textarea> }
    </>
  )
}

export default Input