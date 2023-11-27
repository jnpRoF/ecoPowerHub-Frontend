import Button from '../Button/Button'
import Creator from '../Creator/Creator'
import img from '../../constants/images'
import { PiAirplaneTiltBold } from 'react-icons/pi'

const Section2 = () => {
    return (
        <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto md:w-5/6">
            <div className="flex flex-col text-start justify-between space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                <div className="flex flex-col w-full space-y-3 sm:w-3/4">
                    <h2 className="text-xl font-semibold md:text-2xl">
                        Top Businesses
                    </h2>
                    <p className="text-sm md:text-base">
                        Checkout Out Top Rated Businesses On The Energy
                        Marketplace.
                    </p>
                </div>
                <Button
                    className="hidden items-center space-x-2 h-14 p-2 px-4 md:pt-4 w-full border border-ctaColor rounded-2xl text-center sm:p-4 sm:w-48 sm:flex"
                    href="#"
                >
                    <span className="text-ctaColor">
                        <PiAirplaneTiltBold />
                    </span>
                    <span>View Rankings</span>
                </Button>
            </div>
            <div className="flex flex-col justify-between flex-wrap sm:flex-row">
                <Creator
                    // href="user"
                    src={img.a1}
                    creatorName="Keepitreal"
                    salesAmt="34.57"
                    creatorNum="01"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0"
                />
                <Creator
                    // href="user"
                    src={img.a2}
                    creatorName="DigiLab"
                    salesAmt="34.57"
                    creatorNum="02"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0"
                />
                <Creator
                    // href="user"
                    src={img.a3}
                    creatorName="GravityOne"
                    salesAmt="34.57"
                    creatorNum="03"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0"
                />
                <Creator
                    // href="user"
                    src={img.a4}
                    creatorName="Juanie"
                    salesAmt="34.57"
                    creatorNum="04"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0"
                />
                <Creator
                    // href="user"
                    src={img.a5}
                    creatorName="BlueWhale"
                    salesAmt="34.57"
                    creatorNum="05"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0"
                />
                <Creator
                    // href="user"
                    src={img.a6}
                    creatorName="MrFox"
                    salesAmt="34.57"
                    creatorNum="06"
                    className="flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0 hidden sm:flex"
                />
                <Creator
                    // href="user"
                    src={img.a7}
                    creatorName="Shroomie"
                    salesAmt="34.57"
                    creatorNum="07"
                    className="flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0 hidden md:flex"
                />
                <Creator
                    // href="user"
                    src={img.a8}
                    creatorName="Robotica"
                    salesAmt="34.87"
                    creatorNum="08"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0 hidden md:flex"
                />
                <Creator
                    // href="user"
                    src={img.a9}
                    creatorName="RustyRobot"
                    salesAmt="34.57"
                    creatorNum="09"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0 hidden md:flex"
                />
                <Creator
                    // href="user"
                    src={img.a10}
                    creatorName="Animakid"
                    salesAmt="34.57"
                    creatorNum="10"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0 hidden md:flex"
                />
                <Creator
                    // href="user"
                    src={img.a11}
                    creatorName="Dotgu"
                    salesAmt="34.57"
                    creatorNum="11"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0 hidden md:flex"
                />
                <Creator
                    href="user"
                    src={img.a12}
                    creatorName="Ghiblier"
                    salesAmt="34.57"
                    creatorNum="12"
                    className="flex flex-row p-4 space-x-3 bg-backgroundSecondary w-full rounded-xl items-center my-3 sm:p-2 sm:w-[48%] md:w-[22%] md:flex-col md:space-x-0 hidden md:flex"
                />
                <Button
                    className="h-14 p-1 px-4 pt-4 w-full border border-ctaColor rounded-2xl text-center sm:hidden"
                    href="#"
                >
                    <span className="text-ctaColor">View Rankings</span>
                </Button>
            </div>
        </section>
    )
}

export default Section2
