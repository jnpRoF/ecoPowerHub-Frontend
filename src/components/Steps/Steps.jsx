const Steps = ({ src, setupHeading, setupText }) => {
    return (
        <div className="flex flex-col bg-backgroundSecondary h-auto w-full px-3 items-center rounded-2xl my-2 sm:h-[22rem] md:px-3 sm2:flex-row md:flex-col md:w-[47%] lg:w-[30%]">
            <img
                src={src}
                alt=""
                className="w-[45%] h-full sm:w-full sm:w-full sm:h-[40%]"
            />
            <div className="flex flex-col w-full h-[70%] space-y-3 py-4 pt-4 px-0 text-start sm:text-center sm:w-full sm:px-4 sm2:h-auto">
                <h4 className="font-semibold text-xl text-center">
                    {setupHeading}
                </h4>
                <p className="text-sm text-center sm:text-base md:text-sm">
                    {setupText}
                </p>
            </div>
        </div>
    )
}

export default Steps
