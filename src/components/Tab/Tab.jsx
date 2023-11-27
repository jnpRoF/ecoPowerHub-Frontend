const Tab = ({tabTitle,num,onClick,border}) => {
  return (
      <div
      className={`flex space-x-4 w-1/2 justify-center items-center py-3 ${border} cursor-pointer color-textColor`}
          onClick={onClick}
      >
          <p className="font-semibold text-xl">{tabTitle}</p>
          <p className="bg-backgroundSecondary font1 rounded-2xl p-1 px-3">
              {num}
          </p>
      </div>
  )
}

export default Tab
