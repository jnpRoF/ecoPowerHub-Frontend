import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="p-2 rounded-r-2xl text-black focus:outline-none"
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="p-2 rounded-r-2xl text-black focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-full text-center lg:w-3/5"
            >
                Login
            </button>
        </form>
    )
}

export default Login

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwOTkzNDk3LCJpYXQiOjE3MDA5OTMxOTcsImp0aSI6IjZlMzJmYmMwZThlYTQ0OWNiZjk1OTA4NzMxOGE2YmJlIiwidXNlcl9pZCI6IjI0MzI0NmI5LTljZDUtNDIyMy04ZmU5LTMzNGQzODU4MTYwNSJ9.h6JqV-m_6_zD0prwenQwZQGynQAijhXKy9fk_QL5ah0

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwOTkzNDk3LCJpYXQiOjE3MDA5OTMxOTcsImp0aSI6IjZlMzJmYmMwZThlYTQ0OWNiZjk1OTA4NzMxOGE2YmJlIiwidXNlcl9pZCI6IjI0MzI0NmI5LTljZDUtNDIyMy04ZmU5LTMzNGQzODU4MTYwNSJ9.h6JqV-m_6_zD0prwenQwZQGynQAijhXKy9fk_QL5ah0

// papy texted me this morning, i just want to stop teaching,is this a sign that i should collect the job and that this hackathon will not work out, abeg oo and i wanted to be happy that money has come or I'm just thinking


// const [energyProjects, setenergyProjects] = useState([]);

// useEffect(() => {
//   const fetchEnergyProjects = async () => {
//     let response = await axios.get(
//       "https://ecopowerhub-backend-production.up.railway.app/marketplace"
//     );
//     setenergyProjects(response.data);
//   };
//   fetchEnergyProjects();
//   console.log(energyProjects);
// }, []);
