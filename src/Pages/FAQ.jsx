import React from 'react'
import Faqinfo from '../components/Faqinfo/Faqinfo'
import Questions from '../components/Faqquestions/Questions'
import Faqtitle from '../components/Faqtitle/Faqtitle'

const FAQ = () => {
  return (
    <div>
      <Faqtitle />
      <Faqinfo/>
      <Questions/>
    </div>
  )
}

export default FAQ