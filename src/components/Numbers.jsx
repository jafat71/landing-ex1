import { Award, Download, Map, Star, User } from "lucide-react"
import Number from "./Number"

const Numbers = () => {
    return (
        <div id="numbers" className="w-full bg-white dark:bg-bgBlack ">
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="font-extrabold text-4xl my-4 pb-8 mx-2 bg-gradient-to-r text-transparent bg-clip-text from-bgGradient-start-500 to-bgGradient-end-500 dark:from-bgOrange dark:to-bgRose transition-all duration-300">Our numbers speak for us</h1>
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center sm:w-1/2 lg:w-3/4">
                    <Number num={"+500K"} icon={<Download size={100} />} text="Downloads" />
                    <Number num={"95%"} icon={<Star size={100}/>} text="Calification"/>
                    <Number num={"70"} icon={<Award size={100}/>} text="Awards" />
                    <Number num={"+150"} icon={<Map size={100}/>} text="Countries" />
                    <Number num={"+1000000"} icon={<User size={100}/>} text="Users"/>
                </div>


            </div>
        </div>
    )
}

export default Numbers
