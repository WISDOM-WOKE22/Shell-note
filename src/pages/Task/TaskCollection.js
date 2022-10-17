import './TaskCollection.css'
import { useState } from 'react'
import { projectFirestore } from '../../firebase/firebaseConfig'

export default function TaskCollection({ documents }) {
    const [ completed, setCompleted ] = useState(false)
    const deleteItem = (id) => {
         projectFirestore.collection('Task').doc(id).delete()
      }
      const handleClick = (id) => {
        setCompleted(true)
        setTimeout(() => {
           deleteItem(id)
          setCompleted(false)
         }, 3000);
      }
      
  return (
    <ul className='task_collection'>
      {completed && <div className='success'>
        Task Completed successfully
        </div>}
      {documents.map((task) => (
        <li key={task.id} className='task_item'>
           <div className='dt'> 
            <span className='hd'>{task.task}</span>
            <span>{task.dueDate}</span>
           </div>
           <div className='note'>{task.TaskDescription}</div>
           <div className='ch'><input type='checkbox'
            onClick={() => handleClick(task.id)}
           /> mark as done </div>
        </li>
      )) }
    </ul>
  )
}
