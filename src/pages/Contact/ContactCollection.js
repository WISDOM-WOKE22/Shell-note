import { projectFirestore } from '../../firebase/firebaseConfig'
import './contactcollection.css'
import { FaTrash } from 'react-icons/fa'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function ContactCollection() {
  const { user } = useAuthContext()
  const { documents } = useCollection(
    'Contacts',
    ["uid","==",user.uid],
    [ "createdAt","desc"]
  ) 
    const deleteItem = (id) => {
        projectFirestore.collection('Contacts').doc(id).delete()
    }
  return (
    <div className='contact'>
        <ul className='contact-con'>    
            {documents && documents.map((contact) => (
                <li key={contact.id} className='contact-item'>
                   <span className='contact-name'>{contact.name}</span>
                   <span>{contact.phone} 
                      <FaTrash 
                        className='trash'
                        onClick={() => deleteItem(contact.id)}
                      />
                     </span>
                </li>
            ))}
        </ul>
    </div>
  )
}
