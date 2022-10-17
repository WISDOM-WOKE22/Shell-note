import './Collection.css'
import { FaTrash } from 'react-icons/fa'
import { projectFirestore } from '../../firebase/firebaseConfig'
export default function Collection({ documents, error}) {
    const deleteItem = (id) => {
        projectFirestore.collection('Note').doc(id).delete()
    }
    return(
        <ul className='collection'>
            {documents.map((task) => (
                <li key={task.id} style={{background:task.BgColor }}>
                    <p className="op-title">{task.Title}<FaTrash
                     className='trash'
                      onClick={() => deleteItem(task.id)}
                      /></p>
                    <p className='cl-ds'>
                        {task.Description}
                    </p>
                </li>
            ))}
        </ul>
    )
}