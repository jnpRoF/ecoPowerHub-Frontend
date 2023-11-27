const Register = ({ src, pageHead, pageText1, pageText2, children }) => {
    return (
        <div className="flex flex-col w-full font1 bg-background justify-between md:flex-row md:space-y-0">
            <div className="w-full h-60 md:w-[48%] md:h-screen">
                <img src={src} alt="" className="w-full h-full" />
            </div>
            <div className="flex space-y-3 py-8 w-full md:w-[48%]">
                <div className="flex flex-col space-y-5 justify-center sm:w-3/5 md:w-4/5">
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-semibold text-3xl md:text-4xl">
                            {pageHead}
                        </h2>
                        <div className="flex flex-col">
                            <p className="text-base md:text-lg">{pageText1}</p>
                            <p className="text-base md:text-lg">{pageText2}</p>
                        </div>
                    </div>
                    <>{children}</>
                </div>
            </div>
        </div>
    )
}

export default Register
