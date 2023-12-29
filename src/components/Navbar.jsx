import { FaAlignJustify} from 'react-icons/fa6'
import { FaUserCircle, FaCaretDown} from 'react-icons/fa'
import { FaCaretLeft,FaCaretRight } from "react-icons/fa6";
import logo from '../assests/images/logo.png'

import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, clearStore } from '../features/user/userSlice'

const Navbar = ()=>{
    const {user} = useSelector((store)=>store.user)
    const dispatch = useDispatch()

    const toggle = ()=>{
        dispatch(toggleSidebar())
    }
    
    return <div className="h-20 flex bg-white items-center justify-between shadow pr-2">
    {/**Toggle icon */}

    <div className='invisible md:visible'>
      <label 
        className="btn swap swap-rotate"
      >
        <input 
          type="checkbox" 
          onChange={toggle}
        />
        
        {/* hamburger icon */}
        <FaCaretLeft className='text-xl swap-off fill-current' />      
        {/* close icon */}
        <FaCaretRight className='text-xl swap-on fill-current' />  
      </label>
    </div>
    {/** center Logo/text */}
    <div className='flex items-center justify-start gap-2'>
        <img src={logo} alt='logo' className='w-8' />
        <span 
                className="hidden md:block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-500"
            >
                EduRoute
        </span>
    </div>
    {/** user Account */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn">
        <FaUserCircle className='text-2xl text-primary' />
        {user?.name}
        <FaCaretDown />
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button
            type='button'
            className='dropdown-btn capitalize'
            onClick={() => {
              dispatch(clearStore('Logging out...'))
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