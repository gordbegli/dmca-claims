import React from 'react'
import Image from 'next/image'


const LogoContainer = (props) => {
    return (
        <>
            <div className='border-4 p-20 m-1 rounded-lg'>
                <div className='w-72'>
                    <Image src={`/logos/${props.filename}`} alt="youtube" width={props.w} height={props.h} />
                </div>
            </div>

        </>

    )
}

export default LogoContainer