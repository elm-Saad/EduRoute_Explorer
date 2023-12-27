import main from '../assests/images/main.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
    return <>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>some text</p>
            <Link to='/register' className='btn btn-hero'>
                Login / Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </>
    
}
  
export default Landing