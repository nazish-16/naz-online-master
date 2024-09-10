import { workExperience } from '@/components/data'
import React from 'react'
import { Button } from './ui/BorderButton'

const Experience = () => {
    return (
        <div className='py-20' id='experience'>
            <h1 className='heading'>
                Work <span className='text-purple'>Experience</span>
            </h1>
            <p className='text-center mt-4'>With extensive experience in web development, Ive successfully transformed numerous websites, enhancing performance, user experience, and SEO.</p>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                        duration={Math.floor(Math.random() * 10000 + 10000)}
                    >
                        <div className='flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt="card.thumbnail" className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience