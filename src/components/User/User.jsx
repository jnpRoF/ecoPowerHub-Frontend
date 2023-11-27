import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import { GoPerson } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'
import { CiLock } from 'react-icons/ci'

const User = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        user_type: 'User',
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
                'https://ecopowerhub-backend-production.up.railway.app/users/signup/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            console.log('Form submitted successfully:', response.data)
            navigate('/login')
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('Signup failed. Please try again.')
        }
    }

    return (
        <>
            <form
                className="flex flex-col space-y-4 mt-4"
                onSubmit={handleSubmit}
            >
                <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-3/5">
                    <div className="flex items-center text-lg pl-4">
                        <span className="text-darkGrey">
                            <GoPerson />
                        </span>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            className="p-2 rounded-r-2xl text-black focus:outline-none"
                        />
                    </div>
                </Button>
                <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-3/5">
                    <div className="flex items-center text-lg pl-4">
                        <span className="text-darkGrey">
                            <GoPerson />
                        </span>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            placeholder="Last Name"
                            className="p-2 rounded-r-2xl text-black focus:outline-none"
                        />
                    </div>
                </Button>
                <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-3/5">
                    <div className="flex items-center text-lg pl-4">
                        <span className="text-darkGrey">
                            <CiMail />
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            className="p-2 rounded-r-2xl text-black focus:outline-none"
                        />
                    </div>
                </Button>
                <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-3/5">
                    <div className="flex items-center text-lg pl-4">
                        <span className="text-darkGrey">
                            <CiLock />
                        </span>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className="p-2 rounded-r-2xl text-black focus:outline-none"
                        />
                    </div>
                </Button>
                <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-3/5">
                    <div className="flex items-center text-lg pl-4">
                        <span className="text-darkGrey">
                            <CiLock />
                        </span>
                        <input
                            inputMode="numeric"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="p-2 rounded-r-2xl text-black focus:outline-none"
                        />
                    </div>
                </Button>

                <button
                    type="submit"
                    className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-full text-center text-lg lg:w-3/5"
                >
                    Create Account
                </button>
            </form>
        </>
    )
}

export default User
