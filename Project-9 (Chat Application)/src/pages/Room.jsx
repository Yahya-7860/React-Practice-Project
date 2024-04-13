import React from "react";
import { useEffect, useState } from 'react'
import { ID, Query } from 'appwrite'
import { PROJECT_ID, COLLECTION_ID_MESSAGES, DATABSE_ID } from '../appwriteConfig'
import { databases } from '../appwriteConfig'
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from '../appwriteConfig';
import { IoSend } from "react-icons/io5";
import Header from "../components/Header";

export default function Room() {

    const [allMsg, setAllMsg] = useState([])
    const [text, setText] = useState('')

    useEffect(() => {
        ListingDocs()

        const unsubscribe = client.subscribe(`databases.${DATABSE_ID}.collections.${COLLECTION_ID_MESSAGES}.documents`, response => {
            // console.log(response);
            if (response.events.includes("databases.*.collections.*.documents.*.create")) {
                // console.log('message created');
                setAllMsg((preState) => [response.payload, ...preState])

            }
            if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
                // console.log('message deleted');
                setAllMsg(pre => pre.filter(preItem => preItem.$id !== response.payload.$id))

            }
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const payload = {
        body: text
    }


    const ListingDocs = async () => {
        const res = await databases.listDocuments(
            DATABSE_ID,
            COLLECTION_ID_MESSAGES
        )
        setAllMsg(res.documents)
        console.log(allMsg)
    }

    const HandleCreatingDocument = async (e) => {
        e.preventDefault();
        if (text === '') {
            toast.error("Empty Message !");
            return;
        }
        const res = await databases.createDocument(
            DATABSE_ID,
            COLLECTION_ID_MESSAGES,
            ID.unique(),
            payload
        )
        setText('')
    }

    const deleteDocs = async (textID) => {
        const res = databases.deleteDocument(
            DATABSE_ID,
            COLLECTION_ID_MESSAGES,
            textID
        )
    }


    return (
        <>
            <div className=' grid place-items-center h-screen bg-gray-900'>
                <div className="w-screen mt-[-2rem]">
                    <Header />
                </div>
                <div className='mt-[-3rem] border border-gray-500 w-1/2 h-[30rem] bg-gray-700 text-white p-3 rounded-md overflow-y-auto'>

                    {/* //! text area */}
                    <div className='mb-3'>
                        <form className=' w-[95%] flex items-center gap-2 ' onSubmit={HandleCreatingDocument}>
                            <input type="text" placeholder='Enter Text....' className='rounded-md p-2 bg-gray-500  w-[100%] outline-none' onChange={(e) => setText(e.target.value)} value={text} />

                            <button type='submit' className='bg-green-300 text-black px-3 py-2 rounded-full active:bg-black active:text-green-300 duration-200'><IoSend /></button>

                        </form>

                    </div>


                    {/* //! text designing */}
                    <div >
                        <div>
                            {
                                allMsg.length > 0 ?
                                    allMsg.map((msg) => (
                                        <div key={msg.$id}>
                                            <div>
                                                <div className='text-[11px] text-gray-400'>
                                                    <p> {new Date(msg.$createdAt).toLocaleTimeString()}</p>
                                                </div>
                                                <div className='my-1 flex items-center gap-2'>
                                                    {

                                                    }
                                                    <span className='py-1 px-3 bg-green-600 rounded-lg text-[18px]'>
                                                        {msg.body}

                                                    </span>
                                                    <div>
                                                        <FaTrashAlt className='text-gray-400 active:text-black ' onClick={() => deleteDocs(msg.$id)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <h1 className='text-2xl text-center'>Start Chatting...</h1>
                            }

                        </div>

                    </div>

                </div>
            </div>
        </>


    )
}


