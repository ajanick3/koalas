import React from 'react'
import { GridList, GridListTile } from '@material-ui/core';

const ImageGridList = ({ images }) => {
  return (
    <GridList cellHeight={160} cols={3}>
      {images.map((image, i) => (
        <GridListTile key={`image-${i}`} cols={1}>
          <img src={image} />
        </GridListTile>
      ))}
    </GridList>
  )
}

export default ImageGridList
