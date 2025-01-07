import React, { useState } from 'react'
import {NavbarMenu} from '../../mockData/Data'
import {CiSearch} from 'react-icons/ci';
import {FaDumbbell} from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import {PiShoppingCartThin } from 'react-icons/pi';
import {motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({open}) =>{
    return (
        <AnimatePresence mode='wait '>
            {
                open && (
                    <motion.div
                        initial= {{opacity: 0, y: -100}}
                        animate = {{opacity: 1, y: 0}}
                        exit= {{opacity: 0, y: -100}}
                        transition= {{duration: 0.3}}
                        className='absolute top-20 left-0 w-full h-screen z-20'
                     >
                        <div className='text-xl font-semibold uppercase bg-red-500 text-white py-10 m-6 rounded-3xl'>
                            <ul className='flex flex-col justify-center items-center gap-10 '>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                     </motion.div>
                )
            }
        </AnimatePresence>
    )
}

const Navbar1 = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
    <nav className='bg-fuchsia-200' >
        <div className="px-8 py-4 flex justify-between items-center">
            {/* Logo Section  */}
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <FaDumbbell/>
                <p>Coders</p>
                <p className='text-red-500'>Gym</p>
            </div>

            {/* Menu Section */}
                <div className='hidden md:block '>
                    <ul className='flex items-center gap-6 text-gray-600 '>
                        {
                            NavbarMenu.map((item) =>{
                                return (
                                    <li key={item.id}>
                                        <a href={item.link} className='inline-block py-1 px-3 hover:text-red-500 font-semibold '>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            {/* Icons Section */}
            <div className='flex items-center gap-4 '>
                <button className="text-2xl hover:bg-red-500 hover:text-white rounded-full p-2 duration-200 ">
                    <CiSearch />
                </button>
                <button className="text-2xl hover:bg-red-500 hover:text-white rounded-full p-2 duration-200 ">
                    <PiShoppingCartThin />
                </button>
                <button className='hover:bg-red-500 font-semibold text-red-500 hover:text-white border-black px-6 py-2 duration-200 hidden md:block '>
                    Login
                </button>
            </div>

            {/* Mobile Hamburger Menu Section  */}
            <div className='md:hidden ' onClick={() => setOpen(!open)}>
                <MdMenu className='text-4xl' />
            </div>
        </div>
    </nav>

    {/* Mobile Sidebar Section */}
    <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar1
