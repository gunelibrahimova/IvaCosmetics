import React from 'react'
import Aboutcosmetics from '../components/AboutCosmetics/Aboutcosmetics'
import Aboutherbal from '../components/AboutHerbal/Aboutherbal'
import Aboutorginal from '../components/AboutOrginal/Aboutorginal'
import Abouttitle from '../components/AboutTitle/Abouttitle'
import Contactslider from '../components/Contactslider/Contactslider'

const About = () => {
  return (
    <div>
        <Abouttitle/>
        <Aboutcosmetics/>
        <Aboutherbal/>
        <Aboutorginal/>
        <Contactslider/>
    </div>
  )
}

export default About