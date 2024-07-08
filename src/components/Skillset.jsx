import React from 'react'

const Skillset = () => {
  return (
    <section className='mb-16 md:mt-16 text-black bg-white rounded-3xl mx-8 md:mx-16 2xl:mx-32 pb-24 skillset'>
        <div className='grid grid-cols-12 gap-4 px-8 md:px-24 pt-8 md:pt-16 2xl:px-24'>

          <h1 className='col-span-12 md:col-start-0 font-mono text-5xl md:text-6xl tracking-tight mb-4'>SKILLSET & TOOLS ⇣</h1>
          <div className='col-span-12 text-[1.5rem] pb-8 mb-4 border-b-[1px] border-black border-dashed'>
            <p>My educational background is pretty diverse—I've got a degree in Graphic Design & Software Development, 
              and I've collected a bunch of certifications along the way that have complemented my professional journey and enhanced my skills in these areas: </p>
          </div>
          <div className='col-start-1 col-span-12 md:col-span-3 md:col-start-0 text-[1.2rem] leading-10'>
            <p className=''>✦ Front-end Development</p>
            <p className=''>✦ UI/UX Design</p>
            <p className=''>✦ Product Design</p>
            <p className=''>✦ Design Systems</p>
            <p className=''>✦ Animation</p>
            <p className=''>✦ Testing, Proofreading</p>
          </div>
          <div className='col-start-1 col-span-12 md:col-span-3 md:col-start-4 text-[1.2rem] leading-10'>
            <p className=''>✦ User Research</p>
            <p className=''>✦ User Flows</p>
            <p className=''>✦ Wireframing</p>
            <p className=''>✦ Prototyping</p>
            <p className=''>✦ Branding & Identity</p>
            <p className=''>✦ WCAG</p>
          </div>

          <div className='col-start-1 col-span-12 md:col-span-3 md:col-start-7 text-[1.2rem] leading-10'>
            <p className=''>✦ React, Vue, Angular</p>
            <p className=''>✦ Javascript, TS</p>
            <p className=''>✦ SQL</p>
            <p className=''>✦ HTML/ CSS</p>
            <p className=''>✦ SASS / BEM</p>
            <p className=''>✦ Bootstrap / Tailwind</p>
          </div>

          <div className='col-start-1 col-span-12 md:col-span-3 md:col-start-10 text-[1.2rem] leading-10'>
            <p className=''>✦ Figma</p>
            <p className=''>✦ Adobe Suite</p>
            <p className=''>✦ Jira / TargetProcess</p>
            <p className=''>✦ Confluence</p>
            <p className=''>✦ Git / BitBucket</p>
            <p className=''>✦ Agile</p>
          </div>

          <div className='col-span-12 text-[1.5rem] pt-8 mt-4 border-t-[1px] border-black border-dashed'>
            <p>I've had the chance to dive into different worlds, from startups to big companies, working across sectors like Healthcare, Marketing Analytics, Gaming, Fashion, Social Media, SaaS, and both B2B and B2C industries.</p>
            <br/>
            <p> Working on-site and remote for local and international clients. I am fluent in both Spanish and English.</p>
          </div>
        </div>
      </section>
  )
}

export default Skillset