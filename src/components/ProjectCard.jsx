import React, { useRef } from 'react'
import Input from './Input.jsx'
import Modal from './Modal.jsx'

function ProjectCard({ onAdd, onCancel }) {
  const modal = useRef()
  const title = useRef()
  const description = useRef()
  const due_date = useRef()
  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = due_date.current.value

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open()
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate
    })

  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-stone-800 font-bebas font-bold text-lg">Invaild Input</h2>
        <p className="text-stone-600 text-lg my-2">Oops... looks like you forget to entered a value.</p>
        <p className="text-stone-600 text-lg my-2">Make sure to add all the input.</p>
      </Modal>
      <div className="h-screen w-3/5 flex flex-col justify-start p-20 gap-5">
        <div className='flex justify-end gap-5'>
          <button className='text-stone-700 hover:text-stone-950' onClick={onCancel}>Cancel</button>
          <button onClick={handleSave} className='bg-stone-800 hover:bg-stone-950 text-white rounded-lg w-20 h-10'>Save</button>
        </div>
        <Input Type='text' ref={title} label='TITLE' />
        <Input Type='text' ref={description} label="DESCRIPTION" textarea />
        <Input Type='date' ref={due_date} label="DUE DATE" />
      </div>
    </>
  )
}

export default ProjectCard