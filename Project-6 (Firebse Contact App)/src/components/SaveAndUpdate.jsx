import React from 'react'
import Modal from './Modal'
import { Field, Formik, Form } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'

export default function SaveAndUpdate({ name, id, email, isopen, onClose, isupdate }) {

    const AddContacts = async (contact) => {
        try {
            const contectRef = collection(db, 'Contacts')
            if(contact.name==='' || contact.email==='') 
            {
                toast.error('Invalid! Missing name or email')
                return
            }
            await addDoc(contectRef, contact)
            toast.success("Added Successfully")
            onClose()

        } catch (error) {
            console.log(error)
        }
    }
    const updateContacts = async (contact,ID) => {
        try {
            const contectRef = doc(db, 'Contacts', ID)
            await updateDoc(contectRef, contact)
            toast.success("Updated Successfully")
            onClose()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Modal isopen={isopen} onClose={onClose}>
                <Formik
                    initialValues={
                        isupdate ? {
                            name: name,
                            email: email,
                        } :
                            {
                                name: '',
                                email: '',
                            }
                    }
                    onSubmit={(values) => {
                        isupdate ? updateContacts(values, id) : AddContacts(values)
                    }}
                >
                    <Form className='flex flex-col gap-3'>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <Field name='name' className='border border-black p-1 outline-none rounded' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <Field name='email' className='border border-black p-1 outline-none rounded' />
                        </div>
                        <button className='self-end bg-green-800 p-2 text-white rounded-md' >{isupdate ? 'Update' : 'Add'}</button>

                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}
