import React from 'react'
import Button from '../Button/Button'
import { GoPerson } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'
import { CiLock } from 'react-icons/ci'
import { useState } from 'react'
import axios from 'axios'

const Business = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        business_name: '',
        business_worth: null,
        business_description: '',
        available_shares: null,
        total_shares: null,
        buyable_shares_percentage: null,
        user_type: 'Business',
    })

    const handleInputChange = (e) => {
        console.log(e.target)
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
                formData
            )

            console.log('Form submitted successfully:', response.data)
        } catch (error) {
            console.error('Error submitting form:', error)
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

                <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-3/5">
                    <div className="flex items-center text-lg pl-4">
                        <span className="text-darkGrey">
                            <CiLock />
                        </span>
                        <input
                            inputMode="numeric"
                            name="phone_number"
                            //   value={formData.phone_number}
                            //   onChange={handleInputChange}
                            placeholder="Total Business Value"
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
                            //   value={formData.phone_number}
                            //   onChange={handleInputChange}
                            placeholder="Total shares"
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
                            //   value={formData.phone_number}
                            //   onChange={handleInputChange}
                            placeholder="Share Price"
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
                            //   value={formData.phone_number}
                            //   onChange={handleInputChange}
                            placeholder="Buyable Share"
                            className="p-2 rounded-r-2xl text-black focus:outline-none"
                        />
                    </div>
                </Button>
                <Button
                    className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-full text-center lg:w-3/5"
                    href="#"
                >
                    <div className="flex items-center text-lg pl-4 justify-center">
                        <button type="submit">Create Account</button>
                    </div>
                </Button>
            </form>
        </>
    )
}

export default Business
