import React from 'react'
import { Typography } from '@material-ui/core'

const HeaderText = ({ content }) => {
  return (
    <Typography variant="h2">
      {content}
    </Typography>
  )
}

export default HeaderText
