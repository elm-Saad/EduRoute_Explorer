import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const NavLinks = ({ toggleSidebar }) => {
  return (
    <ul className='py-5'>
      {links.map((link) => {
        const { text, path, id, icon } = link

        return <li className='bg-blue-300 my-2 rounded-md btn w-full'>
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <div className='py-2 px-4 gap-2 flex items-center justify-start'>
                <span className='icon'>{icon}</span>
                <span className='hidden md:block'>{text}</span>
              </div>
            </NavLink>
          </li>
        
      })}
    </ul>
  )
}

export default NavLinks