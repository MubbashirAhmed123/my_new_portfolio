import { useState } from "react"
import { internships } from "../data/Data"
import { motion } from "framer-motion"
import internshiplogo from '../images/internship.png'
import certificate1 from '../images/certificate1.jpg'
import certificate2 from '../images/certificate2.jpg'

function Internships() {
    const [certificate, setCertificate] = useState(false)
    const [showCertificate, setShowCertificate] = useState('')
    const internshipsVar = {
        initial: {
            y: 100,
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1, delay: 1, ease: 'easeIn'
            }
        }

    }

    const certificateVar={
        initial:{
            x:-40,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,delay:1,type:'spring'
            }
        }
        
    }

    const handleShowCertificate = (str) => {

        if (str === 'Bharat Intern') {
            setCertificate(true)
            setShowCertificate('bharat')
        } else {
            setCertificate(true)
            setShowCertificate('oasis')

        }
    }

    const close=()=>{
        setCertificate(false)

    }
    return (
        <>
            <motion.div className="m-5 mt-20 sm:px-5 md:m-20" id="internship" variants={internshipsVar} initial='initial' whileInView='whileInView'>
                <div className='flex items-center mb-5 '>
                    <img src={internshiplogo} alt="education" width="50px" className='' />
                    <span className=' text-3xl m-3'>|</span>
                    <h1 className='text-xl font-bold sm:text-2xl md:text-3xl  '>INTERNSHIPS</h1>
                </div>

                <div className='mb-3 px-3 py-5'>
                    {
                        internships.map((internship,index) => {
                            return (
                                <div key={index} className="mb-5">
                                    <p className="mb-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{internship.internName}</p>
                                    <p className=' sm:text-xl md:text-2xl lg:text=3xl'>{internship.date}</p>
                                    <button className="text-gray-900 hover:underline" onClick={()=>handleShowCertificate(internship.internName)} >See Certificate</button>
                                </div>
                            )
                        })
                    }


                </div>

                {
                    
                        certificate &&
                        
                        <motion.div className="relative " variants={certificateVar} initial='initial' animate='animate' >
                           <img src={showCertificate==='bharat'? certificate2 : certificate1} alt="bharat" className=""  />
                           <button className="absolute top-0 right-0 text-3xl p-2 font-bold bg-white text-black " onClick={close}>X</button>
                        </motion.div>
                       
                }

            </motion.div>
        </>

    )
}

export default Internships