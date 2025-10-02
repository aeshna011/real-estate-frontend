import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
    const [result, setResult] = useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "1b0013f4-0a9e-4516-80d6-15c98a3afc8e");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
          } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
          }
        };
        
    return (
    <div className='container mx-auto py-4 pt-20 px:6 md:px-20 lg:px-32 overflow-hidden w-full '>
        <h1 className='text-center font-bold text-2xl sm:text-4xl mb-2'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us </span></h1>
        <p  className='text-gray-500 text-center mx-auto max-w-80 mb-12'> Ready to Make a Move? Let’s Build Your Future Together</p>
      
    <form onSubmit={onSubmit} className='mx-auto text-gray-700 max-w-2xl pt-8'>
        <div className='flex flex-wrap  '>
            <div className='w-full md:w-1/2 text-left'>
                Your Name 
                <input className='w-full border border-gray-300 rounded mt-1 px-4 py-3' type='text' name='Name' placeholder='Your Name ' required/>
            </div>
            <div className='w-full md:w-1/2 text-left  md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded mt-1 px-4 py-3' type='email' name='Email' placeholder='Your Email ' required/>
            </div>
          
        </div>
        <div className='text-left my-6'>
            Message 
            <textarea className='w-full border border-gray-300 rounded mt-2 py-12 px-4 h-48 resize-none' name='Message' placeholder='Message ' required></textarea>
        </div>
        <div className="text-center">
            <button className="bg-blue-700 text-white rounded px-8 py-2 mb-10">{result ? result : "Send Message"}</button>
        </div>
    </form>

    </div>
  )
}

export default Contact