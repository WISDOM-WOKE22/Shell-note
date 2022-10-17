import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useFirestore } from '../../hooks/useFirestore'
import './NoteForm.css'

export default function NoteForm({ uid, setShowForm }){
    const [ Title, setTitle ] = useState('')
    const [ Description, setDescription ] = useState('')
    const [ BgColor, setBgColor ] = useState('')
    const [ importantNote, setImportantNote ] = useState(false)
    const { addDocument, response} = useFirestore('Note')
    const handleSubmit = (e) => {
        addDocument({
          uid,
          Title,
          Description,
          BgColor,
          importantNote})
          setShowForm(false)
          setBgColor('')
        setTitle('')
        setImportantNote(false)
        setDescription('')
      e.preventDefault()
  }
    return (
        <>
         <div className='P-form' >
             <form
               style={{backgroundColor:BgColor}}
               onSubmit={(e) => handleSubmit(e)}>
               <span className='r-btn' onClick={() => setShowForm(false)}>X</span>
                <input type='text'
                  placeholder='Title'
                  id='task-title'
                  onChange={(e) => setTitle(e.target.value)}
                   /> 
                  <textarea placeholder='Description'
                   onChange={(e) => setDescription(e.target.value)}
                   />
                   <div className='color-changer'>
                    <span className='c-white'
                     onClick={() => setBgColor('#fff')}
                     ></span>
                    <span className='c-green'
                      onClick={() => setBgColor('rgb(185, 238, 201)')}
                      ></span>
                    <span className='c-red'
                      onClick={() => setBgColor('rgb(240, 190, 190)')}
                      ></span>
                    <span className='c-blue'
                      onClick={() => setBgColor('rgb(208, 231, 240)')}
                      ></span>
                  </div>
                  <div className='F-btn'>
                      <button> <FaPlus/> note </button>
                      <span 
                      onClick={() => setImportantNote(true)}
                      >
                        mark as Important
                      </span>
                  </div>
             </form>
            </div>
        </>
    )
}
