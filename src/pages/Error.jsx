import { Link } from 'react-router-dom'
import img from '../assests/images/not-found.svg'

const Error = () =>{
    return (
        <div className='full-page'>
          <div>
            <img src={img} alt='not found' />
            <h3>text</h3>
            <p>text</p>
            <Link to='/'>back home</Link>
          </div>
        </div>
    )
}
export default Error