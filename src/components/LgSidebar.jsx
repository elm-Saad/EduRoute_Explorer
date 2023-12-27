import NavLinks from './NavLinks'
import Logo from './Logo'
import { useSelector } from 'react-redux'



const LgSidebar = ()=>{
    // const {isSidebarOpen} = useSelector((store)=>store.user)

    return  <div class="bg-white  min-h-screen w-full py-5 px-2 md:px-5">
        <header className='text-center mb-5'>
          <Logo />
        </header>
       <NavLinks />
    </div>
}

export default LgSidebar

/**
 *    <>
        <div
            className={
            isSidebarOpen
                ? 'sidebar-container '
                : 'sidebar-container show-sidebar'
            }
        >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </>
 */