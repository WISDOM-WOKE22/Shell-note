import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
import './login.css'

export default function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { Login ,error, isPending } = useLogin()

  const handleSubmit = (e) => {
       Login(
        email,
        password
       )
      e.preventDefault()
  }

  return (
    <div className="login">
      <Link to='/' className='link'>
       <h1>Shell note</h1>
      </Link>
       <form onSubmit={handleSubmit}>
       <h2>Login</h2>
       {error && <div className='msg error'>{error}</div>}
          <label>
            <span>Email</span>
            <input type='text'
              required autoFocus
               onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            <span>Password</span>
            <input type='password'
             required 
              onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <div className='Btn'>

          {!isPending && <button className='p-btn' >Login</button>}
          {isPending && <button className='p-btn' disabled id='Lbtn'>Loading...</button>}
          </div>
          <div className='inu'>
             Don't have an account? <Link to='/sign-up'>SignUp</Link>
          </div>
       </form>
    </div>
  )
}
