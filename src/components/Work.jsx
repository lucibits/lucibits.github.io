import React from 'react'
import { useNavigate } from 'react-router-dom'
import imgProjCyclescheme from '../assets/images/cyclescheme-01.2.jpg'
import imgProjPatientPortal from '../assets/images/patient-portal-01.2.jpg'
import imgProjPatientPortalPathways from '../assets/images/patient-portal-pathways-01.jpg'
import imgProjMeddbaseScheduler from '../assets/images/schedule-04.jpg'
import imgProjMMSPlatform from '../assets/images/mb-02.jpg'
import imgProjUplifter from '../assets/images/uplifter-02.jpg'
import imgProjPharmacyPortal from '../assets/images/pharmacy-portal-01.3.jpg'


const SelectedWork = () => {
  const navigate = useNavigate()
  return (
    <>

      <h1 className='col-span-12 md:col-start-0 font-mono text-5xl md:text-6xl tracking-tight mb-4'>SELECTED WORK ⇣</h1>

      <div className='grid grid-cols-subgrid col-span-12 md:mb-4'
        onClick={() => {
          navigate("/project/0")
        }}
      >
        {/* Card container */}
        <div className='col-span-12 md:col-start-1 md:col-span-12 p-4 border-[1px] border-[#ebfc80] border-dashed hover:bg-white hover:text-black rounded-3xl transition-all cursor-pointer'>
          {/* Img container */}
          <div className='rounded-2xl object-contain bg-white'>
            {/* <img src="https:www.apple.com/uk/homepod-mini/images/overview/sound_connectivity__chzmwsudor0i_medium_2x.jpg" alt="Project Image" className='rounded-2xl object-cover m-auto' /> */}
            <img src={imgProjPharmacyPortal}
              alt="Project"
              className='rounded-2xl object-cover m-auto'
            />
          </div>
          {/* Text container */}
          <div className='py-4 md:flex md:justify-between md:items-end'>
            <h1 className='font-mono text-xl'>Prescription Delivery Service</h1>
            <span className='tracking-wider font-light'>CASE STUDY · PRODUCT DESIGN · FRONT-END DEVELOPMENT</span>
            {/* <button>⇢</button> */}
            {/* <span className=' tracking-wider bg-yellow-300 text-black px-2 rounded-3xl text-sm'>CASE STUDY · PRODUCT DESIGN · FRONT-END DEVELOPMENT</span> */}

          </div>
        </div>
      </div>
    </>
  )
}

const IndividualProject = ({ projId, title, description, imageSrc }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate("/project/" + projId)
      }}
      className='grid grid-cols-subgrid col-span-12 border-[1px] border-[#ebfc80] rounded-3xl border-dashed items-center hover:bg-white hover:text-black transition-all cursor-pointer'>
      <div className='md:col-start-0 col-span-12 md:col-span-2 p-4 rounded-3xl transition-all'>
        <div className='rounded-2xl object-contain '>
          <img src={imageSrc}
            alt="Project"
            className='rounded-2xl max-h-40 w-full md:h-40 md:w-80 object-cover'
          />
        </div>
      </div>
      <div className='px-4 pb-4 md:col-start-3 col-span-12 md:col-span-10'>
        <h1 className='font-mono text-xl mb-2'>{title}</h1>
        <span className='tracking-wider font-light'>{description}</span>
      </div>
    </div>
  )
}

const AllWork = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
  return (
    <>

      <h1 className='col-span-12 md:col-start-0 font-mono text-5xl md:text-6xl tracking-tight mb-4 mt-16'>ALL WORK ⇣</h1>

      <div className='grid grid-cols-12 col-span-12 gap-y-4 mb-16'>

        <IndividualProject
          projId='1'
          title='Patient & Occupational Health Portals'
          description='PRODUCT DESIGN · FRONT-END DEVELOPMENT'
          imageSrc={imgProjPatientPortal}
        />
        <IndividualProject
          projId='2'
          title='MMS Healthcare SaaS platform'
          description='PRODUCT DESIGN · FRONT-END DEVELOPMENT'
          imageSrc={imgProjMMSPlatform}
        />
        <IndividualProject
          projId='3'
          title='Cyclescheme platform'
          description='CASE STUDY · PRODUCT DESIGN · FRONT-END DEVELOPMENT'
          imageSrc={imgProjCyclescheme}
        />
        <IndividualProject
          projId='4'
          title='Meddbase Clinician Scheduler'
          description='CASE STUDY · PRODUCT DESIGN · FRONT-END DEVELOPMENT'
          imageSrc={imgProjMeddbaseScheduler}
        />
        <IndividualProject
          projId='5'
          title='Patient Portal & Occupational Health Patways'
          description='RESEARCH · PRODUCT DESIGN · FRONT-END DEVELOPMENT'
          imageSrc={imgProjPatientPortalPathways}
        />
        <IndividualProject
          projId='6'
          title='Uplifter AI-Powered Marketing Platform'
          description='RESEARCH · PRODUCT DESIGN · FRONT-END DEVELOPMENT'
          imageSrc={imgProjUplifter}
        />
      </div>
    </>
  )
}

const Work = () => {
  return (
    <section className='mb-4 text-[#e9fb71]'>

      <div className='grid grid-cols-12 px-8 md:px-40 pt-8 md:pt-16 pb-4 2xl:px-56'>

        <SelectedWork />
        <AllWork />

      </div>
    </section>
  )
}

export default Work