import TaskForm from "./TaskForm"
import TaskCollection from "./TaskCollection"
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Task() {
  const { user } = useAuthContext()
  const { documents, response } = useCollection(
    'Task',
     ["uid","==",user.uid],
     ["createdAt", "desc"]
  )
  return (
    <div className="task-P pages">
       <h2>My Task</h2>
       <TaskForm uid={user.uid} />
       { documents && <TaskCollection documents={documents}/> }
    </div>
  )
}