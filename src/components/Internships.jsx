import { useState } from "react"
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

        if (str === 'bharat') {
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
            <motion.div className="m-5 mt-20 md:m-20" id="internship" variants={internshipsVar} initial='initial' whileInView='whileInView'>
                <div className='flex items-center mb-5 '>
                    <img src={internshiplogo} alt="education" width="50px" className='' />
                    <span className=' text-3xl m-3'>|</span>
                    <h1 className='text-xl font-bold sm:text-2xl md:text-3xl  '>INTERNSHIPS</h1>
                </div>

                <div className="m-3 p-5 ">
                    <div className="mb-5 ">
                        <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Bharat Intern</h1>
                        <h1 className="text-lg font-semibold ">July 2023 - August 2023</h1>
                        <button className="text-gray-900 hover:underline" onClick={() => handleShowCertificate('bharat')}>See Certificate</button>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Oasis Infobyte</h1>
                        <h1 className="text-lg font-semibold ">July 2023 - August 2023</h1>
                        <button className="text-gray-900 hover:underline" onClick={() => handleShowCertificate('oasis')}>See Certificate</button>
                    </div>
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