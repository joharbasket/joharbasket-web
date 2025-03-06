"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";

// Define the type for FlipLink props
interface FlipLinkProps {
  children: string;
  href: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="p-10 h-22 w-22">
        <button 
          onClick={() => setIsOpen(true)} 
          className="p-4 bg-[#faf3e1] rounded-full shadow-lg flex items-center justify-center"
        >
          {/* Menu icon */}
          <GiHamburgerMenu className="text-[#ff4900] w-12 h-12" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-[#faf3e1] z-50 flex flex-col justify-center items-center"
          >
            <div className="absolute top-5 right-5">
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-4 bg-transparent text-white flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-125"
              >
                {/* Close icon */}
                <IoCloseCircleSharp className="text-[#ff4900] w-12 h-12" />
              </button>
            </div>

            <div className="flex flex-col items-center text-[#ff4900] text-center space-y-8">
              <FlipLink href="/">Home</FlipLink>
              <FlipLink href="/features">Groceries</FlipLink>
              <FlipLink href="/blog">Stationaries</FlipLink>
              <FlipLink href="/careers">Offers %</FlipLink>
            </div>

            <div className="absolute bottom-10">
              <button className="bg-[#ff4900] text-[#faf3e1] text-bold px-6 py-2 rounded-full text-2xl transform transition-transform duration-300 ease-in-out hover:scale-105">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
