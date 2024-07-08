import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const scrollToWork = useRef();
  const scrollToContact = useRef();

  return (
    <nav className="fixed top-0 z-10 w-full backdrop-blur-md bg-white/30 border-b-[1px] border-[#161414] border-dashed">
      <div className="px-2 sm:px-6 lg:px-8 2xl:px-56">
        <div className="flex h-[6rem] items-center justify-between ">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start ">

            <button className="flex flex-shrink-0 items-center mr-4"
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: 'smooth'
                })
                navigate("/", { replace: true })
              }}
            >
              <span className="text-lg ml-2 font-mono hidden md:block">Lucy Frutos</span>
              <span className="text-lg ml-2 font-mono block md:hidden">Lucy</span>
            </button>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <button
                  ref={scrollToWork} id="work" onClick={() => {
                    scrollToWork.current.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                  className="text-[1rem] tracking-wider bg-white border-[1px] border-[#161414] rounded-full px-4 py-2 hover:bg-[#ebfc80] hover:text-[#161414] hover:shadow-lg transition-all"
                >WORK</button>
                <button
                  ref={scrollToContact} id="contact" onClick={() => {
                    scrollToContact.current.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                  className="text-[1rem] tracking-wider border-[1px] border-[#161414] text-white bg-[#161414] rounded-full px-4 py-2 hover:bg-[#ebfc80] hover:text-[#161414] hover:shadow-md transition-all"
                >CONTACT</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar