import { useState } from 'react'
import './ContactForm.css'
import { useFirestore } from '../../hooks/useFirestore'

export default function PhoneForm({ handleClick, uid}) {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ nameError, setNameError ] = useState(null)
    const [ phoneError, setPhoneError ] = useState(null)
    const { addDocument } = useFirestore('Contacts') 

    const handleSubmit =(e) => {     
        e.preventDefault()
        if(!name){
          return  setNameError('input a name')
        }else{
            setNameError(null)
        }
         if(!phone){
           return  setPhoneError('input a phone number')
         } else{
            setPhoneError(null)
         }
         if(name && phone) {
             setPhoneError(null)
             setNameError(null)
             addDocument({ uid,name,phone })
             handleClick()
         }

    }

    return(
        <div className='contactform'>
              <form onSubmit={(e) => handleSubmit(e)}> 
                <label>
                    <span>Name</span>
                    <input type='text'
                      className='c-input'
                      placeholder='Enter Name'
                       onChange={(e) => setName(e.target.value)}
                       value={name}
                       />
                       {nameError && <span className='error'>{nameError}</span> }
                </label>
                <label>
                    <span>Phone</span>
                    <input type='number' 
                      className='c-input'
                      placeholder='Enter Phone number'
                       onChange={(e) => setPhone(e.target.value)}
                       value={phone}
                       />
                       {nameError && <span className='error'>{phoneError}</span> }
                </label>
                <div className='mt'>
                   <button>Add Contact</button>
                    <button onClick={() => handleClick()}>Cancel</button>
                </div>
              </form>
        </div>
    )
}