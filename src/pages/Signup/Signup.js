import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../Login/login.css'

export default function Signup() {

  const [ displayName, setDispalyName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { Signup, error, isPending } = useSignup()
  const { state } = useAuthContext()

  const handleSubmit = (e) => {
       Signup(
         email,
         password,
        displayName
       )
      e.preventDefault()
  }

  return (
    <div className="signup">
      <Link to='/' className='link'>
         {/* {state && <button onClick={Logout()}>Logout</button>} */}
       <h1>Shell note</h1>
      </Link>
       <form onSubmit={handleSubmit}>
       <h2>SignUp</h2>
       {error && <div className='msg error'> {error}</div>}
          <label>
            <span>Username</span>
            <input type='text'
              required autoFocus
               onChange={(e) => setDispalyName(e.target.value)}/>
          </label>
          <label>
            <span>Email</span>
            <input type='email'
              required
               onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            <span>Password</span>
            <input type='password'
             required 
              onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <div className='Btn'>
            {!isPending && <button className='p-btn'>SignUp</button>}
           {isPending && <button id='Lbtn' disabled className='p-btn'>Loading...</button>}
          </div>
          <div className='inu'>
             have an account? <Link to='/login'>Login</Link>
          </div>
       </form>
    </div>
  )
}