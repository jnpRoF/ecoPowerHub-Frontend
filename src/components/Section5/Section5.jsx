import Steps from "../Steps/Steps";
import img from "../../constants/images";

const Section5 = () => {
  return (
      <section className="flex flex-col space-y-8 mt-20 mb-10 w-[85%] mx-auto md:w-5/6">
          <div className="flex flex-col text-start justify-between space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                  How It Works
              </h2>
              <p className="text-sm md:text-base">
                  Find out how to get started.
              </p>
          </div>
          <div className="flex flex-col justify-between flex-wrap sm:flex-row md:justify-between">
              <Steps
                  src={img.icon}
                  setupHeading="Users"
                  setupText="Power up your investments in the energy marketplace! Invest in sustainable projects that redefine the future of energy. From solar innovations to eco-friendly initiatives, your investments can drive positive change. Start investing now and be a catalyst for a greener, more sustainable world."
              />
              <Steps
                  src={img.icon}
                  setupHeading="Business"
                  setupText="Join us, energy innovators! Showcase your projects on our platform, connecting with investors passionate about clean energy. Whether in renewable tech or eco-solutions, we're your gateway to funding and partnerships. Illuminate the path to a sustainable energy future with us."
              />
              <Steps
                  src={img.icon}
                  setupHeading="Welcome to the Eco Power Hub!"
                  setupText="Investors, shape the future with us! Explore, fund, and accelerate sustainability. Companies, showcase your initiatives globally to forward-thinking investors. Let's power up progress towards a cleaner, greener world!"
              />
          </div>
      </section>
  )
};

export default Section5;

