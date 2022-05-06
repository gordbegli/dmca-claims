import Head from 'next/head'
import Image from 'next/image'
import Title from '../Components/Title.js'
import SubTitle from '../Components/SubTitle.js'
import LogoContainer from '../Components/LogoContainer.js'
import Nav from '../Components/Nav.js'


export default function Home() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from- via-white to-blue-600">
      <Nav />
        <Title />
        <SubTitle />
          <div className='max-w-full place-content-center flex items-stretch flex-wrap ...'>
            <LogoContainer filename={'amazon'} url={'https://www.amazon.com/report/infringement/signin'}/>
            <LogoContainer filename={'facebook'} url={'https://www.facebook.com/help/contact/1758255661104383'}/>
            <LogoContainer filename={'github'} url={'https://support.github.com/contact/dmca-takedown'}/>
            <LogoContainer filename={'google'} url={'https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=9814647'}/>
            <LogoContainer filename={'instagram'} url={'https://help.instagram.com/contact/552695131608132'}/>
            <LogoContainer filename={'pornhub'} url={'https://www.pornhub.com/information/dmcaform'}/>
            <LogoContainer filename={'reddit'} url={'https://reddit.zendesk.com/hc/en-us/requests/new?ticket_form_id=73465'}/>
            <LogoContainer filename={'tiktok'} url={'https://www.tiktok.com/legal/report/Copyright?lang=en'}/>
            <LogoContainer filename={'youtube'} url={'https://support.google.com/youtube/answer/2807622?hl=en'}/>
          </div>

      </div>

    </>
  )
}
