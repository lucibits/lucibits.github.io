import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import imgProjMeddbaseScheduler from '../assets/images/schedule-04.jpg'
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
              Redesign of the Clinician's Scheduler for Meddbase healthcare management platform.
            </h1>
            <div className='col-span-12 col-start-1 md:col-span-3 md:col-start-9'>
              <ul>
                <li>CASE STUDY</li>
                <li>UI/UX PRODUCT DESIGN</li>
                <li>DEVELOPMENT</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-subgrid col-span-12 md:mb-4'>
            <div className='col-span-12 md:col-start-1 md:col-span-12 rounded-3xl'>
              <div className='rounded-2xl object-contain bg-white'>
                <img src={imgProjMeddbaseScheduler}
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
                    I worked as UI/UX front-end developer on the redesign of the clinicians diary and minute slots scheduler tool on the Meddbase Software.
                  </p>
                </div>

                <div>
                  <h1 className='text-3xl font-medium mt-2 mb-4'>Tools & Technologies</h1>
                  <ul>
                    <li>✦ Figma</li>
                    <li>✦ Design Systems</li>
                    <li>✦ AngularJs</li>
                    <li>✦ TypeScript</li>
                    <li>✦ Sass</li>
                  </ul>
                  <br />
                </div>
              </div>
              <hr className='mt-8 mb-16'></hr>


              <div>
                <h1 className='text-3xl font-medium mb-4'>Meddbase</h1>
                <h1 className='text-xl font-medium mt-8 mb-4'>THE SCHEDULER</h1>
                <p>
                  On the clinicians diary you can identify the status for each appointment and see the details for each appointment including: the scheduled start time and end time, the patient name and the appointment type.
                  <br /><br />
                  The calendar display can be adjusted to the clinicians and clinic worload and print a diary for the clinicians day sheet session.
                  <br /><br />
                  The ‘Side by side Scheduler’ view gives you an instant representation of the clinic’s workload. This view can be customised to adjust which day and the range of days being shown, as with the diary, you can also print the clinic schedule for the day, week or month.

                  <br /><br />
                  <h1 className='text-xl font-medium mt-8 mb-4'>THE PLATFORM</h1>
                  Meddbase is a B2B software that includes a full suite of healthcare management with features covering consultations, cross-organisation scheduling, patient analysis, document management, electronic referrals, pathology and reporting. The system also offers a user-friendly patient portal, automated email and SMS appointment reminders, and a built-in telemedicine platform with mobile app.
                  <br /><br />
                  <h1 className='text-xl font-medium mt-8 mb-4'>OTHER CONTRIBUTIONS TO THE PLATFORM</h1>
                  Among the challenges, I also worked on other views of the Meddbase software application, providing back-end developers with prototypes and CSS code for the styling of new and revamped components

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

const ProjectPage4 = () => {
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

export default ProjectPage4
