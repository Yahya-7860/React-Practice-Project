import { FaSearch } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";


export default function SearchInput({onOpen,filterContact}) {
    return (
        <div className="flex justify-center items-center mb-5">
            <div className="flex justify-between items-center mt-4 gap-3 w-[350px] ">
                <div className="flex justify-between items-center border-2 border-white rounded-md ">
                    <FaSearch className="text-3xl pl-2 text-white" />
                    <input onChange={filterContact} type="text" placeholder='Search Contact' className="p-2 w-full bg-transparent placeholder:text-gray-400 outline-none text-white text-2xl" />
                </div>
                <FaPlusSquare onClick={onOpen} className="text-6xl text-white cursor-pointer" />

            </div>
        </div>
    )
}
