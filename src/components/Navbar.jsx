/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Github, Instagram, MenuIcon, Moon, Move, Sun, X } from "lucide-react"
import { useThemeSetter, useThemeValue } from "../ColorContext";

const Navbar = ({ setPhoneMenu, phoneMenu }) => {
  const themeVal = useThemeValue();
  const dispatch = useThemeSetter();
  const toggleTheme = () => {
    dispatch(themeVal === "light" ? "dark" : "light");
  }

  const toggleMenu = () => {
    setPhoneMenu(!phoneMenu)
  }

  useEffect(() => {
    const handleResize = () => {
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      if (isMd && phoneMenu) {
        toggleMenu()
      }
    };

    handleResize()
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneMenu]);

  return (
    <nav className={`w-full text-bgBlack dark:text-white h-12 p-1`}>
      <div className='flex flex-row items-center justify-around'>
        <a href="#" className="z-10">
          <span className="flex flex-row items-center font-extralight">
            <Move size={35} />
            TELAAZ X TECH
          </span>
        </a>

        <ul className="hidden md:flex md:flex-row items-center justify-between w-[400px]">
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mr-2  transition-all duration-300">
            <a href="#features">Features</a>
          </li>
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mr-2 transition-all duration-300">
            <a href="#services">Tools</a>
          </li>
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mr-2 transition-all duration-300">
            <a href="#work">Gallery</a>
          </li>
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mr-2 transition-all duration-300">
            <a href="#numbers">Numbers</a>
          </li>
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mr-2 transition-all duration-300">
            <a href="#"><Instagram /></a>
          </li>
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
            <a href="#"><Github /></a>
          </li>

          <div className="ml-10 flex flex-row items-center justify-between">
            <button onClick={toggleTheme} className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose">
              {
                themeVal === "light"
                  ? <Moon />
                  : <Sun />
              }


            </button>

          </div>
        </ul>

        <button onClick={toggleMenu} className="flex md:hidden ml-28 z-10">
          {
            phoneMenu
            ? <X alt="Close Menu"/>
            : <MenuIcon alt="Open Menu" />
          }
        </button>



      </div>

      {
        phoneMenu && (
          <ul className="pt-10 flex flex-col top-0 bottom-0 left-0 right-0 bg-inhenrit items-center justify-between
        fixed overflow-auto gap-4 w-full">
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose  transition-all duration-300">
              <a onClick={toggleMenu} href="#features">Features</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a onClick={toggleMenu} href="#services">Tools</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a onClick={toggleMenu} href="#work">Gallery</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a onClick={toggleMenu} href="#numbers">Numbers</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a href="#"><Instagram alt="Instagram Account" /></a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a href="#"><Github alt="Github Account" /></a>
            </li>

            <div className="flex flex-row items-center justify-between">
              <button onClick={toggleTheme} className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mb-20">
                {
                  themeVal === "light"
                    ? <Moon alt="Dark Mode" />
                    : <Sun alt="Light Mode"/>
                }


              </button>

            </div>
          </ul>
        )
      }


    </nav>
  )
}

export default Navbar
