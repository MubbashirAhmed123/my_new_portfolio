import {motion} from 'framer-motion'
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
        duration:0.5,delay:0.5,type:'tween'
      }
    }
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center mb-20 sm:mb-0  sm:flex-row sm:justify-evenly '>
        <motion.div className='mt-32' variants={headerVar} initial="initial" whileInView='animate'  >
          <span>Hello</span>
          <h1 className='text-xl font-bold mt-2 mb-2 sm:text-2xl md:text-3xl lg:text-5xl' >I'm <span>MUBBASHIR AHMED</span>
          </h1>
          <h2 className='font-semibold text-lg sm:text-xl md:text-2xl'>Web Designer/Developer</h2>
          <button className="mt-5 bg-gray-400 rounded-md p-2 font-bold">Contact Me</button>
        </motion.div>
        <motion.div className="mt-10" variants={imgVar} initial="initial" whileInView='whileInView'>
           
          <img src={myimg} alt="" className='img rounded-full w-52 md:w-64 sm:mt-32'   />
        </motion.div>
      </div>
    
    </>
  )
}

export default Header
