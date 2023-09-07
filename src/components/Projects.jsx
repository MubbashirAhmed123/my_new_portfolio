import {motion} from 'framer-motion'
import { projects } from "../data/Data"

function Projects() {
    const projectsVar={
        initial:{
        x:-100,
        opacity:0,
        },
        
        whileInView:{
            x:0,
            opacity:1,
            transition:{
                duration:0.6,delay:0.6,ease:'linear'
            }
        }
    }
  return (
    
        <motion.div id='projects' className='m-10 mt-20 md:m-20 ' variants={projectsVar} initial='initial' whileInView='whileInView' >
            <h1 className='text-xl font-bold sm:text-2xl md:text-3xl'>MY RECENT PROJECTS</h1>
            <div className='md:grid grid-cols-2 gap-32 justify-items-center lg:grid-cols-3 lg:gap-16  '>

                {
                    projects.map((project,index)=>{
                        return(
                            <div key={index} className="bg-gray-300 p-3 mt-3  rounded-md shadow-md shadow-black hover:opacity-90 transition-all sm:w-[400px] md:w-[350px] lg:w-[320px]"> 
                            <div className="">
                                <img className="mx-auto" src={project.projectImg} alt="p1" width="200px" />
                                <h3 className="text-lg font-bold text-center m-3">{project.projectTitle}</h3>
                            </div>
                            <p className=" ">
                                {project.projectDesc}
                            </p>
                        </div>
                        )
                    })
                }
                
            </div>

        </motion.div>
  )
}

export default Projects