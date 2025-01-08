import { useState } from "react"
import {AnimatePresence, motion} from 'framer-motion'
import {NavbarMenu} from '../../mockData/Data'
import { Link } from "react-router-dom";

const Menu1 = () => {

    const [active, setActive] = useState(false);

  return (
    <>
        <div className="px-20 ">
            <button 
            className="bg-amber-400 px-4 py-2 rounded-full text-xl "
            onClick={()=>setActive(!active)}>Menu</button>
            <motion.div
                initial={{scaleX: 0}}
                animate= {active ? {scaleX: 1} : {scaleX: 0}}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
            >
                <AnimatePresence mode="wait">
                    {active && (
                        <motion.div
                            className="bg-red-300 flex flex-col rounded-xl w-1/4 gap-2 p-3 my-2"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            {NavbarMenu.map((link)=>(
                                <Link
                                    key={link.id}
                                    to={`/${link.href}`}
                                    className="text-lg capitalize"
                                    onClick={()=>setActive(!active)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

        </div>
    </>
  )
}

export default Menu1
