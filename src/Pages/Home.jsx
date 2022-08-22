import React from 'react'
import BeautyEssentials from '../components/BeautyEssentials/BeautyEssentials'
import Nature from '../components/NatureTouch/Nature'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div>
        <Slider />
        <BeautyEssentials/>
        <Nature/>
    </div>
  )
}

export default Home