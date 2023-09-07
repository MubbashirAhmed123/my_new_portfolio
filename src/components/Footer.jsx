import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'
import whatsapp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

function Footer() {

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
    emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID,process.env.REACT_APP_EMAIL_TEMPLATE_ID,form,process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    .then((res)=>{
      toast.success('Email Sent Successfully!')
      setForm({from_name:'',email:'',message:''})
    }).catch((err)=>{
      toast.error('Some Error Occurred!')
      setForm({from_name:'',email:'',message:''})

    })
    console.log(form)

  }
  return (
    <>
    <ToastContainer/>
      <footer className='bg-gray-800'>
        <div className='sm:flex justify-between'>
          <div className='m-5 py-5'>
            <h1 className='text-xl font-bold text-white'>Mohammed Mubbashir Ahmed</h1>
            <div className='flex space-x-10 mt-10'>
              <a href="https://wa.me/7619562002?text= Hello ! Mubbashir Ahmed I'd like to chat">
                <img src={whatsapp} alt="whatsapp" className='h-12' />
              </a>
              <a href="https://www.instagram.com/_mubbashir_ahmed_/"><img src={instagram} alt="instagram" className='h-12' />
              </a>
              <a href="https://github.com/MubbashirAhmed123/"><img src={github} alt="github" className='h-12' />
              </a>

            </div>

          </div>
          <div>
            <form className='p-5 text-white' onSubmit={sendEmail}>
              <input type="text" name="from_name" id="from_name" value={form.from_name} className='w-64 outline-none p-2 bg-transparent  border-b-2 border-black rounded mb-3  focus:border-b-2 focus:border-white/70 ' placeholder='name' required onChange={handleChange}  />
              <br />
              <input type="email" name="email" id="email" value={form.email} className='w-64 outline-none p-2 bg-transparent  border-b-2 border-black rounded mb-3  focus:border-b-2 focus:border-white/70' placeholder='email' required onChange={handleChange} />
              <br />
              <textarea name="message" id="message" value={form.message} cols="30" rows="5" className='outline-none p-2 bg-transparent  border-2 border-black rounded mb-3 focus:border-white' placeholder='message..' required onChange={handleChange}></textarea>
              <br />
              <input type="submit" name="submit" id="" value='Submit' className='bg-transparent border-2 border-white p-2 rounded-md text-white font-bold cursor-pointer hover:bg-gray-700 hover:text-black transition-all focus:border-blue-700' />
            </form>
          </div>
        </div>
        <p className='text-white font-bold text-center'>&copy; Copy Rights 2023</p>
      </footer>
    </>
  )
}

export default Footer