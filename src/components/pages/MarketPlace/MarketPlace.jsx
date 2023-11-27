import Tab from "../../Tab/Tab";
import EachEnergy from "../../EachEnergy/EachEnergy";
import img from "../../../constants/images";
import { CiSearch } from "react-icons/ci";

const MarketPlace = () => {
  return (
      <>
          <section className="flex flex-col space-y-6 mt-20 mb-14 w-4/5 mx-auto md:w-5/6">
              <h1 className="text-4xl font-semibold">Browse Marketplace</h1>
              <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
              <div className="flex items-center border border-darkGrey rounded-full px-4">
                  <input
                      type="text"
                      className="p-4 w-full rounded-md bg-transparent focus:outline-none"
                      placeholder="Search your favourite NFTs"
                  />
                  <button className="text-3xl text-textColor">
                      <CiSearch />
                  </button>
              </div>
          </section>
          <div className="flex mx-auto md:w-5/6">
              <Tab tabTitle="Foreign" num="302" className="w-1/2" />
              <Tab tabTitle="Local" num="67" />
          </div>
          <section className="flex flex-col justify-between flex-wrap sm:flex-row mx-auto py-10 w-5/6">
              <EachEnergy
                  img={img.energy11}
                  img2={img.a1}
                  avatarName="MoonDancer"
                  energyName="DistantGalaxy"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%]"
              />
              <EachEnergy
                  img={img.energy3}
                  img2={img.a1}
                  avatarName="NebulaKid"
                  energyName="Life On Edena"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%]"
              />
              <EachEnergy
                  img={img.energy6}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%]"
              />
              <EachEnergy
                  img={img.energy13}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy1}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy2}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy5}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy9}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy4}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="hidden flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy13}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="hidden flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy14}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="hidden flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
              <EachEnergy
                  img={img.energy8}
                  img2={img.a1}
                  avatarName="SpaceOne"
                  energyName="AstroFiction"
                  price="1.63Toro"
                  className="hidden flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
              />
          </section>
      </>
  )
};

export default MarketPlace;
