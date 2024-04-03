import { createPortal } from 'react-dom'
import { AiOutlineClose } from "react-icons/ai";


export default function Modal({ isopen, onClose, children }) {
    return createPortal(
        <>
            {isopen && <div className='grid place-items-center absolute z-40 top-0 backdrop-blur w-screen h-screen'>
                <div className='m-auto  relative z-50 w-[360px] border border-white h-[230px] bg-white p-2 rounded shadow-xl'>
                    <div className=' flex justify-end'>
                        <AiOutlineClose className='text-2xl cursor-pointer' onClick={onClose} />
                    </div>
                    {children}
                </div>

            </div>}
        </>
        , document.getElementById('modal-root'))
}
