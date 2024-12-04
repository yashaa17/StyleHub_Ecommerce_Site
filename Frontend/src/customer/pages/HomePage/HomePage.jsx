import React from 'react'
import MainCarousel from '../../HomeCarausel/MainCarousel'
import HomeSectionCarausel from '../../component/HomeSectionCarausel/HomeSectionCarausel'
import {mens_kurta} from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Shoes"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Shirt"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Women's Saree"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage
