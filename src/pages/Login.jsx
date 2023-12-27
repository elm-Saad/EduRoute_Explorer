// import { useState, useEffect } from 'react'
// import { FormRow, Logo } from '../components'
// import { toast } from 'react-toastify'
// import { useDispatch, useSelector } from 'react-redux'
// import { LoginUser, RegisterUser } from '../features/user/userSlice'
// import { useNavigate } from 'react-router-dom'


 
const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true
}




const Login = () =>{
    // const navigate = useNavigate()

    // const [values,setValues] = useState(initialState)

    // const {user, isLoading} = useSelector((store)=>store.user)
    // const dispatch = useDispatch()

    // const handleChange = (e) =>{
    //   setValues(e.target.value)
    //   const nameOfInput = e.target.name
    //   const valueOfInput = e.target.value 
    //   setValues({...values,[nameOfInput]:valueOfInput})
    // }
    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     const {name,email,password,isMember} = values
    //     if(!email || !password || (!isMember && !name)){
    //       //error
    //       toast.error('Please Fill Out All Fields')
    //       return
    //     }
    //     if(isMember){
    //       dispatch(LoginUser({email,password}))
    //       return
    //     }
    //     dispatch(RegisterUser({name,email,password}))
    // }

    // // navigate to the / when user is login/register or already in LocalStorage
    // useEffect(() => {
    //   if (user) {
    //     //to see the welcome/hi message
    //     setTimeout(() => {
    //       navigate('/')
    //     }, 2000)
    //   }
    // }, [user])

    // const ToggleMember = ()=>{
    //   setValues({...values,isMember:!values.isMember})
    // }


    return <div className='full-page'>
    {/* <form className='form' onSubmit={handleSubmit}>
      <Logo />
      <h3>{values.isMember?'Login':'Register'}</h3>

      
      {
        !values.isMember&& <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} />
      }
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

      <button type='submit' className='btn btn-block' disabled={isLoading}>
        {isLoading?'Loading...':'Submit'}
      </button>
      <button 
        type='button'
        className='btn btn-block btn-hipster'
        disabled={isLoading}
        onClick={()=> dispatch(LoginUser({ email: 'testUser@test.com', password: 'secret' }))}
      >
        {isLoading?'Loading...':'Demo App'}
      </button>
      <p>
        {values.isMember?'Not a member yet?':'Already a member?'}
        <button className='member-btn' onClick={ToggleMember}>
          {values.isMember?'Register':'Login'}
        </button>
      </p>
    </form> */}
    Login
  </div>
}





export default Login