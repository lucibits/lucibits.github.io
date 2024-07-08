import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'
import Work from './Work'
import imgProjPatientPortal from '../assets/images/patient-portal-01.2.jpg'
import Footer from './Footer'

const CurrentProject = () => {
  return (
    <>
      <section className=' mt-[6rem] md:mt-[6rem] 2xl:px-24'>
        <div className='grid grid-cols-12 px-8 md:px-36 pt-8 md:pt-16 pb-4 2xl:px-32'>

          <div className='grid grid-cols-subgrid col-span-12 gap-4 mb-16'>
            <h1 className='col-span-12 col-start-1 md:col-start-2 md:col-span-6 text-2xl uppercase'>
              Patient & Occupational health portals.
              <br />
              Feature integration, design system design, enhancements.
            </h1>
            <div className='col-span-12 col-start-1 md:col-span-3 md:col-start-9'>
              <ul>
                <li>UI/UX PRODUCT DESIGN</li>
                <li>DEVELOPMENT</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-subgrid col-span-12 md:mb-4'>
            <div className='col-span-12 md:col-start-1 md:col-span-12 rounded-3xl'>
              <div className='rounded-2xl object-contain bg-white'>
                <img src={imgProjPatientPortal}
                  alt="Project"
                  className='rounded-2xl object-cover m-auto'
                />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-subgrid col-span-12 gap-4 mb-16 md:px-32 2xl:px-20 mt-12'>
            <div className='col-span-12 text-lg font-light leading-8'>

              <div className='grid grid-cols-subgrid gap-16'>
                <div>
                  <h1 className='text-3xl font-medium mt-8 mb-2'>My role</h1>
                  <p>
                    As a UI developer I worked on the integration of new features to the Meddbase Patient and Occupational Health portals for clients using them such as Bupa, HCAHealthcareUK, NHS, Maximus, UnitedHealthcare Global, FortiusClinic among others throughout the pandemic.
                  </p>
                </div>

                <div>
                  <h1 className='text-3xl font-medium mt-2 mb-4'>Tools & Technologies</h1>
                  <ul>
                    <li>✦ Figma components</li>
                    <li>✦ Design Systems</li>
                    <li>✦ Vue.js</li>
                    <li>✦ TypeScript</li>
                    <li>✦ Sass</li>
                    <li>✦ Swagger</li>
                  </ul>
                  <br />
                </div>
              </div>
              <hr className='mt-8 mb-16'></hr>


              <div>
                <h1 className='text-3xl font-medium mb-4'>Other contributions</h1>
                <h1 className='text-xl font-medium mt-8 mb-4'>DEVELOPMENT</h1>
                <p>
                  I also worked on bug fixing and reducing code debt as well as to enhance the existing code and refactor it for customisations such as colour scheme, feature flags, required fields and other implementations for specific client requests.
                  <br /><br />
                  This customisation allowed the operation teams to easily transform the portal to the clients needs without the need of the involvement of the development team.
                  <br /><br />
                  <h1 className='text-xl font-medium mt-8 mb-4'>PRODUCT DESIGN</h1>
                  Worked on a Design System for to unify the portals and collaborated with the Marketing team to enhance the overall product look and feel.
                  <br /><br />

                  <h1 className='text-xl font-medium mt-8 mb-4'>DOCUMENTATION</h1>
                  I also contributed to the knowledge base and How to articles (using Sharepoint) with tutorials for my teammates on these enhancements, making them more independent.
                  <br /><br />
                  <h1 className='text-xl font-medium mt-8 mb-4'>COACHING & MENTORING</h1>
                  Trained the Marketing team and Solutions Engineers for ongoing updates to the website and client portals.
                </p>
                <br />
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

const ProjectPage1 = () => {
  const scrollToWork = useRef();
  const scrollToContact = useRef();
  const navigate = useNavigate()

  return (
    <>
      <header>
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
      </header>

      <CurrentProject />

      <div className='mt-[4rem] md:mt-[4rem] pb-8 md:pb-16 bg-[#161414]/95 backdrop-blur-md rounded-t-3xl 2xl:px-24'>
        <div ref={scrollToWork} id="work" className='scroll-mt-24'>
          <Work />
        </div>
        <div ref={scrollToContact} id="contact" className='scroll-mt-24'>
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProjectPage1
