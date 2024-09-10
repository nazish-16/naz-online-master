import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/components/data'

const Clients = () => {
    return (
        <div className='py-20' id='clients'>
            <h1 className='heading'>
                Statements of <span className='text-purple'>support</span>
            </h1>
            <p className='text-center mt-4'>Many have praised my web development work for transforming websites, boosting traffic, and exceeding expectations. </p>
            <div className='flex flex-col items-center'>
                <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients