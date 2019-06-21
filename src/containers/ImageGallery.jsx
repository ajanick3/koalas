import React from 'react'
import ImageGridList from '../components/ImageGridList'
import HeaderText from '../components/HeaderText'

import image01 from '../assets/thumbnail_image001.png'
import image02 from '../assets/thumbnail_image002.png'
import image03 from '../assets/thumbnail_image003.png'
import image04 from '../assets/thumbnail_image004.png'
import image05 from '../assets/thumbnail_image005.png'
import image06 from '../assets/pexels-photo-1192374.jpeg'
import image07 from '../assets/Koala_climbing_tree.jpg'

const images = [
  //
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
]

const ImageGallery = (props) => {
  const { headerText } = props
  return (
    <div>
      <HeaderText content={headerText} />
      <ImageGridList images={images} />
    </div>
  )
}

export default ImageGallery
