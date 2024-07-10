import React from 'react'

const Hero = ({ text }) => {
  return (
    <section className="fixed top-0 z-[-10] w-full mt-28 mb-4 md:mb-8 md:mt-44">
      <div className="px-4 sm:px-6 lg:px-8 2xl:px-56" >
        <div className="flex w-full rounded-3xl min-h-[300px] items-center ">
          <div className=' w-full'>
            <h1 className="text-[#161414] font-mono font-bold text-[8rem] md:text-[10rem] leading-[10rem]">
              HOLA, <br />I'M LUCY
            </h1>
            <h1 className="text-[2rem] font-extralight mt-8">
              Front-end Developer + UI/UX Product Designer based in London.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero