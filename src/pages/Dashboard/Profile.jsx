import { useState } from 'react'
import { FormRow } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { UpdateUser } from '../../features/user/userSlice'

const Profile  = () =>{
    // const {isLoading,user} = useSelector((store)=>store.user)
    // const dispatch = useDispatch()


    // const [userData,setUserData] = useState({
    //     name:user?.name ||'',
    //     email:user?.email ||'',
    //     lastName:user?.lastName ||'',
    //     location:user?.location ||'',
    // })

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { name, email, lastName, location } = userData
    //     if (!name || !email || !lastName || !location) {
    //       toast.error('Please Fill Out All Fields')
    //       return
    //     }
    //     // Handle Update
    //     dispatch(UpdateUser(userData))
    // }

    // const handleChange = (e) =>{
    //     const name = e.target.name
    //     const value = e.target.value
    //     setUserData({...userData,[name]:value})
    // }


    return <>
        {/* <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
            <FormRow
                type='text'
                name='name'
                value={userData.name}
                handleChange={handleChange}
            />
            <FormRow
                type='text'
                labelText='last name'
                name='lastName'
                value={userData.lastName}
                handleChange={handleChange}
            />
            <FormRow
                type='email'
                name='email'
                value={userData.email}
                handleChange={handleChange}
            />
            <FormRow
                type='text'
                name='location'
                value={userData.location}
                handleChange={handleChange}
            />
            <button className='btn btn-block' type='submit' disabled={isLoading}>
                {isLoading ? 'Please Wait...' : 'save changes'}
            </button>
        </div>
        </form> */}
        Profile
  </>
}
export default Profile 