import './/landingPage.css'
import { Link } from 'react-router-dom'
import Image from '../assets/LPimage.webp'

export default function LandingPage() {
  return (
    <div className="LP">
       <header>
         <nav>
            <div className="db-logo">Shell-note</div>
            <div className='nav-list'>
                <li><Link to='/login' className='link nav-btn'  id='lg'>Login</Link></li>

            </div>
         </nav>
       </header>
               <div className='content'>
                <div className='cont-int'>
                 <div className='int'>
                  <p>
                   Set Tasks, Manage Contacts and take notes the modern way 
                  </p>
                  <Link to='/sign-up'>
                   <button>Get started</button>
                  </Link>
                 </div>
                 <div className='int-img'>
                    <img src={Image} alt=''/>
                 </div>
                </div>
               </div>
               <footer>Created by <a href='https://github.com/WISDOM-WOKE22' target='_blank'>Wisdom woke</a></footer>
    </div>
  )
}