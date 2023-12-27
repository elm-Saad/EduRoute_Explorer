
import { MdDashboard } from "react-icons/md"
import { ImStatsDots } from "react-icons/im"
import { PiBooks } from "react-icons/pi"
import { CgProfile } from "react-icons/cg"
import { LuBookmarkPlus } from "react-icons/lu"


const links = [
  {
    id: 1,
    text: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
  },
  {
    id: 2,
    text: 'status',
    path: 'status',
    icon: <ImStatsDots />,
  },
  {
    id: 3,
    text: 'courses',
    path: 'courses',
    icon: <PiBooks />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <CgProfile />,
  },
  {
    id: 5,
    text: 'add',
    path: 'add',
    icon: <LuBookmarkPlus />,
  },
]

export default links