import ButtonPrimary from "./ButtonPrimary"
import gsap from "gsap"
import { useEffect,useRef } from 'react'

const Motivation = () => {

    const motivationRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(entry.target, {
                        duration: 1.5,
                        opacity: 0,
                        y: -100,
                        ease: 'power2.out'
                    });
                    observer.unobserve(entry.target);
                }
            });
        });

        if (motivationRef.current) {
            observer.observe(motivationRef.current);
        }

        return () => {
            if (motivationRef.current) {
                observer.unobserve(motivationRef.current);
            }
        };
    }, []);

    return (
        <div ref={motivationRef} id="motivation" className="w-full bg-white dark:bg-bgBlack py-5 
        flex flex-row md:flex-row items-center 
        justify-stretch
        md:justify-center overflow-hidden ">
            <div className="flex flex-col items-center justify-center z-10">
                <h1 className="
                font-extrabold 
                text-4xl my-4 mx-2 
                bg-gradient-to-r 
                text-transparent 
                bg-clip-text from-bgGradient-start-500 to-bgGradient-end-500 
                dark:from-bgOrange dark:to-bgRose transition-all duration-300">
                Passion for Innovation
                </h1>
                <div className="flex items-center">
                    <ButtonPrimary text={"Start Now"} />
                </div>
            </div>

            <img src="/bg2.jpg" alt="virtual animals" className="w-[500px] md:translate-x-24 rotate-90 md:rotate-45 rounded-sm shadow-md shadow-black" />

        </div>
    )
}

export default Motivation
