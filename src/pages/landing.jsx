import main from '../assests/images/main.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
    return <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse -mt-10 ">
      <img src={main} className="max-w-[320px] md:max-w-xl rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold text-center sm:text-start">EduRoute Explorer</h1>
        <p className="py-6 max-w-md">
          user-friendly Learning Path Tracker designed to help you organize, manage, and optimize
          your learning journey. Whether you're learning a new programming language, exploring online courses,
          or enhancing your skills, EduRoute Explorer is here to assist you.
        </p>
        <Link to='/register' className='btn btn-primary'>
          Login / Register
        </Link>
      </div>
    </div>
  </div>
    
}
  
export default Landing