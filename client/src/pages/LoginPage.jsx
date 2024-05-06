import { useForm } from "react-hook-form"
import {useAuth} from '../context/AuthContext.jsx'
import {Link} from 'react-router-dom'
const LoginPage = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()
  const {signin, errors:signinErrors} = useAuth()


  const onSubmit = handleSubmit ((data)=>{
    signin(data)
  })


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      {
        signinErrors.map ((error,i)=>(
          <div key={i} className='bg-red-500 p-2 text-white text-center'>
            {error}
          </div>))
      }
        <h1 className="text-2xl font-bolt">Login</h1>
          <form onSubmit={onSubmit}>

            <input type="email" {...register('email', { required: true }) } 
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
              placeholder='Email'
            />
            {
              errors.email && (
                <p className='text-red-500'>Email is required</p>
              )
            }
            
            <input type="password"{...register('password', { required: true }) }
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
              placeholder='Password'
              autoComplete='on'
            />
            {
              errors.password && (
                <p className='text-red-500'>Password is required</p>
              )
            }
            <button type='submit'>Login</button>
          </form>
          <p className="flex gap-x-2 justify-between">
            Don't have an accont? <Link className="text-sky-500" to='/register'>Song up</Link> 
          </p>
      </div>
      </div>

  )
}

export default LoginPage