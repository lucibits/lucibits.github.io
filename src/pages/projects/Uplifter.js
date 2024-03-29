import React from 'react-dom'
import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Uplifter = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <section>
            <div className='pt-4 md:py-16 pb-10 px-4 md:px-32 border-b-[1px] dark:bg-[#033F2E] dark:text-slate-300 dark:border-0'>

                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.10
                    }}
                    className='pt-6 md:px-44'>
                    <h1 className='text-4xl font-serif py-2'>Uplifter AI-Powered Marketing Solutions for Business Growth</h1>
                </motion.div>
                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.25
                    }}
                    className='pb-6 md:px-44'>
                    <p className='text-lg py-2'>I worked as the lead UI/UX front-end developer for Uplifter Marketing analytics platform.</p>
                    <p className='mt-4 text-lg font-mono dark:text-slate-300'><strong className='text-[#FF6057]'>#</strong> Python, Adobe XD, CSS, JavaScript, Responsive. </p>

                </motion.div>

                <motion.div 
                    variants={{
                        hidden: {opacity:0, y: 75},
                        visible: {opacity:1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5, delay: 0.35
                    }}
                    className='py-2 md:px-44'>
                    <img src={require("../../assets/uplifter-02.jpg" )}
                                alt="Project" 
                                className=' w-full object-cover rounded-md'
                                />
                <p className='text-base py-2 text-slate-700 dark:text-slate-300'>🔒 More on request.  
                        <Link to="/about" className='underline decoration-indigo-500 font-bold ml-2'>Let's talk.</Link>
                    </p>   
                </motion.div>
                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-bold font-mono py-2'>About the platform</h1>
                    <p className='text-lg py-2'>The Uplifter tool is an all-in-one marketing analytics platform to facilitate the creation of uniform UTMs URL parameters, find insights and crunch marketing data, making the campaign tracking more simple and efficient for agencies, analysts and marketers.</p>
                </div>

                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-mono font-bold py-2'>A modern and user friendly take</h1>
                    <p className='text-lg py-2'>I partnered with a Project Manager and a Back-end developer to implement a refreshed, modern and most importantly user friendly and responsive new look for this software. 
                    I was involved in the creation of the onboarding funnel compacting it in 3 easy steps that helped client on-boarding. 
                    I was also involved in the revamp of the data visualisation views which helped to customer retention.</p>
                    <p className='text-lg py-2'>As well as on the main software I also worked on the revamp and development of HTML5 emails layouts for SendGrid. Creation of in-brand assets for the marketing team and print.</p>
                </div>

                <div className='py-6 md:px-44'>
                    <h1 className='text-2xl font-mono font-bold py-2'>Other contributions</h1>
                    <p className='text-lg py-2'>Part of my work was to anticipate the needs of new team members, in this case I mentored an intern on UI/UX and the creation of assets in Adobe XD.</p>
                    <p className='text-lg py-2'>As a team, travelled to Toronto, Canada to participate in  
                    <span>
                        <a href='https://collisionconf.com/' target='_blank' className='underline decoration-indigo-500 font-bold ml-2'>Collision</a>
                    </span>
                    .
                    I then travelled to Madrid, Spain to attend 
                    <span>
                        <a href='https://www.measurecamp.org/' target='_blank' className='underline decoration-indigo-500 font-bold ml-2'>Measure Camp</a>
                    </span>
                    .</p>
                </div>
                </div>
                <Footer />
        </section>
    )
}

export default Uplifter