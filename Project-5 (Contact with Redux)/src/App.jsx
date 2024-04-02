import ContactCard from "./components/ContactCard"
import HeaderSticker from "./components/HeaderSticker"
import Input from "./components/Input"
import { useSelector } from "react-redux"


function App() {

  const contacts = useSelector(state => state.contacts)

  return (
    <>

      <HeaderSticker />
      <Input />

      {
        contacts.map((contact) => (
          <ContactCard key={contact.id} text={contact.text} id={contact.id} isEditable={contact.isEditable}/>
        ))
      }

    </>
  )
}

export default App
