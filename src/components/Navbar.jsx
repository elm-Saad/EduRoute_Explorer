import { FaAlignJustify} from 'react-icons/fa6'
import { FaUserCircle, FaCaretDown} from 'react-icons/fa'
import { FaCaretLeft,FaCaretRight } from "react-icons/fa6";

import Logo from './Logo'
// import { useState } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
// import { toggleSidebar, clearStore } from '../features/user/userSlice'

const Navbar = ()=>{
    // const {user} = useSelector((store)=>store.user)
    // const dispatch = useDispatch()

    // const toggle = ()=>{
    //     dispatch(toggleSidebar())
    // }
    
    // const [ShowLogout, setShowLogout] = useState(false)

    return <div className="h-20 flex bg-white items-center justify-between shadow">
    {/**Toggle icon */}
    <label 
      className="btn btn-circle swap swap-rotate"
      // onClick={toggle}
    >
      <input type="checkbox" />
      
      {/* hamburger icon */}
      <FaCaretLeft className='text-xl swap-off fill-current' />      
      {/* close icon */}
      <FaCaretRight className='text-xl swap-on fill-current' />  
    </label>
    {/** center Logo/text */}
    <div>
      <Logo />
    </div>
    {/** user Account */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <FaUserCircle />
        {/* {user?.name} */}
        <FaCaretDown />
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button
            type='button'
            className='dropdown-btn'
            onClick={() => {
              console.log('hi')
              //clear the store and logout user 
              // dispatch(clearStore('Logging out...'))
            }}
          >
            logout
          </button>
        </li>
       
      </ul>
    </div>
  </div>
}

export default Navbar