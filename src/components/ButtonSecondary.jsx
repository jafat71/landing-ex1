// eslint-disable-next-line react/prop-types
const ButtonSecondary = ({text}) => {
    return (
        <button className="p-3 m-3 text-lg bg-inherit text-white rounded-lg  dark:text-bgRose px-16
        cursor-pointer hover:scale-105 transition-all duration-300 z-10">
            {text}
        </button>
    )
  }
  
  export default ButtonSecondary
  