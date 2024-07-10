import React from 'react'
import Contact from './Contact'
import Skillset from './Skillset'
import Work from './Work'

const BodySections = () => {
  return (
    <div className='pb-8 md:pb-16 bg-[#161414]/95 backdrop-blur-md rounded-t-3xl 2xl:px-24'>

      <Work />
      <Skillset />
      <Contact />

    </div>
  )
}

export default BodySections
