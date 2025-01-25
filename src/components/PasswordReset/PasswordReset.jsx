import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './PasswordReset.css'


const PasswordReset = () => {
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const navigate = useNavigate()
        const { id } = useParams();

        const handleSubmit = (e) => {
            e.preventDefault()

            const user = {
                password,
                confirmPassword
            }

            axios.patch(`https://portal-backend-n73h.onrender.com/passwordReset/${id}`, user)
            .then(res => {
                alert('Password updated successfully')
                console.log(" password reset page payload", res)
                navigate('/login');
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        }

  return (
    <div className="forgotPassword password-reset">
        <h1>
            Password Reset
        </h1>
      <form onSubmit={handleSubmit} >
        <input type="password" name="password"  value={password} onChange={e => setPassword(e.target.value)} />
        <input type="password" name="confirmPassword"  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
       
        
        <button className="btn" >Update</button>
      </form>
    </div>
  )
}

export default PasswordReset
