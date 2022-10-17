import { useCollection } from "../../hooks/useCollection";
import './TaskCollection.css'

export default function ImportantTask() {

    const { documents } = useCollection( 'Task',
    ["important","==",true] )
  return (
    <div className="task-p pages">
        <ul className="task_collection">
            {!documents && <div>No Important Task Recorded</div>}
            {documents && documents.map((task) => (
                <li key={task.id} className='task_item'>
                    <div className="dt">
                        <span className="hd">{task.task}</span>
                        <span>{task.dueDate}</span>
                    </div>
                    <div className="note">{task.TaskDescription}</div>
                </li>
            ))}
        </ul>
    </div>
  )
}
