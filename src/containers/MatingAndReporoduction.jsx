import React from 'react'
import HeaderText from '../components/HeaderText'
import ListComponent from '../components/ListComponent'

const list1 = [
  `The gestational period for a koala is 30 to 36 days`,
  `A koala will have 1 offspring at a time`,
  `The offspring live with parent for 1 year (6 months in the pouch and 6 months outside of the pouch`,
]

const Mating = (props) => {
  const { headerText } = props
  return (
    <div>
      <HeaderText content={headerText} />
      <ListComponent items={list1} />
    </div>
  )
}

export default Mating
