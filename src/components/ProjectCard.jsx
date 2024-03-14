import React from 'react'
import Input from './Input'
import { forwardRef } from 'react'

function ProjectCard({SaveContent}) {
  return (
    <div className="h-screen w-3/5 flex flex-col justify-start p-20 gap-5">
        <div className='flex justify-end gap-5'>
            <button className='text-black'>Cancel</button>
            <button className='bg-stone-800 text-white rounded-lg w-20 h-10'>Save</button>
        </div>
        <Input  Type='text' label='TITLE'/>
        <Input Type='text' label="DESCRIPTION" textarea/>
        <Input Type='date' label="DUE DATE"/>
    </div>
  )
}

export default ProjectCard