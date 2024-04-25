
// eslint-disable-next-line react/prop-types
export const Feature = ({title,text,icon}) => {
    return (
        <div className="bg-inherit text-black dark:text-white w-full 
        md:w-1/3 my-8 mx-4 px-4">
            <div className="flex flex-col items-center">
                {icon}
            </div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>
                {text}
            </p>
        </div>
    )
}
