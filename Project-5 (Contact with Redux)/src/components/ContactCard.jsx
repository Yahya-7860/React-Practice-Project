import { IoIosContact } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { TfiWrite } from "react-icons/tfi";
import { updateContact } from "../features/contact/contactSlice";
import { deleteContact } from "../features/contact/contactSlice";
import { useState } from "react";

export default function ContactCard({ text, id, isEditable }) {
    const dispatch = useDispatch()
    const [val, setval] = useState(text)

    const DeleteContact = (id) => {
        dispatch(deleteContact(id))
    }

    const Updatehandle = (id) => {
        dispatch(updateContact(id))
    }


    return (
        <div className="flex justify-center items-center ">
            <div className="p-4 border border-black w-96 bg-yellow-700 rounded-md mb-4">
                <div id="contentHere" className="flex justify-between items-center">

                    <div className="flex justify-center items-center gap-5">
                        <div id="logo" className="text-3xl text-white">
                            <IoIosContact />
                        </div>

                        <div id="name" className="text-white font-bold text-2xl">
                            <input type="text" value={val} onChange={(e) => setval(e.target.value)} className={`w-full text-white bg-transparent outline-none ${isEditable
                                ? "border border-white rounded"
                                : "outline-none"
                                } `} readOnly={!isEditable} />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div id="update" className="text-2xl text-white">
                            <TfiWrite onClick={() => Updatehandle(id)} />
                        </div>
                        <div id="delete" className="text-2xl text-white">
                            <MdDelete onClick={() => DeleteContact(id)} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
