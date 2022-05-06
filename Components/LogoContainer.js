import React from 'react'
import Image from 'next/image'


const LogoContainer = (props) => {
    return (
        <>
            <div className='mb-4 pl-5 pr-5 sm:pl-0 lg:m-2 lg:pl-0 lg:pr-0'>
                <a target="_blank" rel="noreferrer" href={`${props.url}`}>
                    <div className='border-4 p-20 rounded-lg hover:border-blue-400 hover:cursor-pointer'>
                        <div className='w-72'>
                            <Image src={`/logos/${props.filename}.svg`} alt="youtube" width={1500} height={500} />
                        </div>
                    </div>
                </a>
            </div>
        </>

    )
}

export default LogoContainer