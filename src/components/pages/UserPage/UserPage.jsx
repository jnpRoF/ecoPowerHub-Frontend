import axios from 'axios'
import {useEffect, useState} from "react"
import img from '../../../constants/images'
import Button from '../../Button/Button'
import { HiPlus } from 'react-icons/hi2'
import { PiCopyLight } from 'react-icons/pi'
import { CiGlobe } from 'react-icons/ci'
import { CiTwitter } from 'react-icons/ci'
import { TbBrandDiscord } from 'react-icons/tb'
import { CiYoutube } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import Tab from '../../Tab/Tab'
import EachEnergy from '../../EachEnergy/EachEnergy'

const UserPage = ({ accessToken }) => {
  const [userDetails,setUserDetails] = useState({})
  useEffect(() => {
    const handleSubmit = async () => {
    // e.preventDefault()

    // console.log(formData)

    try {
        const response = axios.get(
            'https://ecopowerhub-backend-production.up.railway.app/users/me/',

            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )

      console.log('User details retrieved successfully:', response.data)

      setUserDetails(response.data)
        // navigate('/user')
    } catch (error) {
        console.error('Error getting form:', error)
    }
    }

    handleSubmit()
    console.log(userDetails)
    
  },[])
    return (
        <>
            <div className="relative">
                <img src={img.banner} alt="" className="w-full h-60" />
                <img
                    src={img.girl}
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
                            <span className="font-semibold">Follow</span>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between w-full sm:w-3/5 md:w-2/5">
                    <div className="flex flex-col">
                        <p className="font-bold text-lg md:text-2xl font1">
                            250k
                        </p>
                        <p className="text-sm md:text-base">Volume</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-lg md:text-2xl font1">
                            50k+
                        </p>
                        <p className="text-sm md:text-base">NFTs Sold</p>
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
                    <p>The world's friendliest designer kid.</p>
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
                <Tab tabTitle="NFTs" num="302" />
                <Tab tabTitle="Collections" num="67" />
            </div>
            <div className="bg-backgroundSecondary border-b-2 border-darkGrey-200">
                <div className="flex flex-col py-12 justify-between flex-wrap w-4/5 mx-auto sm:flex-row">
                    <EachEnergy
                        img={img.mushroom}
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
                </div>
            </div>
        </>
    )
}

export default UserPage
