import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        theme: "",
        country: "",
        doubt: ""
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form data:", formData);
            // Aquí puedes enviar los datos a través de una solicitud HTTP o realizar cualquier acción necesaria
        }
    };

    const validateForm = (data) => {
        let errors = {};

        // Validación del nombre
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }

        // Validación del correo electrónico
        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Invalid email address";
        }

        // Validación del tema
        if (!data.theme.trim()) {
            errors.theme = "Theme is required";
        }

        // Validación del país
        if (!data.country.trim()) {
            errors.country = "Country is required";
        }

        // Validación de la duda
        if (!data.doubt.trim()) {
            errors.doubt = "Doubt is required";
        }

        return errors;
    };

    return (
        <div className="w-full flex flex-row items-center justify-center h-auto text-bgBlack dark:text-white overflow-hidden transition-all duration-300">
            <div className="justify-end scale-150 -translate-x-36 rotate-12 ">
                <img src="bg5.jpg" className="h-96 rounded-sm shadow-md shadow-black" alt="Background"></img>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-7xl my-4 mx-2 bg-gradient-to-r text-transparent bg-clip-text from-bgGradient-start-500 to-bgGradient-end-500 dark:from-bgOrange dark:to-bgRose transition-all duration-300">Still have doubts?</h1>
                <form className="bg-white dark:bg-bgBlack dark:text-white px-20 py-14 rounded-md shadow-sm shadow-black flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h2 className="text-bgBlack dark:text-white text-2xl font-semibold opacity-70">Contact us</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black ${formErrors.name ? "border-red-500" : ""}`}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black ${formErrors.email ? "border-red-500" : ""}`}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black ${formErrors.theme ? "border-red-500" : ""}`}
                            type="text"
                            name="theme"
                            placeholder="Theme"
                            value={formData.theme}
                            onChange={handleChange}
                        />
                        {formErrors.theme && <span className="text-red-500">{formErrors.theme}</span>}
                        <input className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black ${formErrors.country ? "border-red-500" : ""}`}
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                        {formErrors.country && <span className="text-red-500">{formErrors.country}</span>}
                        <textarea className={`p-4 rounded-md shadow-sm outline-none bg-inherit text-bgBlack dark:text-white shadow-black md:col-span-2 resize-none ${formErrors.doubt ? "border-red-500" : ""}`}
                            name="doubt"
                            placeholder="Your doubt is...."
                            value={formData.doubt}
                            onChange={handleChange}
                        />
                        {formErrors.doubt && <span className="text-red-500">{formErrors.doubt}</span>}
                    </div>
                    <ButtonPrimary type="submit" text={"Get Started"} />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
