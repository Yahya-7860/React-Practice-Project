import { IoMdContact } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import SaveAndUpdate from "./SaveAndUpdate";
import useDisclause from "../hook/useDisclause";
import { toast } from "react-toastify";


export default function ContactCard({ name, email, id }) {

    const {isopen,onClose,onOpen} = useDisclause()

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, 'Contacts', id))
            toast.success("Deleted Successfully")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=" flex justify-center items-center">
            <div className="flex justify-between items-center rounded-md p-2 bg-yellow-200 w-[360px] mb-4">
                <div className="flex justify-center items-center gap-3">
                    <IoMdContact className="text-4xl text-orange-400" />
                    <div>
                        <h2 className="font-bold text-[20px]">{name}</h2>
                        <p className="text-[13px]">{email}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <FaEdit onClick={onOpen} className="text-4xl cursor-pointer hover:text-gray-500 active:text-black" />
                    <MdDelete onClick={() => deleteContact(id)} className="text-4xl cursor-pointer hover:text-gray-500 active:text-black" />
                </div>
            </div>

            <SaveAndUpdate isupdate id={id} name={name} email={email} isopen={isopen} onClose={onClose} />

        </div>
    )
}
