import { useEffect, useState } from "react";
import { useThemeValue } from "./ColorContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Trusted from "./components/Trusted";
import Motivation from "./components/Motivation";
import Services from "./components/Services";
import Numbers from "./components/Numbers";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";



const App = () => {
  const theme = useThemeValue();
  const [phoneMenu, setPhoneMenu] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  return (
    <div className="min-h-screen dark:bg-gradient-to-br from-bgGradient-start to-bgGradient-end overflow-x-hidden">
      <Navbar setPhoneMenu={setPhoneMenu} phoneMenu={phoneMenu} />
      {
        !phoneMenu
          &&
          <div className="flex flex-col items-center justify-center ">
            <Hero />
            <Features />
            <Motivation />
            <Services />
            <Gallery />
            <Numbers />
            <Trusted />
            <ContactForm />
            <Footer />
          </div>
      }

    </div>

  )
}

export default App;
