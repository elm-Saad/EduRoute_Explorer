import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import { useSelector } from 'react-redux'

const NavLinks = ({ toggleSidebar }) => {
  const {isSidebarOpen} = useSelector((store)=>store.user)

  return (
    <ul className='py-5'>
      {links.map((link) => {
        const { text, path, id, icon } = link

        return <li className='my-2 rounded-md w-full flex items-center justify-center md:justify-start'>
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? 'btn w-full btn-neutral' : 'btn w-full'
              }
            >
              <div className='w-full py-0 px-0 gap-0 md:gap-2 flex items-center justify-center md:justify-start'>
                <span className='text-xl'>{icon}</span>
                <span className={`${isSidebarOpen?'block md:block':'hidden md:hidden'} md:block hidden`}>{text}</span>
              </div>
            </NavLink>
          </li>
        
      })}
    </ul>
  )
}

export default NavLinks