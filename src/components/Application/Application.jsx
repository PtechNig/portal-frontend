import { useState } from 'react'
import './Application.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Application = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [file, setFile] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('telephone', telephone);
        formData.append('file', file);

        axios.post('https://portal-backend-n73h.onrender.com/application', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(res => {
            alert('Application submitted successfully')
            navigate('/')
        })
        .catch(err => {
            alert(err.response.data.message)
        })


    }
    return (
        <div className="application-wrapper">
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <div>
                    <h1>Application Form</h1>

                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="telephone">Your Telephone Number</label>
                    <input type="tel" name='telephone' placeholder='Enter your Telephone Number' onChange={(e) => setTelephone(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="cv">Upload Your CV</label>
                    <input type="file" name='file' onChange={(e) => setFile(e.target.files[0])} />
                </div>

                <button className='btn' type="submit">Submit</button>
            </form>


        </div>
    )
}

export default Application
