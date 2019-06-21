import React from 'react'
import HeaderText from '../components/HeaderText'
import BodyText from '../components/BodyText'
import ListComponent from '../components/ListComponent'
import koalaImg from '../assets/95b83f18ad1e76629e85e3b063bda2fa.jpg'

const text1 = `
Koalas have special physical characteristics that complement their
tree-dwelling lifestyle. With two opposable digits, their forepaws are
well-adapted to gripping branches and picking eucalyptus leaves, their
main form of nourishment.`

const list1 = [
  `The koala is found in coastal areas of Australia`,
  `The koala has a body length of 60–85 cm (24–33 in)`,
  `Koala’s weighs about 4–15 kg (9–33 lb)`,
  `Koala’s live about 13-18 years`,
]

const AnatomyAndBiology = (props) => {
  const { headerText } = props
  return (
    <div>
      {/* <HeaderText content={headerText} /> */}
      <img src={koalaImg} style={{ width: '100%' }} />
      <BodyText content={text1} />
      <ListComponent items={list1} />
    </div>
  )
}

export default AnatomyAndBiology
