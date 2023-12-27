import { FaAlignJustify} from 'react-icons/fa6'
import { FaUserCircle, FaCaretDown} from 'react-icons/fa'
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
      <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
      
      {/* close icon */}
      <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
    </label>
    {/** center Logo/text */}
    <div>
      <Logo />
      {/* <h3 className="logo-text">Dashboard</h3> */}
    </div>
    {/** user Account */}
    <div className='btn-container'>
      <button
        type='button'
        className='btn'
        // onClick={() => setShowLogout(!ShowLogout)}

      >
        <FaUserCircle />
        {/* {user?.name} */}
        <FaCaretDown />
      </button>
      <div className={`dropdown ${'ShowLogout' && 'show-dropdown'}`}>
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
      </div>
    </div>
  </div>
}

export default Navbar