import React from 'react'
import Image from 'next/image'


const LogoContainer = (props) => {
    return (
        <>
            <div className='w-46 border-4 p-20 m-1 rounded-lg hover:border-blue-400 hover:cursor-pointer'>
                <div className='w-72'>
                    <a target="_blank" href={`${props.url}`}><Image src={`/logos/${props.filename}.svg`} alt="youtube" width={1500} height={500} /></a>
                </div>
            </div>

        </>

    )
}

export default LogoContainer