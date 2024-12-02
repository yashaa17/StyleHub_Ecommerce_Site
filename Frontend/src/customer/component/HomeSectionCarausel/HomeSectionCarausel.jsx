import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import  { useState } from 'react';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarausel = () => {
    const[activeIndex,setActiveIndex]=useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev=() => setActiveIndex(activeIndex-1);
    const slideNext=() => setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item}) => setActiveIndex(item);

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard />)

    return (
        < div className="border ">
            <div className='relative p-5 '>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    // autoPlay
                    // autoPlayInterval={1000}
                    infinite
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex !==items.length-5 &&<Button variant="contained" className="z-50 bg-white" onClick={slideNext}sx={{
                    position: 'absolute', top: "8rem",
                    right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}



                <Button variant="contained" className="z-50 bg-white" onClick={slidePrev} sx={{
                    position: 'absolute', top: "8rem",
                    left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white"
                }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>


            </div>
        </div>

    );
};

export default HomeSectionCarausel;