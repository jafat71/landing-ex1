import { Gamepad2, ImagePlayIcon, LucideAirplay} from "lucide-react"
import { Feature } from "./Feature"

const Features = () => {
    return (
        <div id="features" className="w-full pt-10 mt-20 bg-bgBlack">
            <div className="w-full bg-white dark:bg-bgBlack 
            flex flex-col md:flex-row items-start justify-around">
                <Feature
                    title={"VR/AR Game Development"}
                    text={`From virtual worlds to augmented reality experiences, we create games that push the boundaries of imagination.`}
                    icon={<Gamepad2 size={100} />}
                />

                <Feature
                    title={"Immersive User Interface Design"}
                    text={`We craft intuitive interfaces that completely immerse you in the gaming experience.`}
                    icon={<ImagePlayIcon size={100} />}
                />

                <Feature
                    title={"Specialized VR/AR Consulting"}
                    text={`We advise you on implementing virtual and augmented reality technologies to maximize the potential of your projects.`}
                    icon={<LucideAirplay size={100} />}
                />
            </div>
        </div>
    )
}

export default Features
