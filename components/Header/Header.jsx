"use client";

import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { scale } from "./anim";
import Link from "next/link";
import Links from "./Link";
import { usePathname } from 'next/navigation';
import { FaRegCopyright } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Magnetic from "@/common/Magnetic"
const navItems = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

// Accept textColor as a prop
const Header = ({ textColor = "text-white" }) => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [top, setTop] = useState(true);
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 250 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <>
      <div className={`absolute ${textColor} px-4 sm:16 left-0 w-full flex justify-between items-center p-4 z-10`}>
        {/* Logo and Name */}
        <div className="flex items-center justify-center group p-4">
          <div className="flex items-center justify-center pr-1 group-hover:rotate-360 cursor-pointer duration-500">
            <FaRegCopyright size={15} />
          </div>
          <div className="flex justify-between w-[130px] h-[30px] whitespace-nowrap overflow-hidden cursor-pointer">
            <motion.h1
              className={`text-xl font-semibold ${textColor}`}
              onClick={() => { router.push('/') }}
              whileHover={{
                x: -80,
                transition: {
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.05
                }
              }}
            >
              Code by Amir Ferroum
            </motion.h1>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Magnetic>
        <div className="sm:hidden flex items-center cursor-pointer" onClick={() => {
          setIsActive(!isActive);
          setTop(false);
        }}>
          <div className={`block m-auto w-2 h-2 bg-white rounded-md`}></div>
          <h1 className={`relative px-3 ${textColor}`}>Menu</h1>
        </div>
        </Magnetic>

        {/* Desktop Nav */}
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className="hidden sm:flex justify-evenly duration-300 delay-300 ease-sp">
          {navItems.map((item, index) => {
            if (item.title === "Home") return null;
            return (
                      <Magnetic>

              <div
                key={`/link${index}`}
                onMouseEnter={() => { setSelectedIndicator(item.href) }}
                className={`relative flex flex-col items-center p-4`}
              >
                <Link href={item.href} className={textColor}>
                  {item.title}
                </Link>
                <motion.div
                  variants={scale}
                  animate={selectedIndicator === item.href ? "open" : "closed"}
                  whileTap={{ scale: 0.8 }}
                  className="block m-auto w-2 h-2 bg-white rounded-md absolute top-[80%]"
                />
              </div>
                      </Magnetic>

            );
          })}
        </div>
      </div>

      {/* Mobile Nav Toggle Button */}
              <Magnetic>

      <motion.div
        variants={scale}
        animate={!top ? "open" : "closed"}
        whileTap={{ scale: 0.8 }}
        whileHover={{
          backgroundColor: ['#455CE9', '#000000'],
          transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05
          }
        }}
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed top-0 af right-0 m-5 z-40 w-20 h-20 rounded-full bg-[#455CE9] cursor-pointer flex justify-center items-center"
      >
        <div className={`burger ${isActive ? "burgerisActive" : ""}`}></div>
      </motion.div>
        </Magnetic>

      {/* Mobile Nav Component */}
      <AnimatePresence mode="wait">
        {isActive && <MobileNav top1={top} navItems={navItems} />}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 h-[2px] bg-[#455CE9] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default Header;
