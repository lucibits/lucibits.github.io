import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import imgProjMMSPlatform from '../assets/images/mb-02.jpg'
import Contact from './Contact'
import Work from './Work'
import Footer from './Footer'

const CurrentProject = () => {
  return (
    <>
      <section className=' mt-[6rem] md:mt-[6rem] 2xl:px-24'>
        <div className='grid grid-cols-12 px-8 md:px-36 pt-8 md:pt-16 pb-4 2xl:px-32'>

          <div className='grid grid-cols-subgrid col-span-12 gap-4 mb-16'>
            <h1 className='col-span-12 col-start-1 md:col-start-2 md:col-span-6 text-2xl uppercase'>
              Redesign of Meddbase Medical Management System platform.
            </h1>
            <div className='col-span-12 col-start-1 md:col-span-3 md:col-start-9'>
              <ul>
                <li>COMPETITOR ANALYSIS</li>
                <li>UI/UX PRODUCT DESIGN</li>
                <li>DEVELOPMENT</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-subgrid col-span-12 md:mb-4'>
            <div className='col-span-12 md:col-start-1 md:col-span-12 rounded-3xl'>
              <div className='rounded-2xl object-contain bg-white'>
                <img src={imgProjMMSPlatform}
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
                    Lead designer. Creation and implementation of a Design System and Style Guides for the Meddbase main platform, website, newsletters and internal tools.
                  </p>
                </div>

                <div>
                  <h1 className='text-3xl font-medium mt-2 mb-4'>Tools & Technologies</h1>
                  <ul>
                    <li>✦ Figma components</li>
                    <li>✦ Design Systems</li>
                    <li>✦ CSS</li>
                    <li>✦ XML</li>
                    <li>✦ Javascript</li>
                    <li>✦ C#</li>
                  </ul>
                  <br />
                </div>
              </div>
              <hr className='mt-8 mb-16'></hr>

              <div>
                <h1 className='text-3xl font-medium mb-4'>The Product</h1>
                <h1 className='text-xl font-medium mt-8 mb-4'>MEDDBASE</h1>
                <p>
                  Meddbase is a Saas platform that includes a full suite of healthcare management with features covering consultations, cross-organisation scheduling, patient analysis, document management, electronic referrals, pathology and reporting.
                  <br /><br />
                  The system also offers a user-friendly patient portal, automated email and SMS appointment reminders, and a built-in telemedicine platform with mobile app.
                  <br /><br />
                </p>
                <br />
              </div>


              <div>
                <h1 className='text-3xl font-medium mb-4'>My Contributions</h1>
                <h1 className='text-xl font-medium mt-8 mb-4'>DEVELOPMENT</h1>
                <p>
                  I made sure that part of my work included anticipating the needs of other teams.
                  I contributed to styling fixes and integration of new features and internal tools.

                  <br /><br />
                  <h1 className='text-xl font-medium mt-8 mb-4'>PRODUCT DESIGN</h1>
                  Conducted UX audit and competitor analysis taking into consideration business goals and produced a modern redesign and new Design System to be gradually implemented.
                  <br /><br />
                  Participated in Focus Groups.
                  <h1 className='text-xl font-medium mt-8 mb-4'>DOCUMENTATION</h1>
                  I took charge of creating a centralized Confluence 'How-to' guide, providing comprehensive instructions to enhance time management and foster team independence.
                  This initiative aimed to reduce reliance on individual support and empower team members to troubleshoot and resolve issues autonomously.
                  <br /><br />
                  <h1 className='text-xl font-medium mt-8 mb-4'>COACHING & MENTORING</h1>
                  For instance, I mentored a Graphic Designer from the Marketing team on the basics of Wordpress and conducted mentoring sessions on basic CSS knowledge for subsequent website adjustments. Additionally, I provided technical guidance to QA testers and Solution Engineers on CSS and styling.
                  <br /><br />

                  <h1 className='text-xl font-medium mt-8 mb-4'>SOCIAL</h1>
                  I also actively participated as a team member in the MeddLife culture club, where I contributed by providing fun assets for company sweepstakes and other corporate competitions and games.

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

const ProjectPage2 = () => {
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

export default ProjectPage2
