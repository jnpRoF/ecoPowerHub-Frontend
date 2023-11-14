import Button from "../Button/Button";
import EachEnergy from "../EachEnergy/EachEnergy";
import img from "../../constants/images";

const Section4 = () => {
  return (
    <section4 className="flex flex-col space-y-8 my-20 w-4/5 mx-auto md:w-5/6">
      <div className="flex flex-col text-start justify-between space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
        <div className="flex flex-col w-full space-y-3 sm:w-3/4">
          <h2 className="text-xl font-semibold md:text-2xl">
            Discover More NFTs.
          </h2>
          <p className="text-sm md:text-base">Explore New Trending NFTs</p>
        </div>
        <Button
          className="hidden h-14 p-2 px-4 md:pt-4 w-full bg-ctaColor rounded-2xl text-center sm:p-4 sm:w-48 sm:block"
          href="#"
        >
          See All
        </Button>
      </div>
      <div className="flex flex-col justify-between flex-wrap sm:flex-row">
        <EachEnergy
          img={img.heroImg}
          img2={img.a1}
          avatarName="MoonDancer"
          energyName="DistantGalaxy"
          price="1.63ETH"
          highestBid="0.33wETH"
          className="flex flex-col w-full h-full sm:w-[47%] my-3"
        />
        <EachEnergy
          img={img.heroImg}
          img2={img.a1}
          avatarName="NebulaKid"
          energyName="Life On Edena"
          price="1.63ETH"
          highestBid="0.33wETH"
          className="flex flex-col w-full h-full sm:w-[47%] my-3"
        />
        <EachEnergy
          img={img.heroImg}
          img2={img.a1}
          avatarName="SpaceOne"
          energyName="AstroFiction"
          price="1.63ETH"
          highestBid="0.33wETH"
          className="flex flex-col w-full h-full sm:w-[47%] my-3 sm:hidden md:flex"
        />
        <Button
          className="h-14 p-1 px-4 pt-4 w-full bg-ctaColor rounded-2xl text-center sm:p-4 sm:w-48 sm:hidden"
          href="#"
        >
          See All
        </Button>
      </div>
    </section4>
  );
};

export default Section4;
