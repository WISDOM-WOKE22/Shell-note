import { projectAuth } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";
import { useState } from 'react'

export const useLogin = () => {

    const [ error, setError ] = useState(null)
    const [ isPending, setIsPending ] = useState(false)
    const { dispatch } = useAuthContext() 

    const Login = async(email, password) => {
        setError(null)
        setIsPending(true)

        try{
          const response = await projectAuth.signInWithEmailAndPassword( email, password )
          if(!response){
            throw new Error('Could not complete Login')
          }
            dispatch({ type: 'LOGIN', payload: response.user})
            setError(null)
            setIsPending(false)
        } catch(error) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }

    return { Login, error, isPending }
}