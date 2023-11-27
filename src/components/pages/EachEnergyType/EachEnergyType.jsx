import img from "../../../constants/images";
import Button from "../../Button/Button";
import EachEnergy from "../../EachEnergy/EachEnergy";

const EachEnergyType = () => {
  return (
    <>
      <section>
        <img src={img.space} alt="" className="w-full" />
        <div className="flex flex-col justify-between flex-wrap sm:flex-row mx-auto py-10 w-5/6 md:w-3/5 md:justify-start lg:w-4/5">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h2 className="font-semibold text-3xl">The Orbitians</h2>
              <p className="font1 text-darkGrey">Minted on Sept 30,2022</p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-sm font1 text-darkGrey md:text-base">
                Created By
              </p>

              <div className="flex justify-between w-24">
                <img src={img.a1} alt="" className="w-6 h-6" />
                <span>Orbitian</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-sm font1 text-darkGrey md:text-base">
                Description
              </p>
              <p className="text-sm md:text-base">
                The Orbitians is a collection of 10,000 unique NFTs on the
                Toronet blockchain.
              </p>
              <p className="text-sm md:text-base">
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians.
              </p>
              <p className="text-sm md:text-base">
                They live in a metal space machines, highup in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know
                any other way to be. Upside-Downs believe that they will be able
                to win this war if they could only get an eye into Orbitian
                territory, so they've taken to make human beings their target.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-darkGrey md:text-base">Details</p>
              <a href="#" className="text-sm md:text-base">
                View on Etherscan
              </a>
              <a href="#" className="text-sm md:text-base">
                View Original
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-darkGrey md:text-base">Tags</p>
              <div className="flex flex-col space-y-3 md:flex-row md:space-x-3">
                <Button className="w-fit bg-ctaColor rounded-2xl font-semibold py-2 px-4 text-sm md:text-base md:mt-3">
                  ANIMATION
                </Button>
                <Button className="w-fit bg-ctaColor rounded-2xl font-semibold py-2 px-4 text-sm md:text-base">
                  ILLUSTRATION
                </Button>
                <Button className="w-fit bg-ctaColor rounded-2xl font-semibold py-2 px-4 text-sm md:text-base">
                  MOON
                </Button>
                <Button className="w-fit bg-ctaColor rounded-2xl font-semibold py-2 px-4 text-sm md:text-base">
                  MOON
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto">
        <div className="flex flex-col text-start justify-between space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
          <div className="flex flex-col w-full space-y-3 sm:w-3/4">
            <h2 className="text-xl font-semibold md:text-2xl">
              More From This Artist
            </h2>
          </div>
          <Button
            className="hidden h-14 p-2 px-4 font-semibold w-full bg-ctaColor rounded-2xl text-center sm:p-2 sm:w-48 sm:block md:pt-4 sm:h-10"
            href="#"
          >
            Go To Artist Page
          </Button>
        </div>
        <div className="flex flex-col justify-between flex-wrap sm:flex-row">
          <EachEnergy
            img={img.mushroom}
            img2={img.a1}
            avatarName="PowerHub Connect"
            energyName="DistantGalaxy"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%]"
          />
          <EachEnergy
            img={img.robot}
            img2={img.a1}
            avatarName="EnergyTrade Pro"
            energyName="Solar"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="flex flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%]"
          />
          <EachEnergy
            img={img.robot2}
            img2={img.a1}
            avatarName="EcoGrid Solutions"
            energyName="Hydro"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] sm:flex"
          />
          <EachEnergy
            img={img.bigcat}
            img2={img.a1}
            avatarName="RenewaMarket"
            energyName="Solar"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] sm:flex"
          />
          <EachEnergy
            img={img.colordog}
            img2={img.a1}
            avatarName="VoltLink Exchange"
            energyName="AstroFiction"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] sm:flex"
          />
          <EachEnergy
            img={img.robot3}
            img2={img.a1}
            avatarName="GreenerGrid Hub"
            energyName="Biogas"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] sm:flex"
          />
          <EachEnergy
            img={img.girl}
            img2={img.a1}
            avatarName="EcoWatt Marketplace"
            energyName="Hydrogen Energy"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
          />
          <EachEnergy
            img={img.cloud}
            img2={img.a1}
            avatarName="CleanCurrent Connect"
            energyName="Wind Energy"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
          />
          <EachEnergy
            img={img.space4}
            img2={img.a1}
            avatarName="WattFlow Networke"
            energyName="Solar Energy"
            price="1.63ETH"
            highestBid="0.33Toro"
            className="hidden flex-col w-full h-72 my-3 sm:w-[45%] md:w-[30%] md:flex"
          />
        </div>
      </section>
    </>
  );
};

export default EachEnergyType;
