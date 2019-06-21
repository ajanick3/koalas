import React from 'react'
import HeaderText from '../components/HeaderText'
import BodyText from '../components/BodyText'
import ListComponent from '../components/ListComponent'

const headerText = `Scientific Names & Classification`

const text1 = `Primary species is Phascolarctos cinereus -Pascolarctidae comes from the
Greek translation of phascolos (bear) and arctos (pouch). 
-Sub species:`

const list1 = [
  `Queensland koala (P.c. adustus)`,
  `New South Wales koala (P.c. cinereus)`,
  `Victorian koala (P.c. victor)`,
]

const text2 = `Once a female koala sexually matures, she mates as often as once a year.
These marsupials typically breed during the late spring and early
summer, a period during which females experience estrus multiple times
until they find mates.`

const Name = () => {
  return (
    <div>
      <HeaderText content={headerText} />
      <BodyText content={text1} />
      <ListComponent items={list1} />
      <BodyText content={text2} />
    </div>
  )
}

export default Name
