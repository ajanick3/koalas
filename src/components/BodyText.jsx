import React from 'react'
import { Typography } from '@material-ui/core'

const BodyText = ({ content }) => {
  return (
    <Typography variant="body1">
      {content}
    </Typography>
  )
}

export default BodyText
