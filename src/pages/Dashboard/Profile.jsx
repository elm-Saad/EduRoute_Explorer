import { useState } from 'react'
import { FormRow, SubmitBtn } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { UpdateUser } from '../../features/user/userSlice'

const Profile  = () =>{
    const {isLoading,user} = useSelector((store)=>store.user)
    const dispatch = useDispatch()


    const [userData,setUserData] = useState({
        name:user?.name ||'',
        email:user?.email ||'',
        lastName:user?.lastName ||'',
        location:user?.location ||'',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, lastName, location } = userData
        if (!name || !email || !lastName || !location) {
          toast.error('Please Fill Out All Fields')
          return
        }
        // Handle Update
        dispatch(UpdateUser(userData))
    }

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setUserData({...userData,[name]:value})
    }


    return <section className='min-h-[500px]'>
      
        <div className="form-control items-center md:flex-row h-full md:h-[28rem]">    
            <div className="h-1/2 md:h-full w-full md:w-1/2 text-center p-20 rounded-lg shadow-md bg-white bg-custom flex items-center justify-center">
                <div>
                    <div className="avatar placeholder online">
                        <div className="mask mask-hexagon bg-neutral text-neutral-content rounded-full w-24">
                            <span className="select-none text-3xl uppercase">{(user?.name).slice(0, 2)}</span>
                        </div>
                    </div> 
                    <p className="text-white font-semibold text-xl mt-10">{user?.name}</p>
                </div>
                
            </div>
            
            <form className='h-1/2 md:h-full w-full md:w-1/2 flex flex-col justify-center' onSubmit={handleSubmit}>
                <div className='md:px-10 py-2 '>
                    <FormRow
                        type='text'
                        name='name'
                        value={userData.name}
                        handleChange={handleChange}
                    />
                </div>
                <div className="md:px-10 py-2">
                    <FormRow
                        type='text'
                        labelText='last name'
                        name='lastName'
                        value={userData.lastName}
                        handleChange={handleChange}
                    />
                </div>
                <div className="md:px-10 py-2">
                    <FormRow
                        type='email'
                        name='email'
                        value={userData.email}
                        handleChange={handleChange}
                    />
                </div>
                <div className="md:px-10 py-2">
                    <FormRow
                        type='text'
                        labelText='role'
                        placeholder='current role'
                        name='location'
                        value={userData.location}
                        handleChange={handleChange}
                    />
                </div>
                
               <div className='md:px-10 py-2'>
                    <SubmitBtn 
                        text='save changes'
                        isLoading={isLoading}
                    />
               </div>
                
                
            </form>
        </div>
  </section>
}
export default Profile 