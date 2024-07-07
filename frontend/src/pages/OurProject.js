import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function OurProject() {
    return (
        <div>          
            <section className="text-white py-20">
                <div className="container mx-auto">
                    <h1 className="text-4xl mb-10">OUR PROJECT</h1>
                </div>
                <div className='flex justify-center'>
                    <Carousel showThumbs={false} autoPlay infiniteLoop className='w-3/6'>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpPX-8ao3Ib23I_N8jGhY-Y502APj2PEEWQ&s" alt="Project 1" />
                            </div>
                            <div>
                            <img src="https://via.placeholder.com/600x400" alt="Project 2" />
                            </div>
                            <div>
                            <img src="https://via.placeholder.com/600x400" alt="Project 3" />
                        </div>
                    </Carousel>
                </div>
            </section>
        </div>
    )
}
