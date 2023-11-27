import { IoEyeOutline } from 'react-icons/io5'
import img from '../../constants/images'
import Button from '../Button/Button'
import EachEnergy from '../EachEnergy/EachEnergy'

const Section4 = () => {
    return (
        <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto md:w-5/6">
            <div className="flex flex-col text-start justify-between space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                <div className="flex flex-col w-full space-y-3 sm:w-3/4">
                    <h2 className="text-xl font-semibold md:text-2xl">
                        Discover More Energies.
                    </h2>
                    <p className="text-sm md:text-base">
                        Explore New Trending Energies
                    </p>
                </div>
                <Button
                    className="hidden h-14 p-2 px-4 md:pt-4 w-full border border-ctaColor items-center space-x-4 text-lg rounded-2xl text-center sm:p-4 sm:w-48 sm:flex"
                    href="#"
                >
                    <span className="text-ctaColor">
                        <IoEyeOutline />
                    </span>
                    <span>See All</span>
                </Button>
            </div>
            <div className="flex flex-col justify-between flex-wrap sm:flex-row">
                <EachEnergy
                    img={img.energy11}
                    img2={img.a1}
                    avatarName="MoonDancer"
                    energyName="DistantGalaxy"
                    price="1.63Toro"
                    className="flex flex-col w-full h-full my-3 sm:w-[47%] md:w-[28%] cursor-pointer"
                    href="energy"
                />
                <EachEnergy
                    img={img.energy12}
                    img2={img.a1}
                    avatarName="NebulaKid"
                    energyName="Life On Edena"
                    price="1.63Toro"
                    className="flex flex-col w-full h-full my-3 sm:w-[47%] md:w-[28%] cursor-pointer"
                    href="energy"
                />
                <EachEnergy
                    img={img.energy14}
                    img2={img.a1}
                    avatarName="SpaceOne"
                    energyName="AstroFiction"
                    price="1.63Toro"
                    className="flex flex-col w-full h-full my-3 sm:w-[47%] md:w-[28%] sm:hidden md:flex cursor-pointer"
                    href="energy"
                />
                <Button
                    className="h-14 p-1 px-4 pt-4 w-full border border-ctaColor rounded-2xl flex items-center space-x-4 text-center sm:p-4 sm:w-48 sm:hidden"
                    href="#"
                >
                    <IoEyeOutline />
                    <span>See All</span>
                </Button>
            </div>
        </section>
    )
}

export default Section4
