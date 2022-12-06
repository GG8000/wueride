import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import ProfilePic from '../public/profile_pics/Person_2.png';
import TestiCard from './testimonials_card';

export default function Testimonials() {
        return (
            <div className=' bg-primary h-auto'>
                <Carousel className='' 
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                interval={6100}>
                    <div >
                        <TestiCard/>
                    </div>
                    <div>
                        <TestiCard/>
                    </div>
                    <div>
                        <TestiCard/>
                    </div>
                </Carousel>
            </div>
            
        )
    };