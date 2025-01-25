import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './PasswordReset.css'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(' https://portal-backend-n73h.onrender.com/forgetPassword', {email : email})
        .then(res => {
            alert('Password reset link sent to your email')
            setEmail('')
            navigate('/otpverification')
        })
        .catch(err => {
            console.log(err)
            alert(err.response.data.message)
        })
    }
  return (
    <div className="forgotPassword">
        <h1>Forgot Password</h1>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your Email 
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
            <button className="btn" >Submit</button>
        </label>
      </form>
    </div>
  )
}

export default ForgetPassword
