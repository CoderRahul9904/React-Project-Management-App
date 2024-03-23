import React, { useRef } from 'react'
import Input from './Input'

function ProjectCard({ onAdd }) {
  const title = useRef()
  const description = useRef()
  const due_date = useRef()
  function handleSave() {
    const enteredTitle=title.current.value
    const enteredDescription=description.current.value
    const enteredDueDate=due_date.current.value

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate
    })

  }
  return (
    <div className="h-screen w-3/5 flex flex-col justify-start p-20 gap-5">
      <div className='flex justify-end gap-5'>
        <button className='text-stone-700 hover:text-stone-950'>Cancel</button>
        <button onClick={handleSave} className='bg-stone-800 hover:bg-stone-950 text-white rounded-lg w-20 h-10'>Save</button>
      </div>
      <Input Type='text' ref={title} label='TITLE' />
      <Input Type='text' ref={description} label="DESCRIPTION" textarea />
      <Input Type='date' ref={due_date}label="DUE DATE" />
    </div>
  )
}

export default ProjectCard