import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import TaskFormPage from './pages/TaskFormPage'
import { AuthProvider } from './context/AuthContext'
import TasksPage from './pages/TasksPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route element={<ProtectedRoute/>}>
          <Route path='/tasks' element={<TasksPage/>}/>
          <Route path='/add-task' element={<TaskFormPage/>}/>
          <Route path='/tasks/:id' element={<TaskFormPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App