import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'
import whatsapp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

function Footer() {
  const [spinner,setSpinner]=useState(false)
  const [form,setForm]=useState({
    from_name:'',
    email:'',
    message:''
  })

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const sendEmail=(e)=>{
    e.preventDefault()
    setSpinner(true)
   
    emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID,process.env.REACT_APP_EMAIL_TEMPLATE_ID,form,process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    .then((res)=>{
      toast.success('Email Sent Successfully!')
      setSpinner(false)
      setForm({from_name:'',email:'',message:''})
    }).catch((err)=>{
      toast.error('Some Error Occurred!')
      setSpinner(false)
      setForm({from_name:'',email:'',message:''})

    })

  }
  return (
    <>
     
    <ToastContainer/>
      <footer className='bg-gray-800' id='contact'>
        <div className='sm:flex justify-around'>
          <div className='m-5 py-5'>
            <h1 className='text-xl font-bold text-white'>Mohammed Mubbashir Ahmed</h1>
            <div className='flex space-x-10 mt-10'>
              <a href="https://wa.me/7619562002?text= Hello ! Mubbashir Ahmed I'd like to chat">
                <img src={whatsapp} alt="whatsapp" className='h-8 hover:scale-110 transition-all' />
              </a>
              <a href="https://www.instagram.com/_mubbashir_ahmed_/"><img src={instagram} alt="instagram" className='h-8 hover:scale-110 transition-all' />
              </a>
              <a href="https://github.com/MubbashirAhmed123/"><img src={github} alt="github" className='h-8 hover:scale-110 transition-all' />
              </a>

            </div>

          </div>
          <div>
            <form className='p-3 text-white' onSubmit={sendEmail}>
              <input type="text" name="from_name" id="from_name" value={form.from_name} className='w-64 outline-none p-2 bg-transparent  border-b-2 border-black rounded mb-3  focus:border-b-2 focus:border-white/70 ' placeholder='name' required onChange={handleChange}  />
              <br />
              <input type="email" name="email" id="email" value={form.email} className='w-64 outline-none p-2 bg-transparent  border-b-2 border-black rounded mb-3  focus:border-b-2 focus:border-white/70' placeholder='email' required onChange={handleChange} />
              <br />
              <textarea name="message" id="message" value={form.message} cols="30" rows="5" className='outline-none p-2 bg-transparent  border-2 border-black rounded mb-3 focus:border-white' placeholder='message..' required onChange={handleChange}></textarea>
              <br />
              <div>
                {
                  spinner?<svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>:<button id='emailBtn' className='bg-transparent border-2 border-white p-2 rounded-md text-white font-bold cursor-pointer hover:bg-gray-700 hover:text-black transition-all focus:border-blue-700'>Send Email</button>
                }
              
              </div>
              
            </form>
          </div>
        </div>
        <p className='text-white font-bold text-center'>&copy; Copyright 2023</p>
      </footer>
    </>
  )
}

export default Footer