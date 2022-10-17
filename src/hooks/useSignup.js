import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/firebaseConfig'
import { useAuthContext } from '../hooks/useAuthContext'

export const useSignup =() => {
    const [ error, setError ] = useState(null)
    const [ isPending, setIsPending ] = useState(false)
    const { dispatch } = useAuthContext()
    const [ unsub, setUnsub ] = useState(true)

    const Signup = async (email,password, displayName) => {
        setError(null)
        setIsPending(true)
        try{
            // SignUp user
           const response = await projectAuth.createUserWithEmailAndPassword(email, password)

            if(!response) {
                throw new Error('Could not complete Signup')
            }
            
            
            // Update user profile
            await response.user.updateProfile({ displayName })
            
            // dispatch login action
            dispatch({ type:'LOGIN', payload:response.user })
            
            // update state
            setError(null)
            setIsPending(false)
            console.log(response.user)

        }catch(err) {
                console.log(err)
                setError(err.message)
                setIsPending(false)
        }
    }

    useEffect(() => {
        return () => unsub
    },[unsub])

    return { error, isPending, Signup }
}