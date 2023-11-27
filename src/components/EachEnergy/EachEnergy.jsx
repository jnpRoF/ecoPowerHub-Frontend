import { useState } from 'react'
import AvatarTab from '../AvatarTab/AvatarTab'

const EachEnergy = ({
    img,
    energyName,
    avatarName,
    img2,
    price,
    className,
    href,
}) => {
    const [token, setToken] = useState()

    const handleButtonClick = () => {
        if (!token) {
            alert('Please, you have to sign up/log in to continue')
        }
    }

    return (
        <div className={className}>
            {/* <a className={className} href={href}> */}
            <img src={img} alt="" className="w-full h-[90%] rounded-t-2xl" />
            <div className="font1 flex flex-col bg-darkGrey rounded-b-xl py-4">
                <div className="flex flex-col justify-between px-4">
                    <p className="test-lg font-semibold">{energyName}</p>
                    <AvatarTab
                        src={img2}
                        alt=""
                        avatarName={avatarName}
                        className="flex space-x-2"
                    ></AvatarTab>
                </div>
                <div className="flex justify-between px-4 items-center">
                    <div className="flex flex-col space-y-1 h-14 justify-between">
                        <p className="text-xs text-backgroundSecondary md:text-sm">
                            Price
                        </p>
                        <p className="text-sm">{price}</p>
                    </div>
                    <div className="flex flex-col space-y-1 sm:text-end">
                        <button
                            className="text-sm bg-ctaColor rounded-full p-2"
                            onClick={handleButtonClick}
                        >
                            Invest
                        </button>
                        <button
                            className="text-sm bg-ctaColor rounded-full p-2"
                            onClick={handleButtonClick}
                        >
                            Pay
                        </button>
                    </div>
                </div>
            </div>
            {/* </a> */}
        </div>
    )
}

export default EachEnergy
