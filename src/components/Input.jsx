import React from 'react'
import { forwardRef } from 'react'
const Input = forwardRef(function Input({ children, textarea, Type, label, ...props }, ref) {
  const property = `w-full h-10 rounded-sm bg-stone-300 shadow-md border-b-2 border-black focus:border-none placeholder-stone-500`
  return (
    <>
      <h1 className='text-stone-600 text-lg font-semibold font-Libre'>{label}</h1>
      {!textarea ?
        <input ref={ref} type={Type} className={property} {...props}>{children}</input>
        :
        <textarea ref={ref} type={Type} className="w-full h-20 rounded-sm bg-stone-300 shadow-md border-b-2 border-black focus:border-none placeholder-stone-500`" {...props}>{children}</textarea>}
    </>
  )
})

export default Input