import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Register from '../Register/Register'
import img from '../../constants/images'

const Login = ({ getToken }) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(formData)

        try {
            const response = await axios.post(
                'https://ecopowerhub-backend-production.up.railway.app/users/login/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            console.log('Login submitted successfully:', response.data)
            getToken(response.data.access)
            navigate('/user')
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('Signup failed. Please try again.')
        }
    }

    return (
        <Register
            src={img.energy9}
            pageHead="Login to your Account"
            pageText1="Login to access your dashboard"
        >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div className="flex gap-10 text-lg font1 font-semibold items-center">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="p-2 rounded-2xl text-black w-3/5 focus:outline-none"
                    />
                </div>
                <div className="flex gap-3 text-lg font1 font-semibold items-center">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        className="p-2 rounded-2xl text-black w-3/5 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="px-8 p-4 pt-4 w-full font-semibold text-lg bg-ctaColor rounded-full text-center lg:w-3/5"
                >
                    Login
                </button>
            </form>
        </Register>
    )
}

export default Login


