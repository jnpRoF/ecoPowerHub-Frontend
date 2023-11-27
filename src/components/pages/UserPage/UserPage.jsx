import axios from 'axios'
import { useEffect, useState } from 'react'
import img from '../../../constants/images'
import { HiPlus } from 'react-icons/hi2'
import { PiCopyLight } from 'react-icons/pi'
import { CiGlobe } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'
import { CiLock } from 'react-icons/ci'
import { CiTwitter } from 'react-icons/ci'
import { TbBrandDiscord } from 'react-icons/tb'
import { CiYoutube } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { GoPerson } from 'react-icons/go'
import Tab from '../../Tab/Tab'
import Button from '../../Button/Button'
import EachEnergy from '../../EachEnergy/EachEnergy'
import Register from '../../Register/Register'

const UserPage = ({ accessToken }) => {
    const [userDetails, setUserDetails] = useState({})
    const [userProjects, setUserProjects] = useState([])
    const [page, setPage] = useState('projects')
    

    const onTabClick = (whatToShow) => {
        setPage(whatToShow)
    }
    const [formData, setFormData] = useState({
        project_name: '',
        project_description: '',
        energy_capacity: '',
        energy_source: '',
        location: '',
        price: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(accessToken);
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    console.log(accessToken)
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get(
                    'https://ecopowerhub-backend-production.up.railway.app/users/me/',

                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )

                console.log(
                    'User details retrieved successfully:',
                    response.data
                )
                setUserDetails(response.data)
            } catch (error) {
                console.error('Error getting form:', error)
            }
        }

        handleSubmit()
    }, [])

    const handleCreateProject = async (e) => {
        e.preventDefault()
        try {
            console.log(formData,accessToken);
            const response = await axios.post(
                'https://ecopowerhub-backend-production.up.railway.app/marketplace/projects/create/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )

            console.log('Project created successfully:', response.data)
            setUserProjects(response.data)
        } catch (error) {
            console.error('Error getting form:', error)
        }
    }

    console.log(userDetails)
    console.log(userProjects)
    return (
        <>
            <div className="relative">
                <img src={img.banner} alt="" className="w-full h-60" />
                <img
                    src={img.a15}
                    alt=""
                    className="absolute -bottom-14 left-[35%] w-32 h-32 sm:left-20"
                />
            </div>
            <section className="flex flex-col space-y-8 mt-20 mb-6 w-4/5 mx-auto">
                <div className="flex flex-col text-start justify-between lg:items-center space-y-6 lg:flex-row lg:space-y-0">
                    <div className="flex flex-col w-full space-y-3 sm:w-3/4">
                        <h2 className="text-2xl font-semibold sm:text-3xl">
                            EnRyze Energy Exchange
                        </h2>
                    </div>
                    <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-3">
                        <Button
                            className="py-3 px-5 bg-ctaColor rounded-2xl flex items-center space-x-2 justify-center"
                            href="#"
                        >
                            <span className="text-white">
                                <PiCopyLight />
                            </span>
                            <span className="font-semibold">0xc0E3...B79C</span>
                        </Button>
                        <Button
                            className="py-3 px-5 border border-ctaColor rounded-2xl flex items-center space-x-2 justify-center"
                            href="#"
                        >
                            <span className="text-ctaColor">
                                <HiPlus />
                            </span>
                            <span className="font-semibold">
                                Create a Project
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between w-full sm:w-3/5 md:w-2/5">
                    <div className="flex flex-col">
                        <p className="font-bold text-lg md:text-2xl font1">
                            250k
                        </p>
                        <p className="text-sm md:text-base">Projects</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-lg md:text-2xl font1">
                            50k+
                        </p>
                        <p className="text-sm md:text-base">Happy clients</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-lg md:text-2xl font1">
                            3000+
                        </p>
                        <p className="text-sm md:text-base">Followers</p>
                    </div>
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <p className="text-darkGrey">Bio</p>
                    <p>Energy-oriented. Power to live. Live to Power</p>
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <p className="text-darkGrey">Links</p>
                    <div className="flex justify-between w-4/5 text-2xl sm:w-3/5 md:w-2/5 lg:w-[25%]">
                        <Button className="text-darkGrey text-3xl" href="#">
                            <CiGlobe />
                        </Button>

                        <Button className="text-darkGrey text-3xl" href="#">
                            <TbBrandDiscord />
                        </Button>

                        <Button className="text-darkGrey text-3xl" href="#">
                            <CiYoutube />
                        </Button>

                        <Button className="text-darkGrey text-3xl" href="#">
                            <CiTwitter />
                        </Button>

                        <Button className="text-darkGrey text-3xl" href="#">
                            <CiInstagram />
                        </Button>
                    </div>
                </div>
            </section>
            <div className="flex border-t-2 border-darkGrey-200">
                <Tab
                    tabTitle="Projects"
                    num="302"
                    border={page === 'projects' ? 'border-b-2' : ''}
                    onClick={() => {
                        onTabClick('projects')
                    }}
                />
                <Tab
                    tabTitle="Create a Project"
                    num={<HiPlus />}
                    border={page === 'projects' ? '' : 'border-b-2'}
                    onClick={() => {
                        onTabClick('details')
                    }}
                />
            </div>

            <div className="bg-backgroundSecondary border-b-2 border-darkGrey-200">
                <div className="flex flex-col justify-between flex-wrap p-12 sm:flex-row">
                    {page === 'projects' ? (
                        <>
                            
                            <EachEnergy
                                img={img.energy1}
                                img2={img.a1}
                                avatarName="MoonDancer"
                                energyName="DistantGalaxy"
                                price="1.63ETH"
                                highestBid="0.33Toro"
                                className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%]"
                            />
                            <EachEnergy
                                img={img.a2}
                                img2={img.a1}
                                avatarName="NebulaKid"
                                energyName="Life On Edena"
                                price="1.63ETH"
                                highestBid="0.33Toro"
                                className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%]"
                            />
                            <EachEnergy
                                img={img.a3}
                                img2={img.a2}
                                avatarName="SpaceOne"
                                energyName="AstroFiction"
                                price="1.63ETH"
                                highestBid="0.33Toro"
                                className="flex-col w-full my-3 h-72 sm:w-[45%] md:w-[30%] sm:flex"
                            />
                            <EachEnergy
                                img={img.a4}
                                img2={img.a1}
                                avatarName="SpaceOne"
                                energyName="AstroFiction"
                                price="1.63ETH"
                                highestBid="0.33Toro"
                                className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] sm:flex"
                            />
                            <EachEnergy
                                img={img.a5}
                                img2={img.a1}
                                avatarName="EnRyze Energy Exchange"
                                energyName="AstroFiction"
                                price="1.63Toro"
                                highestBid="0.33Toro"
                                className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] sm:flex"
                            />
                            <EachEnergy
                                img={img.a2}
                                img2={img.a1}
                                avatarName="RenewEcon Exchange"
                                energyName="AstroFiction"
                                price="1.63Toro"
                                highestBid="0.33Toro"
                                className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] sm:flex"
                            />
                            <EachEnergy
                                img={img.a3}
                                img2={img.a1}
                                avatarName="RenewSource Marketplace"
                                energyName="AstroFiction"
                                price="1.63Toro"
                                highestBid="0.33Toro"
                                className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
                            />
                            <EachEnergy
                                img={img.a4}
                                img2={img.a1}
                                avatarName="EnergyHarbor Hub"
                                energyName="AstroFiction"
                                price="1.63Toro"
                                highestBid="0.33Toro"
                                className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
                            />
                            <EachEnergy
                                img={img.a5}
                                img2={img.a1}
                                avatarName="EcoSpark Trading"
                                energyName="AstroFiction"
                                price="1.63T"
                                highestBid="0.33Toro"
                                className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
                            />
                        </>
                    ) : (
                        <>
                            <Register
                                src={img.energy6}
                                pageHead="Create a Project"
                                pageText1="Upload your project details"
                            >
                                <form
                                    className="flex flex-col space-y-4 mt-4"
                                    onSubmit={handleCreateProject}
                                >
                                    <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-4/5">
                                        <div className="flex items-center text-lg pl-4">
                                            <span className="text-darkGrey">
                                                <GoPerson />
                                            </span>
                                            <input
                                                type="text"
                                                name="project_name"
                                                value={formData.project_name}
                                                onChange={handleInputChange}
                                                placeholder="Project Name"
                                                className="p-2 rounded-r-2xl text-black focus:outline-none"
                                            />
                                        </div>
                                    </Button>
                                    <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-4/5">
                                        <div className="flex items-center text-lg pl-4">
                                            <span className="text-darkGrey">
                                                <GoPerson />
                                            </span>
                                            <input
                                                type="text"
                                                name="project_description"
                                                value={
                                                    formData.project_description
                                                }
                                                onChange={handleInputChange}
                                                placeholder="Project Description"
                                                className="p-2 rounded-r-2xl text-black focus:outline-none"
                                            />
                                        </div>
                                    </Button>
                                    <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-4/5">
                                        <div className="flex items-center text-lg pl-4">
                                            <span className="text-darkGrey">
                                                <CiMail />
                                            </span>
                                            <input
                                                type="text"
                                                name="energy_capacity"
                                                value={formData.energy_capacity}
                                                onChange={handleInputChange}
                                                placeholder="Energy Capacity"
                                                className="p-2 rounded-r-2xl text-black focus:outline-none"
                                            />
                                        </div>
                                    </Button>
                                    <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-4/5">
                                        <div className="flex items-center text-lg pl-4">
                                            <span className="text-darkGrey">
                                                <CiLock />
                                            </span>
                                            <input
                                                type="text"
                                                name="energy_source"
                                                value={formData.energy_source}
                                                onChange={handleInputChange}
                                                placeholder="Energy Source"
                                                className="p-2 rounded-r-2xl text-black focus:outline-none"
                                            />
                                        </div>
                                    </Button>
                                    <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-4/5">
                                        <div className="flex items-center text-lg pl-4">
                                            <span className="text-darkGrey">
                                                <CiLock />
                                            </span>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                placeholder="Location"
                                                className="p-2 rounded-r-2xl text-black focus:outline-none"
                                            />
                                        </div>
                                    </Button>
                                    <Button className="w-full font-semibold bg-white rounded-2xl text-center lg:w-4/5">
                                        <div className="flex items-center text-lg pl-4">
                                            <span className="text-darkGrey">
                                                <CiLock />
                                            </span>
                                            <input
                                                inputMode="numeric"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleInputChange}
                                                placeholder="Price"
                                                className="p-2 rounded-r-2xl text-black focus:outline-none"
                                            />
                                        </div>
                                    </Button>

                                    <button
                                        type="submit"
                                        className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-full text-center lg:w-4/5"
                                    >
                                        Create Project
                                    </button>
                                </form>
                            </Register>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default UserPage
