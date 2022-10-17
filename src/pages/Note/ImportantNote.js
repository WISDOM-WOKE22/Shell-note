import { useCollection } from "../../hooks/useCollection";
import { FaTrash } from "react-icons/fa";
import { projectFirestore } from "../../firebase/firebaseConfig";
import './Collection.css'

export default function ImportantNote() {
    const { documents } = useCollection(
        'Note',
        ["importantNote","==",true]
    )
    const deleteItem = (id) => {
        projectFirestore.collection('Note').doc(id).delete()
    }
  return (
    <div className="task-p pages">
        {!documents && <div className="cm-text">No Important Note Recorded</div>}
      <ul className='collection important'>
            {documents &&  documents.map((task) => (
                <li key={task.id} style={{background:task.BgColor }}>
                    <p className="op-title">{task.Title}<FaTrash
                     className='trash'
                      onClick={() => deleteItem(task.id)}
                      />
                      </p>
                    <p className='cl-ds'>
                        {task.Description}
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}
