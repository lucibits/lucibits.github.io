import React from 'react'
import { useState, useEffect } from 'react'

const Footer = () => {
    // Local date
    const [date, setDate] = useState(new Date())
    const localTime = date.getHours() + ":" + date.getMinutes()

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
            }
    })

  return (
    <footer className='bg-[#161414]/95 backdrop-blur-lg'>
      <div className='px-8 sm:px-6 lg:px-40 bg-[#ebfc80] rounded-t-[4rem] lg:rounded-t-[8rem] w-full'>
        <div className='py-8 flex justify-between text-xl leading-[2.5rem]'>
          <div>
            <ul>
              <li><a href="#home" >Home</a></li>
              <li><a href="#work" >Work</a></li>
              <li><a href="#contact" >Contact</a></li>
            </ul>  
          </div>
          <div className='flex flex-col justify-between'>
            <p>© 2024 made by me</p>
            <div className='flex items-center bg-white pl-4 rounded-3xl'>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa3bf0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fa3bf0]"></span>
              </span>
              <p className='font-mono pl-2'>LONDON {localTime.toLocaleString()} </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
