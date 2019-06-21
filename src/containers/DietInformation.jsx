import React from 'react'
import HeaderText from '../components/HeaderText'
import BodyText from '../components/BodyText'

const text1 = `Koalas eat 200 – 500 grams, primary eucalyptus leaves (gum leaves) each day. During the day, they only eat once a day as they sleep up to 22 hours to digest the food. Sleeping allows them to save energy as the eucalyptus leaves are low in fibrous and nutrition so sleep to conserve energy when digesting. For more information, please visit the links below.`

const DietInformation = (props) => {
  const { headerText } = props
  return (
    <div>
      <HeaderText content={headerText} />
      <BodyText content={text1} />
    </div>
  )
}

export default DietInformation
