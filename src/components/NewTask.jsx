import React, { useState } from 'react'
function NewTask({onTask}) {
    const [enteredTask, SetTask]=useState('')
    function HandleChange(event){
        SetTask(event.target.value)
    }
    function HandleClick(){
        onTask(enteredTask)
        SetTask('')
    }
  return (
    <div className='flex items-center gap-4 mt-2'>
        <input value={enteredTask} onChange={HandleChange} type='text' className='w-4/5 px-2 py-1 bg-stone-200 rounded-sm' />
        <button onClick={HandleClick} className='text-stone-700 hover:text-stone-950'>Add</button>
    </div>
  )
}

export default NewTask