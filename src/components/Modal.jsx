import { useImperativeHandle, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog=useRef()
    useImperativeHandle((ref), () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-5 rounded-lg'>{children}
        <form method='dialog' className='text-right'><button className="bg-stone-800 font-semibold p-1 text-stone-500 left-0 rounded-md mt-2">Close</button></form>
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default Modal