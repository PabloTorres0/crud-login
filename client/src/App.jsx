import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>}/>
        <Route path='/login' element={<h1><LoginPage/></h1>}/>
        <Route path='/register' element={<h1><RegisterPage/></h1>}/>
        <Route path='/tasks' element={<h1>Tasks page</h1>}/>
        <Route path='/add-task' element={<h1>New Task</h1>}/>
        <Route path='/tasks/:id' element={<h1>Update task</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App