import { Check } from "lucide-react"

// eslint-disable-next-line react/prop-types
const Service = ({text}) => {
    return (
        <div className="flex flex-row items-center justify-start md:justify-start">
            <Check size={50} className="text-bgBlack dark:text-white mr-8" />
            <h4 className="pl-2 text-green-800 dark:text-green-400 text-2xl font-semibold">{text}</h4>
        </div>
    )
}

export default Service
