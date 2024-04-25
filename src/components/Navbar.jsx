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
            <a href="#">Tools</a>
          </li>
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mr-2 transition-all duration-300">
            <a href="#">Our Work</a>
          </li>
          <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mr-2 transition-all duration-300">
            <a href="#">Our Path</a>
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
            ? <X/>
            : <MenuIcon />
          }
        </button>



      </div>

      {
        phoneMenu && (
          <ul className="pt-10 flex flex-col top-0 bottom-0 left-0 right-0 bg-inhenrit items-center justify-between
        fixed overflow-auto gap-4 w-full">
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose  transition-all duration-300">
              <a href="#">Web</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a href="#">CDN</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a href="#">License</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a href="#">Setup</a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a href="#"><Instagram /></a>
            </li>
            <li className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose transition-all duration-300">
              <a href="#"><Github /></a>
            </li>

            <div className="flex flex-row items-center justify-between">
              <button onClick={toggleTheme} className="hover:scale-110 hover:text-bgLightBlue dark:hover:text-bgRose mb-20">
                {
                  themeVal === "light"
                    ? <Moon />
                    : <Sun />
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
