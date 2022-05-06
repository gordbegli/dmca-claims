import React from 'react'
import Image from 'next/image'


const LogoContainer = (props) => {
    return (
        <>
            <div className='border-4 w-fit content-center rounded-lg m-3'>
                <div className='w-80 m-10'>
                    <Image src={`/logos/${props.filename}`} alt="youtube" width={props.w} height={props.h} />
                </div>
                <p>text here</p>
            </div>

        </>

    )
}

export default LogoContainer