
// eslint-disable-next-line react/prop-types
const Number = ({num,icon,text}) => {
  return (
    <div className="flex flex-col items-center px-10 text-bgBlack dark:text-white opacity-90">
        <div>
            {icon}
        </div>
        <h1 className="text-7xl">{num}</h1>
        <h1 className="text-3xl">{text}</h1>
    </div>
  )
}

export default Number
