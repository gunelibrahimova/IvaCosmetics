import React from 'react'
import BeautyEssentials from '../components/BeautyEssentials/BeautyEssentials'
import Herbal from '../components/Herbal/Herbal'
import Nature from '../components/NatureTouch/Nature'
import Slider from '../components/Slider/Slider'
import IlluminateBeauty from '../components/IlluminateBeauty/Beauty'

const Home = () => {
  return (
    <div>
        <Slider />
        <BeautyEssentials/>
        <Nature/>
        <Herbal/>
        <IlluminateBeauty/>
    </div>
  )
}

export default Home