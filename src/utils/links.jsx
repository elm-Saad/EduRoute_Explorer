import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  {
    id: 1,
    text: 'Dashboard',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'status',
    path: 'status',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'courses',
    path: 'courses',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    id: 5,
    text: 'add',
    path: 'add',
    icon: <ImProfile />,
  },
]

export default links