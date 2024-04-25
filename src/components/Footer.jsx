import { Github, Instagram, Move } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-inherit my-10 w-full px-10 text-bgBlack dark:text-white">
            <div>
                <div className="flex flex-col items-center justify-around md:flex-row">
                    <a href="#">
                        <span className="flex flex-row items-center font-extralight">
                            <Move size={35} />
                            TELAAZ X TECH
                        </span>
                        <p className="font-extralight text-sm mb-4 md:mb-0" >2024, Copyright</p>
                    </a>

                    <div
                        className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0">
                        <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                                <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose  transition-all duration-300">
                                    <a href="#features">Features</a>
                                </div>
                                <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
                                    <a href="#services">Tools</a>
                                </div>
                                <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
                                    <a href="#work">Gallery</a>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4 text-center md:text-left">
                                <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose  transition-all duration-300">
                                    <a href="#numbers">Numbers</a>
                                </div>
                                <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
                                    <a href="#">Contact</a>
                                </div>
                                <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
                                    <a href="#">Privacy</a>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col justify-between md:w-32 py-1 gap-10">
                            <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
                                <a href="#"><Instagram alt="Instagram Account" /></a>
                            </div>
                            <div className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
                                <a href="#"><Github  alt="Github Account" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
