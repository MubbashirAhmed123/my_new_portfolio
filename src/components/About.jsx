import { motion } from 'framer-motion'
import { skills } from '../data/Data'

function About() {

  const aboutVar={
    initial:{
      opacity:0,
      x:-50
    },
    whileInView:{
      opacity:1,
      x:0,
      transition:{
        duration:1, delay:1, ease:'easeInOut'
      }
    }
  }

  const skillstVar={
    initial:{
      opacity:0,
      scale:0,
    },
    whileInView:{
      opacity:2,
      scale:1,
      transition:{
        duration:0.5, delay:0.5, ease:'easeInOut'
      }
    }
  }

  const progressVar={
   initial:{
    scaleX:0,
    originX:0
   },
   whileInView:{
    scaleX:1,
    transition:{
      duration:1, delay:1, ease:'easeInOut'
    }
   }
  }
  return (
      <div className='m-10 mt-44  md:flex justify-around items-center' id='about'>

      <motion.div className='' variants={aboutVar} initial='initial' whileInView="whileInView" >
      <h1 className='text-xl font-bold sm:text-2xl md:text-3xl'>ABOUT ME</h1>
      <p className='text-lg font-semibold w-full md:w-[400px]'>Hello ! I'm Mubashir Ahmed, and I'm on a journey as a student of engineering in computer science.
        currently focused on web development.</p>
      </motion.div>
        <motion.div className='mt-20' variants={skillstVar} initial='initial' whileInView='whileInView'  >
        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl mb-5'>SKILLS</h1>
       {
        skills.map((ele,index)=>{
            return(
                <div key={index} className='mb-3'>
                    <h1 className=''>{ele.skillName}</h1>
                    <motion.progress max="100" className='md:w-64'  value={ele.percentage} 
                     variants={progressVar} initial='initial' whileInView='whileInView' ></motion.progress>
                </div>
            )
        })
       }
    </motion.div>
    </div>
      
      
  )
}

export default About