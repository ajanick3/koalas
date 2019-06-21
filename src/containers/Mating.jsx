import React from 'react'
import HeaderText from '../components/HeaderText'
import ListComponent from '../components/ListComponent'
import BodyText from '../components/BodyText'
import koalaImg from '../assets/koala_and_joey.jpg'

// const list1 = [
//   `The gestational period for a koala is 30 to 36 days`,
//   `A koala will have 1 offspring at a time`,
//   `The offspring live with parent for 1 year (6 months in the pouch and 6 months outside of the pouch`,
// ]

const text1 = `The gestation period for a koala is 30 to 36 days, and they can have 1 offspring at a time.  
The baby lives with the  mother for 1 year - 6 months in the pouch and 6 months outside of the pouch.  Baby koalas are called joeys.  A koala joey is born about the size of a kidney bean, does not have hair, and cannot see.`

const Mating = (props) => {
  const { headerText } = props
  return (
    <div>
      {/* <HeaderText content={headerText} /> */}
      <img src={koalaImg} style={{ width: '100%' }} />
      <BodyText content={text1} />
      {/* <ListComponent items={list1} /> */}
    </div>
  )
}

export default Mating
