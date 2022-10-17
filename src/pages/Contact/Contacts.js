import './contact.css'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import PhoneForm from './PhoneForm'
import ContactCollection from './ContactCollection'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Contacts() {
  const { user } = useAuthContext()
  const { documents } = useCollection(
    'Contacts'
  )
  const [ showForm, setShowForm ] = useState(false)
  const handleClick = () => {
    !showForm ? setShowForm(true) : setShowForm(false)
  }
  return (
    <div className="contact pages">
      <div className='addBtn'
        onClick={() => handleClick()}>
         <FaPlus/> Add Contact
      </div>
      {showForm && <PhoneForm  handleClick={handleClick} uid={user.uid}/>}
      {documents && <ContactCollection uid={user.uid}/>}
    </div>
  )
}
