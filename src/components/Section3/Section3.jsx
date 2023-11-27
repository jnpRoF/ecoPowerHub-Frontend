import Categories from "../Categories/Categories";
import img from "../../constants/images";

const Section3 = () => {
  return (
    <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto md:w-5/6">
      <div className="text-xl font-semibold md:text-2xl">Browse Categories</div>
      <div className="flex justify-between flex-wrap">
        <Categories src={img.energy10} category="Solar Energy" />
        <Categories src={img.energy2} category="Wind Energy" />
        <Categories src={img.energy8} category="Hydropower" />
        <Categories src={img.energy1} category="Geothermal Energy" />
        <Categories src={img.energy5} category="Biomass Energy" />
        <Categories src={img.a3} category="Tidal and Wave Energy" />
        <Categories src={img.energy14} category="Hybrid Systems" />
        <Categories src={img.energy9} category="Hydrogen Energy" />
      </div>
    </section>
  );
};

export default Section3;
