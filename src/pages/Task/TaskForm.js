import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import './TaskForm.css'

export default function TaskForm({ uid }) {
    const [ task, setTask ] = useState('')
    const [ dueDate, setDueDate ] = useState('')
    const [ TaskDescription, setTaskDescription ] = useState('')
    const [ important ,setImportant ] = useState(false)
    const [ taskError, setTaskError ] = useState(null)
    const [ dueDateError, setDueDateError ] = useState(null)
    const [ TaskDescriptionError, setTaskDescriptionError] = useState(null)
    const { addDocument } = useFirestore('Task')

    // const clearInputField = () => {
     
    // } 
 
    const handleSubmit = (e) => {
      e.preventDefault()

        if(!task){
           return setTaskError('please input a task Title')
        }else{
         setTaskError(null)
        }
        if(!dueDate){
          return setDueDateError('please select date due for the task')
        }else{
         setDueDateError(null)
        }
        if(!TaskDescription){
         return setTaskDescriptionError('please give your task a description')
        } else{
         setTaskDescriptionError(null)
        }
        if(task && dueDate && TaskDescription){     
             addDocument({
                uid,
                task,
                dueDate,
                TaskDescription,
                important
            })
            setImportant(false)
            setDueDateError(null)
            setTaskError(null)
            setTask('')
            setDueDate('')
            setTaskDescription('')

            // clearInputField()
        }
    }

  return (
    <div className='form-con'>
       <form onSubmit={handleSubmit}>
          <input type='text'
           placeholder='My Task....'
           className='text'
           value={task}
           onChange={(e) => setTask(e.target.value)}
           />
           <input type='date'
             className='time'
             value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}  
            />
            <span className='it'>
            {taskError && <span className='error'>{taskError}</span>}
            {dueDateError && <span className='error'>{dueDateError}</span> }
            </span>
            <div className='ds'>
               <input type='text' 
                placeholder='Task description'
                value={TaskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
               />
               {TaskDescriptionError && <span className='error'>{TaskDescriptionError}</span>}
            </div>
           <div className='mt'>
             <button>Add Task</button>
             <span 
               onClick={() => setImportant(true)}
              >Mark as important</span>
           </div>
       </form>
    </div>
  )
}
