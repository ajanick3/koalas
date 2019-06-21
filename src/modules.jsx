import React from 'react'
import HomePage from './containers/HomePage'
import ImageGallery from './containers/ImageGallery'
import DietInformation from './containers/DietInformation'
import MatingAndReporoduction from './containers/MatingAndReporoduction'
import Habitat from './containers/Habitat'
import Name from './containers/Name'
import AnatomyAndBiology from './containers/AnatomyAndBiology'
import AnimalBehavior from './containers/AnimalBehavior'

import PetsIcon from '@material-ui/icons/Pets'
import CollectionsIcon from '@material-ui/icons/Collections'
import FastFoodIcon from '@material-ui/icons/Fastfood'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import ClassIcon from '@material-ui/icons/Class'
import DeviceHubIcon from '@material-ui/icons/DeviceHub'
import NatureIcon from '@material-ui/icons/Nature'
import ToysIcon from '@material-ui/icons/Toys'


export const modules = [
  {
    key: 'Home',
    title: 'Home',
    component: <HomePage />,
    icon: <PetsIcon />,
  },
  {
    key: 'ImageGallery',
    title: 'Image Gallery',
    component: <ImageGallery />,
    icon: <CollectionsIcon />,
  },
  {
    key: 'DietInformation',
    title: 'Diet Information',
    component: <DietInformation />,
    icon: <FastFoodIcon />,
  },
  {
    key: 'MatingAndReporoduction',
    title: 'Mating & Reproduction',
    component: <MatingAndReporoduction />,
    icon: <AutorenewIcon />,
  },
  {
    key: 'Habitat',
    title: 'Koala Habitat',
    component: <Habitat />,
    icon: <NatureIcon />,
  },
  {
    key: 'Name',
    title: 'Name & Classification',
    component: <Name />,
    icon: <ClassIcon />,
  },
  {
    key: 'AnatomyAndBiology',
    title: 'Anatomy & Biology',
    component: <AnatomyAndBiology />,
    icon: <DeviceHubIcon />,
  },
  {
    key: 'AnimalBehavior',
    title: 'Behavior',
    component: <AnimalBehavior />,
    icon: <ToysIcon />,
  },
]