// import Button from "../Button/Button";

const Creator = ({ creatorName, salesAmt, creatorNum, className, href, src }) => {
  return (
    <a className={className} href={href}>
      <div className="relative">
        <div className="bg-background text-darkGrey font1 rounded-full p-1 px-2 absolute -mt-2 -ml-3 sm:p-0.5 md:-ml-7 sm:-ml-1.5 sm:mt-1 sm:px-1 sm:text-xs">
          {creatorNum}
        </div>
        <img
          src={src}
          alt=""
          className="w-12 h-12 sm:w-10 sm:h-10 md:w-20 md:h-20"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:space-y-1 items-center">
        {/* <div className="flex justify-between w-full items-center"> */}
          <h4 className="font-semibold">{creatorName}</h4>
          {/* <Button className="bg-ctaColor rounded-full p-1">Invest</Button> */}
        {/* </div> */}
        <p className="text-sm sm:text-xs md:text-[0.6rem]">
          <span className="text-darkGrey mr-2 md:mr-1">Total Sales:</span>
          <span className="font1">{salesAmt} Toro</span>
        </p>
      </div>
    </a>
  );
};

export default Creator;
