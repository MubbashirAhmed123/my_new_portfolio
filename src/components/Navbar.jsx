import { useState } from "react"
import { HashLink as Link } from "react-router-hash-link"
import { motion, AnimatePresence } from "framer-motion"
function Navbar() {

  const [nav, setNav] = useState(false)

  const handleClick = () => {
    console.log('nav')
    setNav(!nav)
  }



  const mobileNavVar = {
    initial: { y: -'100vh', opacity: 0 }, 
    animate: { y: 0, opacity: 1,
    transition: { duration: 1, type: 'spring' },
    },
    exit: {
      opacity: 0, x: '-100vw', transition: { duration: 0.5, type: 'tween' }
    }
  }

  const nameVar={
    initial:{ y: -100, opacity: 0 },
     animate:{ y: 0, opacity: 1,
      transition:{ delay: 1, duration: 1 }
     }
  }

  return (
    <>
      <div className='sticky z-10 w top-0 '>
        <div className='h-16 p-5 flex justify-between items-center bg-gradient-to-tr from-teal-600 sm:justify-around' >

          <motion.div variants={nameVar} initial='initial' animate='animate' >
            <h1 className="font-bold  sm:text-lg md:text-xl">Mubbashir</h1>
          </motion.div>

          <motion.div className=' sm:hidden' onClick={handleClick} whileHover={{ scale: 1.5 }} >
            {!nav ? <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            }
          </motion.div>
          <ul className="hidden sm:flex  space-x-9 mx-5 ">
            <Link smooth to='#about' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 transition-all focus:font-extrabold focus:text-black" >About</Link>
            {/* <Link smooth to='#about' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 transition-all focus:font-extrabold focus:text-black">Skills</Link> */}
            <Link smooth to='#education' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 transition-all focus:font-extrabold focus:text-black">Education</Link>
            <Link smooth to='#internship' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 transition-all focus:font-extrabold focus:text-black">Internships</Link>
            <Link smooth to='#projects' className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 transition-all focus:font-extrabold focus:text-black">Projects</Link>
            <Link smooth to='#contact'  className="text-gray-900 font-bold hover:scale-110 hover:text-gray-800 transition-all focus:font-extrabold focus:text-black">Contact</Link>
          </ul>
        </div>
        <nav className='mobileNav sm:hidden' >
          <AnimatePresence>
            {
              nav && (
                <motion.ul className='fixed z-10 w-screen bg-teal-600/90'  variants={mobileNavVar} initial='initial' animate='animate'
                exit='exit'>

                  <motion.li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all">
                    <Link smooth to='#about'  >About</Link>
                  </motion.li>
                  <hr />

                  {/* <li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all "><Link smooth to='#about'  >Skills</Link>
                  </li>
                  <hr /> */}

                  <li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all "><Link smooth to='#education'  >Education</Link>
                  </li>
                  <hr />

                  <li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all "><Link smooth to='#internship'  >Internships</Link>
                  </li>
                  <hr />

                  <li className="p-5 text-lg font-bold hover:scale-105 hover:text-gray-800  transition-all "><Link smooth to='#projects'  >Projects</Link>
                  </li>
                  <hr />

                  <li className=" p-5 text-lg font-bold hover:scale-105 transition-all "><Link smooth to='#contact'  >Contact</Link></li>
                  <hr />

                </motion.ul>
              )
            }

          </AnimatePresence>

        </nav>
      </div>
    </>
  )
}

export default Navbar