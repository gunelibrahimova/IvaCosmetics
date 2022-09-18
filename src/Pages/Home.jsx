import React from 'react'
import BeautyEssentials from '../components/BeautyEssentials/BeautyEssentials'
import Herbal from '../components/Herbal/Herbal'
import Nature from '../components/NatureTouch/Nature'
import Slider from '../components/Slider/Slider'
import IlluminateBeauty from '../components/IlluminateBeauty/Beauty'
import Original from '../components/Original/Original'
import Reveal from '../components/Reveal/Reveal'
import Recent from '../components/Recent/Recent'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Slider />
        <BeautyEssentials/>
        <Nature/>
        <Herbal/>
        <Original/>
        <Reveal/>
        <IlluminateBeauty/>
        <Recent/>
      
    </div>
  )
}

export default Home