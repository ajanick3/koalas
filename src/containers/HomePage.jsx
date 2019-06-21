import React from 'react'
import HeaderText from '../components/HeaderText'
import ListComponent from '../components/ListComponent';

const list1 = [
  `Koalas are found in the eucalyptus forests of eastern Australia. They have grey fur with a cream-coloured chest, and strong, clawed feet, perfect for living in the branches of trees!`,
  `Cuddly critters, koalas measure about 60cm to 85cm long, and weigh about 14kg.`,
  `Although you may have heard people call them koala ‘bears’, these awesome animals aren’t bears at all – they are in fact marsupials. A group of mammals, most marsupials have pouches where their newborns develop.`,
  `When an infant koala – called a joey – is born, it immediately climbs up to its mother’s pouch. Blind and earless, a joey uses its strong sense of touch and smell, as well as natural instinct, to find its way.`,
  `A joey grows and develops in the pouch for about six months. Once strong enough, the youngster rides around on its mother’s back for a further six months, only using the pouch to feed.`,
  `Koala’s grow up to become big eaters, shifting up to one kilogram of eucalyptus leaves in a day! They are fussy, too, and will select the most nutritious and tastiest leaves from the trees where they live.`,
  `These magnificent mammals get their name form an Aboriginal*term meaning, ‘no drink’. It’s believed this is because koalas get almost all their moisture from the leaves they eat, and rarely drink water.`,
  `But check this out – eucalyptus leaves are super tough and poisonous! Luckily for koalas, they have a long digestive organ called a cecum which allows them to break down the leaves unharmed.`,
  `Enjoy having a snooze? Well so do our furry friends! Koalas don’t have much energy and, when not feasting on leaves, they spend their time dozing in the branches. Believe it or not, they can sleep for up to 18 hours a day!`,
  `Although these beautiful creatures are protected by law, and not classed as an endangered species, their habitat is under threat. Sadly, around 80% of koala habitat has been lost to human homes, drought and forest fires.`,
]

const HomePage = () => {
  return (
    <div>
      <HeaderText content={`Koalas for Kids`} />
      <ListComponent items={list1} />
    </div>
  )
}

export default HomePage
