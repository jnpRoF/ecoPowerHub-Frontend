import { PiCopyLight } from 'react-icons/pi'

const EachField = ({ label, children }) => {
    return (
        <div className="flex justify-between w-full items-center">
            <div className="w-[15%] text-end">
                <label htmlFor="">{label}</label>
            </div>
            <div className="flex space-x-3 items-center w-4/5">
                <div className="flex border border-darkGrey rounded-sm space-x-4 items-center w-[95%]">
                    <input type="text" className="p-4 w-[90%]" />
                    <span className="text-lg text-darkGrey">
                        <PiCopyLight />
                    </span>
                </div>
                {children}
            </div>
        </div>
    )
}

export default EachField
