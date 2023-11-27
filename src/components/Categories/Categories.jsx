const Categories = ({ src, category }) => {
  return (
    <div className="flex flex-col w-[47%] my-3 sm:w-[45%] md:w-[26%] lg:w-[22%]">
      <img src={src} alt="" />
      <div className="bg-backgroundSecondary rounded-b-xl flex itmes-center">
        <div className="flex flex-col justify-between space-y-2 px-4 py-4">
          <p className="font-semibold">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
