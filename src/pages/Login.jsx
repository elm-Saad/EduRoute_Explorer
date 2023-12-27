import { useState, useEffect } from 'react'
import { FormRow, Logo, SubmitBtn } from '../components'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, RegisterUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'


 
const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true
}




const Login = () =>{
    const navigate = useNavigate()

    const [values,setValues] = useState(initialState)

    const {user, isLoading} = useSelector((store)=>store.user)
    const dispatch = useDispatch()

    const handleChange = (e) =>{
      setValues(e.target.value)
      const nameOfInput = e.target.name
      const valueOfInput = e.target.value 
      setValues({...values,[nameOfInput]:valueOfInput})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const {email,password} = values
        if(!email || !password){
          toast.error('Please Fill Out All Fields')
          return
        }
        
        dispatch(LoginUser({email,password}))
       
    }

    // navigate to the / when user is register or already in LocalStorage
    useEffect(() => {
      if (user) {
       
        setTimeout(() => {
          navigate('/')
        }, 2000)
      }
    }, [user])

    return <section className='h-screen grid place-items-center'>
    <form 
      className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      onSubmit={handleSubmit}
    >
      <h4 className='text-center text-3xl font-bold'>Login</h4>

      <FormRow 
        type={'email'}
        name={'email'}
        value={values.email}
        handleChange={handleChange}
      />
      <FormRow 
        type={'password'}
        name={'password'}
        value={values.password}
        handleChange={handleChange}
      />
      
      <SubmitBtn isLoading={isLoading}/>

      <button 
          type='submit'
          className='btn'
          disabled={isLoading}
          onClick={()=> dispatch(LoginUser({ email: 'testUser@test.com', password: 'secret' }))}
        >
          {
          isLoading?
          <>
            <span className="loading loading-spinner"></span>
            loading
          </>
            :
            'Demo App'
          }
        </button>
      <p className='text-center'>
          not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            Register
          </Link>
      </p>
    </form>
  </section>
}


export default Login