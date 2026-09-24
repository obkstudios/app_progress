import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Student from './pages/Student'
import Contributor from './pages/Contributor'
import Landing from './pages/Landing'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/student' element={<Student />} />
      <Route path='/contributor' element={<Contributor />} />
    </Routes>
  )
}
export default App
