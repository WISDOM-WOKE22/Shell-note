import { projectAuth } from '../firebase/firebaseConfig'
import { useAuthContext } from './useAuthContext'
import { useState } from 'react'

export const useLogout = () => {

    const [ error, setError ] = useState(null)
    const [ isPending, setIsPending ] = useState(false)
    const { dispatch } = useAuthContext()

    const Logout = async () => {
       setError(null) 
       setIsPending(true)
       try{
          await projectAuth.signOut()
        //   dispatch logout action
        dispatch({ type:"LOGOUT"})
        setError(null)
        setIsPending(false)
       } catch(error){
        console.log(error.message)
        setIsPending(false)
        setError(error.message)
       }
    } 
    return { Logout, error, isPending }
}