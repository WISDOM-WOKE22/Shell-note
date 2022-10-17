import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import ImportantTask from './pages/Task/ImportantTask';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Note from './pages/Note/Note';
import Task from './pages/Task/Task';
import Contacts from './pages/Contact/Contacts';
import ImportantNote from './pages/Note/ImportantNote';
import { useAuthContext } from '../src/hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
          {user && <Dashboard/>}
          <Routes>
            <Route path='/' element={user ? <Note/>:<LandingPage/> }/>
            <Route path='/login' element={user? <Note/>:<Login/>} />
            <Route path='/sign-up' element={user ? <Note/>:<Signup/>} />
            <Route path='/dashboard/tasks/important-task' element={user? <ImportantTask/>:<LandingPage/>}/>
            <Route path='/dashboard/notes' element={user ? <Note/>: <LandingPage/>}/>
            <Route path='/dashboard/tasks' element={user ? <Task/>:<LandingPage/>}/>
            <Route path='/dashboard/notes/important_notes' element={user? <ImportantNote/>:<LandingPage/>}/>
            <Route path='/dashboard/contacts' element={user ? <Contacts/>:<LandingPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
