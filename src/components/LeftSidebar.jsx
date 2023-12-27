import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
import NavLinks from './NavLinks'

const LeftSidebar = () =>{
    const  {isSidebarOpen} = useSelector((store)=>store.user)
    const dispatch = useDispatch()

    const toggle = ()=>{
        dispatch(toggleSidebar())
    }

    return (
        <>
          <div className={`sidebar-container ${isSidebarOpen && 'show-sidebar'}`}>
            <div className='content'>
              <button className='close-btn' onClick={toggle}>
                <FaTimes />
              </button>
              <header>
                <Logo />
              </header>
              <div className='nav-links'>
                <NavLinks toggleSidebar={toggle} />
              </div>
            </div>
          </div>
        </>
    )
}

export default LeftSidebar