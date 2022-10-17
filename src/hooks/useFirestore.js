import { projectFirestore, timestamp } from '../firebase/firebaseConfig'
import { useState, useEffect, useReducer } from 'react'

let initiaState = {
    document:null,
    isPending: false,
    error: null,
    success:  null
}

const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return { isPending:true, error:null, document:null, success:null}
        case ' ADDED_DOCUMENT':
            return {...state,success:true, document:action.payload, error:null, isPending:false}
        case 'DELETE_DOCUMENT':
            return{ document:action.payload, isPending:false, error:null, success:true }
        case 'ERROR':
            return {document:null, isPending:false, error:action.payload, success:false}
        default:
            return state
    }
}

export const useFirestore = (collection) => {

    const [ response, dispatch ] = useReducer(firestoreReducer, initiaState )
    const [ isCancelled, setIsCancelled ] = useState(false)

    // collection ref
    const ref = projectFirestore.collection(collection)

    // add a document
    const addDocument = async (doc) => {
          dispatch({ type:'IS_PENDING'})
        try{
            const createdAt = timestamp.fromDate( new Date())
           const addedDocument = await ref.add({...doc,createdAt})

           if(!isCancelled){
               dispatch({ type: 'ADDED_DOCUMENT', payload:addedDocument})
           }
        } catch(error) {
            dispatch({ type:'ERROR', payload:error.message})
        }
    }

    const deleteDocument = async (id) => {
        try{
            const deletedDocument = await ref.doc(id).delete()
            dispatch({ type:'DELETED_DOCUMENT', payload:deletedDocument})
        }catch{
           dispatch({type:'ERROR', payload:'Could not delete item'})
        }
    }
     useEffect(() => {
        return () => setIsCancelled(true)
     }, [])

      return { addDocument, deleteDocument, response }
}