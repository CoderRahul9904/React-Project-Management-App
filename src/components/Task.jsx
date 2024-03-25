import React from 'react'
import NewTask from './NewTask.jsx'

function Task({ onTask, onTaskAdd }) {
    return (
        <section>
            <h2 className='text-2xl text-stone-800 font-bold'>Task</h2>
            <NewTask onTask={onTask} />
            {onTaskAdd.length === 0 &&
                <p className='text-stone-800 my-4'>This project does not have any task yet.</p>
            }
            {
                onTaskAdd.length > 0 &&
                (<ul className='p-4 mt-8 rounded-md bg-stone-100'>
                    {onTaskAdd.map((TaskToAdd) => {
                        <li key={TaskToAdd.id} className='flex justify-between my-4'>
                            <span>{TaskToAdd.text}</span>
                            <button className='text-stone-700 hover:text-red-600'>Clear</button>
                        </li>
                    })}
                </ul>)
            }

        </section>
    )
}

export default Task