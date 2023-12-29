import logo from '../assests/images/logo.png'
import { useSelector } from 'react-redux'
const Logo = () => {
    const  {isSidebarOpen} = useSelector((store)=>store.user)

    return  <div className='flex items-center justify-center md:justify-start gap-2'>
        <img src={logo} alt='logo' className='w-8' />
        {
            isSidebarOpen && <span 
                className="hidden md:block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-500"
            >
                EduRoute
            </span>
        }
        
    </div>
}
export default Logo