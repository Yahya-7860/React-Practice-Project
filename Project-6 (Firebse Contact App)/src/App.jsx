import { useEffect, useState } from "react"
import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import ContactCard from "./components/ContactCard"
import Modal from "./components/Modal"
import SaveAndUpdate from "./components/SaveAndUpdate"
import useDisclause from "./hook/useDisclause"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Empty from "./components/Empty"

function App() {

  const [contacts, setcontacts] = useState([])
  const { isopen, onOpen, onClose } = useDisclause()



  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, 'Contacts');

        onSnapshot(contactRef, (snapshop) => {
          const contactlist = snapshop.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
          setcontacts(contactlist)
          return contactlist
        })

      } catch (error) {
        console.log(error)
      }
    }
    getContacts();
  }, [])

  const filterContact = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, 'Contacts');

    onSnapshot(contactRef, (snapshop) => {
      const contactlist = snapshop.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })

      const filteredcontacts = contactlist.filter((contact)=> contact.name.toLowerCase().includes(value.toLowerCase()))

      setcontacts(filteredcontacts)
      return filteredcontacts
    })

  }

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="w-[400px] bg-gray-800">
          <Header />
          <SearchInput filterContact={filterContact} onOpen={onOpen} />
          {
            contacts.length<=0 ? <Empty/> : contacts.map((contact) => (
              <ContactCard key={contact.id} name={contact.name} email={contact.email} id={contact.id} />
            ))
          }
        </div>

        <SaveAndUpdate isopen={isopen} onClose={onClose} />
      </div>
      <ToastContainer position="bottom-center" />

    </>
  )
}

export default App
