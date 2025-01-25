import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name, email, message
        }

        axios.post('https://portal-backend-n73h.onrender.com/contact', user)
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert(err.data.message)
        })
    }

    return (
        <div id='contact' className='contact-wrapper'>

            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className='contact-container'>

                <motion.div className='contact-left'

                    initial={
                        {
                            opacity: 0, x: -200
                        }
                    }
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    viewport={{
                        amount: "1",
                        margin: "0px",
                        once: true

                    }}
                    animate="visible"
                    transition={{ duration: 1 }}

                >
                    <h4>Let's talk</h4>
                    <p>We are currently available to pick up your next project, so feel free to send us message. You can contact us anytime</p>



                    <div className='contact-icons'>
                        <div className='contact-icon'>
                            <IoMdMail />
                            <p>Oyelamioluwaseunp@gmail.com</p>
                        </div>

                        <div className='contact-icon'>
                            <FaPhoneSquareAlt />
                            <p>08035879166</p>
                        </div>

                        <div className='contact-icon'>
                            <ImLocation2 />
                            <p>1 Unity Road, Adeba, Ibeju-Lekki, Lagos, Nigeria</p>
                        </div>
                        <div className='contact-link-home'>
                            <Link to='/'>Home</Link>
                        </div>
                    </div>

                </motion.div>


                <motion.div className='contact-right'

                    initial={
                        {
                            opacity: 0, y: 200
                        }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        amount: "1",
                        margin: "0px",
                        once: true

                    }}
                    animate="visible"
                    transition={{ duration: 1 }}

                >
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} placeholder='Enter your name' />
                        </div>

                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name='email' onChange={e => setEmail(e.target.value)} value={email} placeholder='Enter your email' />
                        </div>

                        <div>
                            <label htmlFor="message">Your Message</label>
                            <textarea value={message} name="message" onChange={e => setMessage(e.target.value)} id="" placeholder='Enter your message' rows={10} > </textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </motion.div>

            </div>


        </div>
    )
}

export default Contact
