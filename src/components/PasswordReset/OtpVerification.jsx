import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './PasswordReset.css'


const OtpVerification = () => {
    const [otp1, setOtp1] = useState('')
    const [otp2, setOtp2] = useState('')
    const [otp3, setOtp3] = useState('')
    const [otp4, setOtp4] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const otp = otp1 + otp2 + otp3 + otp4
        const user = {
            otp,
            email
        }

        axios.post('https://portal-backend-n73h.onrender.com/otpVerification', user)
        .then(res => {
            alert(res.data.message)
            const userId = res.data.userId;

            console.log(res)
            navigate(`/passwordReset/${userId}`)
            setOtp1('')
            setOtp2('')
            setOtp3('')
            setOtp4('')
            setEmail('')
        })
        .catch(err => {
            alert(err.data.message)
            // console.log(err.data.message)

            
        })
    }
  return (
    <div className="forgotPassword otp-container">
        <h1>
            OTP Verification
        </h1>
      <form onSubmit={handleSubmit} >
       <div className="otp">
       <input  type="text" name="otp1" maxLength="1" value={otp1} onChange={e => setOtp1(e.target.value)} />
        <input type="text" name="otp2" maxLength="1" value={otp2} onChange={e => setOtp2(e.target.value)} />
        <input type="text" name="otp3" maxLength="1" value={otp3} onChange={e => setOtp3(e.target.value)} />
        <input type="text" name="otp4" maxLength="1" value={otp4} onChange={e => setOtp4(e.target.value)} />
       </div>
        <input type="email" name="email" className="otp-email" value={email} placeholder="Enter your Email" onChange={e => setEmail(e.target.value)} />
        <button className="btn">Verify</button>
      </form>
    </div>
  )
}

export default OtpVerification
