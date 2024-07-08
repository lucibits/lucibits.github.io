import React from 'react'

const Contact = () => {
  return (
    <section className='grid grid-cols-12 gap-4 md:mx-40 py-8 md:py-24 px-8 my-8 md:px-0 text-white transition-all 2xl:px-16'>
      <h1 className='col-span-12 font-mono text-6xl tracking-normal mb-4 text-[#e9fb71]'>CONTACT ⇣ </h1>

      <div className='grid grid-cols-subgrid col-span-12 gap-x-8'>
        <div className='col-span-12 lg:col-span-6 md:col-start-1 text-xl font-light leading-10'>
          <p className='text-2xl pt-4'>Now that you are here, say hi! </p>
          <p className='text-2xl pb-2'>Contact me if:</p>
          <p><span className='text-[#e9fb71] pr-4 text-2xl'>☻</span>  you have an open position, </p>
          <p><span className='text-[#e9fb71] pr-4 text-2xl'>☻</span>  a project you want to talk about, </p>
          <p><span className='text-[#e9fb71] pr-4 text-2xl'>☻</span>  you want to network, </p>
          <p><span className='text-[#e9fb71] pr-4 text-2xl'>☻</span>  or you have a relevant question.</p>
        </div>

        <div className='py-4 md:py-0 md:px-4 col-span-12 lg:col-span-6 justify-stretch'>
          <div className='py-4 border-b-[1px] border-white border-dashed hover:translate-x-8 transition-all'>
            <a href='mailto:lucivfr@gmail.com' className='flex justify-between hover:text-[#e9fb71] text-[2rem] font-mono '>
              <span>⇢</span> EMAIL
            </a>
          </div>
          <div className='py-4 border-b-[1px] border-white border-dashed hover:translate-x-8 transition-all'>
            <a href='https://www.linkedin.com/in/lucyvfr/' className='flex justify-between hover:text-[#e9fb71] text-[2rem] font-mono'>
              <span>⇢</span> LINKEDIN
            </a>
          </div>
          <div className='py-4 border-b-[1px] border-white border-dashed hover:translate-x-8 transition-all'>
            <a href='https://www.linkedin.com/in/lucyvfr/' className='flex justify-between hover:text-[#e9fb71] text-[2rem] font-mono'>
              <span>⇢</span> GITHUB
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact