import { Award, Download, Map, Star } from "lucide-react"
import Number from "./Number"
import gsap from "gsap"
import { useEffect, useRef } from 'react'

const Numbers = () => {

    const numbersRef = useRef(null);
    
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

        if (numbersRef.current) {
            observer.observe(numbersRef.current);
        }

        return () => {
            if (numbersRef.current) {
                observer.unobserve(numbersRef.current);
            }
        };
    }, []);

    return (
        <div ref={numbersRef} id="numbers" className="w-full bg-white dark:bg-bgBlack ">
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="font-extrabold text-4xl my-4 pb-8 mx-2 bg-gradient-to-r text-transparent bg-clip-text from-bgGradient-start-500 to-bgGradient-end-500 dark:from-bgOrange dark:to-bgRose transition-all duration-300">Our numbers speak for us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center sm:w-1/2 ">
                    <Number num={"+500K"} icon={<Download size={100} />} text="Downloads" />
                    <Number num={"95%"} icon={<Star size={100}/>} text="Calification"/>
                    <Number num={"70"} icon={<Award size={100}/>} text="Awards" />
                    <Number num={"+150"} icon={<Map size={100}/>} text="Countries" />
                </div>


            </div>
        </div>
    )
}

export default Numbers
