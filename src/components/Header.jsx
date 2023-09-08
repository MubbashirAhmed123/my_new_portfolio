import {motion} from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link'
import myimg from '../images/myimg.jpg'

function Header() {
  const headerVar={
    initial:{
     x:-100,
     scale:0
    },
    animate:{
      x:0,
      scale:1,
      transition:{
        duration:0.5,delay:0.5,type:'tween'
      }
    }
  }

  const imgVar={
    initial:{
     opacity:0,
     x:-100
    },
    whileInView:{
      opacity:1,
      x:0,
      transition:{
        duration:1,delay:1,type:'tween'
      }
    }
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center mb-20 sm:mb-0  sm:flex-row sm:justify-evenly '>
        
        <motion.div className='mt-32 p-5 sm:p-0' variants={headerVar} initial="initial" whileInView='animate'  >
          <span>Hello</span>
          <h1 className='text-xl font-bold mt-2 mb-2  sm:text-2xl md:text-3xl lg:text-5xl' >I'm <span>MOHAMMED MUBBASHIR AHMED</span>
          </h1>
          <h2 className='font-semibold text-lg sm:text-xl md:text-2xl mb-5'>Web Designer/Developer</h2>
          <Link smooth to='#contact'  className=" border-2 border-black p-2 rounded font-bold text-lg hover:text-gray-900 transition-all">Contact</Link>
        </motion.div>

        <motion.div className="mt-10" variants={imgVar} initial="initial" whileInView='whileInView'>
           
          <img src={myimg} alt="" className='img rounded-full w-52 md:w-64 sm:mt-32'   />
        </motion.div>
      </div>
    
    </>
  )
}

export default Header
