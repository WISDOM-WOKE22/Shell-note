import './Sidebar.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useRef }  from 'react'

export default function Navbar() {
    const { Logout } = useLogout()
    const navbar = useRef()

    return(
        <div className='Nav'>
         <div className='Navbar '
         ref={navbar}>
            <nav>
                <div className='nav_con'>
                    <div className='logo'>Shell note</div>
                    <div className='menu_list'>
                    <li className='main_item'>
                        <Link to='/dashboard/tasks' className='link'>Task</Link>
                         <hr/> 
                      </li>
                         <Link to='/dashboard/tasks/important-task'  className='sub_item link'>Important Task</Link>
                         {/* <li className='main_item'>
                            <Link to='/dashboard/contacts' className='link'>
                             Contacts </Link>
                             </li>  */}
                      <li className='main_item'>
                        <Link to='/dashboard/notes' className='link'> Notes </Link> 
                        <hr/>
                        </li>
                       <li className='sub_item'>
                        <Link to='/dashboard/notes/important_notes' className='link'>
                         Important Notes 
                        </Link>
                        </li>
                    </div>
                    <div className='nav_btn'>
                      <button 
                        onClick = {Logout}
                      >Logout</button>
                    </div>
                </div>
            </nav>
         </div>
         <div className='mobile'>
         </div>
        </div>
    )
}