import { Link } from 'react-router-dom';
import './Nav.css'
import { FaRegUser } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className='nav-wrapper'>
        <div className="nav-container">
            <h1>Job Portal</h1>

            <div className='nav-links' >
            <Link to='/login'>
            <FaRegUser className='nav-icon' aria-label="User Login" title="Login" />
            </Link>

            <Link to='/contact' className='nav-link' >Get in touch</Link>
            </div>

        </div>
    </div>
  )
}

export default Nav
