import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import imgProjUplifter from '../assets/images/uplifter-02.jpg'
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
              Uplifter AI-Powered Marketing Solutions for Business Growth
            </h1>
            <div className='col-span-12 col-start-1 md:col-span-3 md:col-start-9'>
              <ul>
                <li>RESEARCH</li>
                <li>UI/UX PRODUCT DESIGN</li>
                <li>DEVELOPMENT</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-subgrid col-span-12 md:mb-4'>

            <div className='col-span-12 md:col-start-1 md:col-span-12 rounded-3xl'>

              <div className='rounded-2xl object-contain bg-white'>
                <img src={imgProjUplifter}
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
                    I worked as the lead UI/UX front-end developer for Uplifter Marketing analytics platform.
                  </p>
                </div>

                <div>
                  <h1 className='text-3xl font-medium mt-2 mb-4'>Tools & Technologies</h1>
                  <ul>
                    <li>✦ Adobe XD</li>
                    <li>✦ Design Systems</li>
                    <li>✦ AngularJs</li>
                    <li>✦ Python</li>
                    <li>✦ Bootstrap</li>
                    <li>✦ Sendgrid</li>
                    <li>✦ Tableau</li>
                  </ul>
                  <br />
                </div>
              </div>
              <hr className='mt-8 mb-16'></hr>


              <div>
                <h1 className='text-3xl font-medium mb-4'>About the product</h1>
                <h1 className='text-xl font-medium mt-8 mb-4'>UPLIFTER</h1>
                <p>
                  The Uplifter tool is an all-in-one marketing analytics platform to facilitate the creation of uniform UTMs URL parameters, find insights and crunch marketing data, making the campaign tracking more simple and efficient for agencies, analysts and marketers.
                </p>

                <h1 className='text-xl font-medium mt-8 mb-4'>MY CONTRIBUTIONS</h1>
                <p>I partnered with a Project Manager and a Back-end developer to implement a refreshed, modern and user friendly and responsive new look for this software.
                </p>
                <br />
                <p>I was involved in the creation of the onboarding funnel compacting it in 3 easy steps that helped client on-boarding. I was also involved in the revamp of the data visualisation views which helped to customer retention.
                </p>

                <h1 className='text-xl font-medium mt-8 mb-4'>OTHER CONTRIBUTIONS</h1>
                <p>
                  As well as on the main software I also worked on the REDESIGN and development of HTML5 emails layouts for SendGrid. Creation of in-brand assets for the marketing team and print.
                </p>
                <br />
                <p>
                  Part of my work was to anticipate the needs of new team members, in this case I mentored an intern on UI/UX and the creation of assets in Adobe XD.

                  As a team, travelled to Toronto, Canada to participate inCollision. I then travelled to Madrid, Spain to attendMeasure Camp.
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

const ProjectPage6 = () => {
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

export default ProjectPage6
