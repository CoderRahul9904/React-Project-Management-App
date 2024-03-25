import React from 'react'
import Task from './Task.jsx';

function SelectedProject({ project, onDelete, onTask, onAddTask}) {
    const formattedDate = new Date(project.duedate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });    
    return (
        <div className='p-5 w-[40rem] mx-12'>
            <header className='my-5'>
                <div className='flex justify-between'>
                    <h2 className='text-3xl text-stone-900 mt-5'>{project.title}</h2>
                    <button onClick={onDelete} className='bg-stone-800 hover:bg-stone-950 text-white rounded-md my-2 px-2'>Delete</button>
                </div>
                <p className='mb-4 text-stone-400'>{formattedDate}</p>
                <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
            </header>
            <Task onTaskAdd={onAddTask} onTask={onTask}/>
        </div>
    )
}

export default SelectedProject