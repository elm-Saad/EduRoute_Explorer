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




const Register = () =>{
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
        const {name,email,password} = values
        if(!email || !password || !name){
          toast.error('Please Fill Out All Fields')
          return
        }
        dispatch(RegisterUser({name,email,password}))
    }

    // navigate to the / when user is register or already in LocalStorage
    useEffect(() => {
      if (user) {
       
        setTimeout(() => {
          navigate('/')
        }, 2000)
      }
    }, [user])

    return <section className='h-screen grid place-items-center bg-base-200 w-full'>
    <form 
      className='card max-w-[95%] w-full md:w-96 p-4 md:p-8 bg-base-100 shadow-lg flex flex-col gap-y-2'
      onSubmit={handleSubmit}
    >
      <h4 className='text-center text-3xl font-bold'>Register</h4>


      <FormRow 
        type={'text'}
        name={'name'}
        value={values.name}
        handleChange={handleChange}
      />
      
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
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
      </p>
    </form>
  </section>
}





export default Register