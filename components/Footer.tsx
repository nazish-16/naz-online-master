import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='py-20 flex flex-row items-center justify-center' id='contact'>
            <Link href="https://github.com/nazish-16">
                <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF" alt="github" width={30} className='m-2 hover:translate-y-[-2px] transition' />
            </Link>
            <Link href="patreon.com/user?u=60690928">
                <img src="https://img.icons8.com/?size=100&id=tIshI0hyXw3f&format=png&color=FFFFFF" alt="github" width={30} className='m-2 hover:translate-y-[-2px] transition' />
            </Link>
            <Link href="https://www.linkedin.com/in/nazish-ahmed-920b9a245/">
                <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="Linkedin" width={30} className='m-2 hover:translate-y-[-2px] transition' />
            </Link>
        </div>
    )
}

export default Footer