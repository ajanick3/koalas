import React from 'react'
import HeaderText from '../components/HeaderText'
import BodyText from '../components/BodyText'
import koalaImg from '../assets/MISTY210117kdp10long1600-1080x675.jpg'

const text1 = `Nocturnal mammals, koalas sleep for up to 16 hours a day. They are
arboreal, which means that they live in trees. They do not live in big
groups but rather prefer to be alone.`
const text2 = `Behavioral adaptations: - Koalas live in a community.`
const text3 = `How the animal gets food`
const text4 = `Rough pads on the palms and soles of the paws helping to grip tree
trunks and branches. - Koalas have fur on their bottoms which is like a
cushion for hard branches they sit on, it also acts as a camouflage to
make the Koala hard to spot from the ground.`
const text5 = `The koala has special teeth adapted for their eucalyptus diet. ...
Eucalyptus leaves are high in fiber and low in nutrients. In addition to
eating large amounts, koalas are able to survive on their diet since
they have a slow metabolic system to conserve nutrients and energy.`
const text6 = `Can a koala kill you?`
const text7 = `Koalas are struck by a different strain of the disease from that which
affects humans – although it seems humans can catch the koala version
through exposure to an infected animal's urine. In koalas, the effects
of chlamydia are devastating, including blindness, infertility and an
infection known as 'dirty tail'.`

const Behavior = (props) => {
  const { headerText } = props
  return (
    <div>
      <HeaderText content={headerText} />
      {/* <img src={koalaImg} style={{ width: '100%' }} /> */}
      <iframe
        width="100%"
        height="500"
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/oI3ADcDH0Uc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <BodyText content={text1} />
      <BodyText content={text2} />
      <BodyText content={text3} />
      <BodyText content={text4} />
      <BodyText content={text5} />
      <BodyText content={text6} />
      <BodyText content={text7} />
    </div>
  )
}

export default Behavior
