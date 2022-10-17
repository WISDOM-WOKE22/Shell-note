import Sidebar from "../../components/Sidebar";
import './Dashboard.css'
import { FaBars } from 'react-icons/fa'
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [ showSidebar, setShowSidebar ] = useState(true)
  const { user } = useAuthContext()
  const handleMenubar = () => {
     showSidebar? setShowSidebar(false): setShowSidebar(true)
  }
    useEffect(() => {
        window.addEventListener('resize', () => {
            const myWidth  = window.innerWidth;
            if(myWidth <= 800){
                showSidebar ? setShowSidebar(false): setShowSidebar(true)
            }
            if(myWidth >= 801){
                setShowSidebar(true)
              }
            })
    },[showSidebar])
     return(
        <div className="dashboard">
          <header>
            <nav className="db_nav" >
              <div className="m_bar">
               <FaBars 
                className="menu-bar"
                 onClick={() => handleMenubar()}/>
              </div>
              {user && <div className="U-name">
                hello <span className="userName">{user.displayName}</span> 
              </div>}
            </nav>
          </header>
               {showSidebar && (<Sidebar className='nav_bar sidebar2'/>)}
        </div>
     )
}