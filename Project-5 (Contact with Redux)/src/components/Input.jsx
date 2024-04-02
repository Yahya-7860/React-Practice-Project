import { useState } from 'react'
import { addContact } from '../features/contact/contactSlice'
import { useDispatch } from 'react-redux'

export default function Input() {

    const [value, setvalue] = useState()
    const dispatch = useDispatch();

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(value))
        setvalue('')
    }

    return (
        <form onSubmit={HandleSubmit}>
            <div className='flex justify-center items-center'>
                <div id="inputBox" className='w-96 p-6 flex justify-center items-center gap-4 ' >
                    <input
                        type="text"
                        placeholder='Enter Contact'
                        className='border border-black p-3 rounded w-60 outline-none'
                        value={value}
                        onChange={(e) => setvalue(e.target.value)}
                    />
                    <button className='bg-black text-white p-3 rounded-full active:bg-white active:text-black'>Add</button>
                </div>
            </div>
        </form>
    )
}
