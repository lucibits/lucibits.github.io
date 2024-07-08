import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'
import Work from './Work'
import Footer from './Footer'
import imgProj1 from '../assets/images/pharmacy-portal-01.3.jpg'
import imgProj2 from '../assets/images/flows.jpg'
import imgProj3 from '../assets/images/pharmacy-portal-phase-2-wireframes.jpg'


const CurrentProject = () => {
  return (
    <>
      <section className=' mt-[6rem] md:mt-[6rem] 2xl:px-24'>
        <div className='grid grid-cols-12 px-8 md:px-36 pt-8 md:pt-16 pb-4 2xl:px-32'>

          <div className='grid grid-cols-subgrid col-span-12 gap-4 mb-16'>
            <h1 className='col-span-12 col-start-1 md:col-start-2 md:col-span-6 text-2xl uppercase'>
              Prescription & Delivery Service Portal.
              <br />
              Integration to Meddbase healthcare provider platform.
            </h1>
            <div className='col-span-12 col-start-1 md:col-span-3 md:col-start-9'>
              <ul>
                <li>CASE STUDY </li>
                <li>UI/UX PRODUCT DESIGN</li>
                <li>DEVELOPMENT</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-subgrid col-span-12 md:mb-4'>
            <div className='col-span-12 md:col-start-1 md:col-span-12 rounded-3xl'>
              <div className='rounded-2xl object-contain bg-white'>
                <img src={imgProj1}
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
                  <h1 className='text-3xl font-medium mt-8 mb-4'>My role</h1>
                  <p>UI/UX Product Designer & Front-end Developer (Portal and selected views on the main platform).</p>
                  <br />
                  <p>Collaborating with stakeholders and the operations department as well as integral end-to-end product lifecycle process, including competitor research, flow diagrams, personas, wireframing, prototyping, design & development. </p>
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
                <h1 className='text-3xl font-medium mb-4'>The Project</h1>
                <p>This project, though simple, was extensive and involved careful considerations for integration with the main healthcare provider platform, third parties, and the creation of a new portal for different personas. Therefore, it was divided into two phases:</p>
                <ul className='my-8 sm:mx-16 leading-20'>
                  <li className='mb-4'><span className='font-medium'>PHASE 1 - Pilot</span> <br /> Portal creation with dashboard and dispensing functionalities, e-prescription generation, integration with the Meddbase platform</li>
                  <li><span className='font-medium'>PHASE 2 - Delivery/Pick-Up</span> <br /> Portal delivery and pick up landing pages for different user journeys and personas, Integration with third-party services</li>
                </ul>
                <p>The project spanned approximately six months from the initial kick-off to the pilot presentation, and 2 month for Phase 2 implementation.</p>
                <br />
              </div>

              <div>

                <h1 className='text-xl font-medium mb-2 mt-8'>FLOW DIAGRAMS</h1>
                <p>
                  These flows explored different journeys of the prescription process from the main platform and portal.
                  <br /><br />
                  I created 3 main flow diagrams for the portal and main platform, taking into consideration the different user journeys of the 3 main users: clinitians, pharmacies and patients, and ensuring seamless integration with Meddbase software and patient databases.
                  <br /><br /></p>

                <div className='rounded-2xl object-contain bg-white my-8'>
                  <img src={imgProj2}
                    alt="Project"
                    className='rounded-2xl object-cover m-auto'
                  />
                </div>
                <br />
                <p>Additionally, I designed and implemented e-prescription PDFs adhering to NHS standards and facilitated PDF generation for all parties involved.</p>
                <br />
                <h1 className='text-xl font-medium mt-8 mb-4'>WIREFRAMES</h1>
                <p>Using Figma, I conducted wireframing and prototyping, creating reusable components for efficient development. The portal was developed in Vue.js, TypeScript, and Sass, following BEM naming conventions. I also contributed to the design of the API using Swagger.
                  My work encompassed various aspects of the project lifecycle, including research, planning, competitor analysis, and persona development.
                  The product was designed to be responsive and compliant with WCAG accessibility guidelines. Notably, I spearheaded the implementation of a well-received dark mode feature, a first for any Meddbase product.</p>
                <p>
                  The MVP was launched within six months, and Phase 2 commenced shortly after, focusing on refining the flow diagrams, prototyping landing pages for e-prescription visualization, and enhancing the delivery service process. This phase also involved implementing features such as authorized pharmacy selection and pick-up options.
                </p>
                <div className='rounded-2xl object-contain bg-white my-8'>
                  <img src={imgProj3}
                    alt="Project"
                    className='rounded-2xl object-cover m-auto'
                  />
                </div>
                <br />
              </div>
              <div>
                <h1 className='text-xl font-medium mb-2'>OUTCOMES & PROJECT IMPACT</h1>
                <p>
                  This new feature integration has significantly improved the workflow for clinics using the platform, evidenced by great acceptance and increased user satisfaction, which generated additional annual revenue for the company. This product also facilitated partnerships with private pharmacies and B2B businesses, providing a much-needed delivery option during the pandemic and onwards, as evidenced by the increase in new licenses.</p>
                <br />
              </div>
              <hr className='mt-8 mb-16'></hr>
              <div>
                <h1 className='text-3xl font-medium mt-8 mb-4'>Key Learnings and Conclusion</h1>
                <p>
                  I found working on this product to be incredibly rewarding. It allowed me to fully immerse myself in various aspects of the design, development, and product management process.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

const ProjectPage = () => {
  const scrollToWork = useRef();
  const scrollToSkillset = useRef();
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

export default ProjectPage
