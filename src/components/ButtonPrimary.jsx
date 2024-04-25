/* eslint-disable react/prop-types */

const ButtonPrimary = ({ text }) => {
    return (
        <button className="p-3 m-3 text-lg bg-bgLightBlue text-white rounded-lg dark:bg-bgOrange dark:text-black px-16
        cursor-pointer hover:scale-105 transition-all duration-300 z-10">
            {text}
        </button>
    )
}

export default ButtonPrimary
