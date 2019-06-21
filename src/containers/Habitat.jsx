import React from 'react'
import HeaderText from '../components/HeaderText'
import BodyText from '../components/BodyText'

const text1 = `Koalas live in Southeastern & Eastern Australia.  To thrive in their habitat, Koalas need eucalyptus Trees, adequate rainfall, other Koalas.  They live in the eucalyptus forest and woodlands.  They spend most of their time wedged between forks in the branches.`

const Habitat = (props) => {
  const { headerText } = props
  return (
    <div>
      <HeaderText content={headerText} />
      <BodyText content={text1} />
      {/* <Typography variant="caption">Where on Earth are they found?</Typography>
      <Typography variant="body1">Southeastern & Eastern Australia</Typography>
      <Typography variant="caption">
        What natural surroundings does the Koala need to thrive?
      </Typography>
      <Typography variant="body1">
        Eucalyptus Trees, Adequate rainfall, other Koala's
      </Typography>
      <Typography variant="caption">
        Where does the animal make its home?
      </Typography>
      <Typography variant="body1">Eucalyptus Forests & Woodlands</Typography>
      <Typography variant="body1">
        Spend most time wedged between forks in the branches
      </Typography> */}
    </div>
  )
}

export default Habitat
