import React from 'react'
import MainCarousel from '../../HomeCarausel/MainCarousel'
import HomeSectionCarausel from '../../component/HomeSectionCarausel/HomeSectionCarausel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
           <HomeSectionCarausel/>
           <HomeSectionCarausel/>
           <HomeSectionCarausel/>
           <HomeSectionCarausel/>
           <HomeSectionCarausel/>
           <HomeSectionCarausel/>
        </div>
    </div>
  )
}

export default HomePage
