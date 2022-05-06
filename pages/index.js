import Head from 'next/head'
import Image from 'next/image'
import Title from '../Components/Title.js'
import SubTitle from '../Components/SubTitle.js'
import LogoContainer from '../Components/LogoContainer.js'


export default function Home() {
  return (
    <>
      <div class="min-h-screen bg-gradient-to-b from- via-white to-blue-600">
        <Title />
        <SubTitle />
        <div className='flex-row'>
          <LogoContainer filename={'youtube.png'} w={794} h={178}/>
          <LogoContainer filename={'google.svg'} w={794} h={178}/>
        </div>
      </div>

    </>
  )
}
