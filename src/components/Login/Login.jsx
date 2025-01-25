import {  useState } from 'react'
import './Login.css'
import { MdOutlineMail } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [action, setAction] = useState('')
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [term, setTerm] = useState("")
    const navigate = useNavigate();

    const registerLink = () => {
        setAction('active')
    }

    const loginLink = () => {
        setAction('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        
        const user = {
            username,
            email,
            password,
            term: term === "true" || term === true,
        }  
        axios.post("https://portal-backend-n73h.onrender.com/signup", user)
        .then(res => {
            alert('User registered successfully')
            navigate(0);
        })
        .catch(err => {
            alert(err.response.data.message)
            
        })
    }

    
    const handleLogin = (e) => {
        e.preventDefault()

        const user = {
            email, 
            password
        }

        axios.post("https://portal-backend-n73h.onrender.com/signin", user)
       .then(res => {

        const userData = res.data;
        localStorage.setItem("user", JSON.stringify(userData)); 
        navigate("/dashboard");

       })
       .catch(err => {
            alert(err.response.data.message)
            console.error(err)
            
        })
    }
    return (
        <>

            <div className='form-background'>
            <div className= {`form-wrapper ${action ? 'active' : ''}`}>
                <div className= "form-container login" >
                    <form onSubmit={ handleLogin} >
                        <h1>Login</h1>
                        <div className='form-field'>
                            <input type="text" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                            <FaUserLarge className='icon' />
                        </div>

                        <div className='form-field'>
                            <input type="password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' />
                            <MdOutlineLock className='icon' />
                        </div>

                        <div className='remember-me'>
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <Link className='links' to={'/forgetpassword'} >Forgot Password?</Link>
                        </div>
                        <div className='submit'>
                            <button type="submit">Login</button>
                        </div>

                        <div className='link'>
                            <p>Dont have an Account?</p>
                            <a className='links' onClick={registerLink} href="#">Register</a>
                        </div>
                    </form>
                </div>




            <div className='form-container register'>
                <form  onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className='form-field'>
                        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username} />
                        <FaUserLarge className='icon' />
                    </div>

                    <div className='form-field'>
                        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <MdOutlineMail className='icon' />
                    </div>

                    <div className='form-field'>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                        <MdOutlineLock className='icon' />
                    </div>

                    <div className='remember-me'>
                        <label>
                            <input type="checkbox" onChange={(e) => setTerm(e.target.checked)} value={term} /> I agree with terms & conditions
                        </label>

                    </div>
                    <div className='submit'>
                        <button type="submit">Register</button>
                    </div>

                    <div className='link'>
                        <p>Already have an Account</p>
                        <a className='links' onClick={loginLink} href="#">Login</a>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </>
    )
}

export default Login
