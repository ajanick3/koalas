import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'

const ImageGridList = ({ images, cols = 2 }) => {
  return (
    <GridList cellHeight={250} cols={cols}>
      {images.map((image, i) => (
        <GridListTile key={`image-${i}`} cols={1}>
          <img src={image} />
        </GridListTile>
      ))}
    </GridList>
  )
}

export default ImageGridList
