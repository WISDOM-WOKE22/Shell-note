import './Note.css'
import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import Collection from './Collection'
import NoteForm from './NoteForm'
import { FaPlus } from 'react-icons/fa'
import { useAuthContext } from '../../hooks/useAuthContext'
 
export default function Note() {
   const [ showForm, setShowForm ] = useState(false)
   const { user } = useAuthContext()
    const { documents, error } = useCollection(
      'Note',
       ["uid","==",user.uid],
       ["createdAt","desc"]
      )
      

    const handleClick =() => {
      showForm ? setShowForm(false) : setShowForm(true)
    }

     return(
        <div className='Task'>
            {showForm && <NoteForm uid={user.uid} setShowForm={setShowForm}/>}
           {documents && <Collection documents={documents} error={error} className='collection' />}
           <FaPlus 
             className='Taskbtn'
             onClick={() => handleClick()}/>
        </div>
     )
}