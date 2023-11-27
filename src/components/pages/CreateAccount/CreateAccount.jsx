import axios from 'axios'
import { useState } from 'react'
import img from '../../../constants/images'
import Button from '../../Button/Button'
import Register from '../../Register/Register'
import { GoPerson } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'
import { CiLock } from 'react-icons/ci'
import Business from '../../Business/Business'
import User from '../../User/User'

const CreateAccount = () => {
    // const [formData, setFormData] = useState({
    //   email: "",
    //   password: "",
    //   first_name: "",
    //   last_name: "",
    //   phone_number: "",
    //   user_type: "",
    // });

    // const handleInputChange = (e) => {
    //   console.log(e.target);
    //   const { name, value } = e.target;
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   console.log(formData);
    //   try {
    //     const response = await axios.post(
    //       "https://ecopowerhub-backend-production.up.railway.app/users/signup/",
    //       formData
    //     );

    //     console.log("Form submitted successfully:", response.data);
    //   } catch (error) {
    //     console.error("Error submitting form:", error);
    //   }
    // };

    const [isCompany, setIsCompany] = useState('')
    return (
        <>
            <Register
                src={img.space6}
                pageHead="Create Account"
                pageText1="Welcome! Enter your details and start investing,creating and selling Energy projects."
            >
                <>
                    {isCompany === '' ? (
                        <>
                            <h2 className='font-semibold text-lg'>Sign Up as:</h2>
                            <button
                                className="px-8 p-4 pt-4 w-full font-semibold text-lg bg-ctaColor rounded-full text-center lg:w-3/5"
                                onClick={(_) => setIsCompany(true)}
                            >
                                Business
                            </button>
                            <button
                                className="px-8 p-4 pt-4 w-full font-semibold text-lg bg-ctaColor rounded-full text-center lg:w-3/5"
                                onClick={(_) => setIsCompany(false)}
                            >
                                User
                            </button>
                        </>
                    ) : isCompany === true ? (
                        <Business />
                    ) : (
                        <User />
                    )}
                </>
            </Register>
        </>
    )
}

export default CreateAccount
