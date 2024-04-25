import Service from "./Service"

const Services = () => {
    return (
        <div className="w-full bg-white dark:bg-bgBlack pt-5">
            <div className="px-10 flex flex-col items-center justify-center">
                <h2 className="text-bgBlack dark:text-bgRose text-3xl font-semibold">Awesome Tools</h2>
                <h2 className="text-bgBlack dark:text-white text-2xl font-semibold opacity-70">On the top of innovation</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full mb-10">
                    <Service text={"Virtual worlds"} />
                    <Service text={"Any device"} />
                    <Service text={"Jaw-dropping visuals"} />
                    <Service text={"Intuitive interface"} />
                    <Service text={"Multiplayer adventures"} />
                    <Service text={"Safety and stability"} />
                    <Service text={"Regular updates"} />
                    <Service text={"Vibrant community"} />
                    <Service text={"Support team "} />
                </div>
            </div>
        </div>

    )
}

export default Services
