import { useFormik } from "formik";
import ButtonPrimary from "./ButtonPrimary";
import gsap from "gsap"
import { useEffect,useRef } from 'react'

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            theme: "",
            country: "",
            doubt:"",
        },
        onSubmit: data => {
            console.log(data)
        }
    });
    

    const imageRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(entry.target, {
                        duration: 1.5,
                        opacity: 0,
                        y: -100,
                        ease: 'bounce'
                    });
                    observer.unobserve(entry.target);
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    

    return (
        <div className="w-full flex flex-row items-center justify-center h-auto text-bgBlack dark:text-white overflow-hidden transition-all duration-300">
            <div className="justify-end scale-150 -translate-x-36 rotate-12 ">
                <img ref={imageRef} src="bg5.jpg" alt="virtual pc" className="h-96 rounded-sm shadow-md shadow-black" loading="lazy"></img>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-7xl my-4 mx-2 bg-gradient-to-r text-transparent bg-clip-text from-bgGradient-start-500 to-bgGradient-end-500 dark:from-bgOrange dark:to-bgRose transition-all duration-300">Still have doubts?</h1>
                <form noValidate onSubmit={formik.handleSubmit} className="bg-white dark:bg-bgBlack dark:text-white px-20 py-14 rounded-md shadow-sm shadow-black flex flex-col gap-4">
                    <h2 className="text-bgBlack dark:text-white text-2xl font-semibold opacity-70">Contact us</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black`}
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={formik.handleChange}
                            value = {formik.values.name}
                        />
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black`}
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value = {formik.values.email}
                        />
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black`}
                            type="text"
                            name="theme"
                            placeholder="Theme"
                            onChange={formik.handleChange}
                            value = {formik.values.theme}
                        />
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black`}
                            type="text"
                            name="country"
                            placeholder="Country"
                            onChange={formik.handleChange}
                            value = {formik.values.country}
                        />
                        <textarea className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black md:col-span-2 resize-none`}
                            name="doubt"
                            placeholder="Your doubt is...."
                            onChange={formik.handleChange}
                            value = {formik.values.doubt}
                        />
                    </div>
                    <ButtonPrimary type="submit" text={"Get Started"} />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
