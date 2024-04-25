import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"

const Hero = () => {

    return (
        <div className="relative 
        flex flex-col md:flex-row items-center  
        h-auto md:mt-24 text-bgBlack dark:text-white overflow-hidden transition-all duration-300">

            <div className="hidden md:flex flex-row items-center justify-end md:scale-150 translate-x-44 z-10 md:translate-x-32 lg:translate-x-28 md:translate-y-10 md:-rotate-12">
                <img src="bg1.jpg" className="hidden md:block h-96 rounded-sm shadow-md shadow-black"></img>
                <img src="bg1.jpg" className="hidden md:block h-72 rounded-sm -translate-x-[95px] -z-20 shadow-md shadow-black"></img>
                <img src="bg1.jpg" className="hidden md:block h-52 rounded-sm -translate-x-[162px] -z-40 shadow-md shadow-black"></img>
            </div>

            <div className="flex flex-col items-center md:items-start justify-center md:pl-0 w-5/6 md:w-full z-10">
                <h1 className="font-extrabold text-5xl md:text-7xl my-4 mx-2 bg-gradient-to-r text-transparent bg-clip-text from-bgGradient-start-500 to-bgGradient-end-500 dark:from-bgOrange dark:to-bgRose transition-all duration-300 z-10 text-center md:text-left">
                    Inmerse in the future of Game Development
                </h1>
                <span className="text-2xl font-semibold my-4 z-10 
                text-center md:text-left  mx-2
                text-white md:text-white ">TELAAZ X Tech is the forefront of the virtual and augmented reality revolution.</span>
                <div className="text-center md:text-left">
                    <ButtonPrimary text={"Start Now"} />
                    <ButtonSecondary text={"Contact Us"} />
                </div>
            </div>

            <img src="bg1.jpg" className="absolute rotate-[206deg] 
            scale-100 block md:hidden h-96 rounded-sm z-0 
            shadow-md shadow-black items-start 
            translate-x-[250px] translate-y-[116px]"></img>
            <img src="bg1.jpg" className="absolute rotate-[206deg] 
            scale-100 block md:hidden h-96 rounded-sm z-0 
            shadow-md shadow-black items-start 
            translate-x-[250px] translate-y-[216px]"></img>
        </div>

    )
}

export default Hero
