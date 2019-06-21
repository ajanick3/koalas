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
    key: 'home',
    title: 'Home',
    component: (
      <HomePage
        // components
        headerText={`Koalas for Kids`}
      />
    ),
    icon: <PetsIcon />,
  },
  {
    key: 'imagegallery',
    title: 'Image Gallery',
    component: (
      <ImageGallery
        // components
        headerText={`Image Gallery`}
      />
    ),
    icon: <CollectionsIcon />,
  },
  {
    key: 'dietinformation',
    title: 'Diet Information',
    component: (
      <DietInformation
        // components
        headerText={`Diet Information`}
      />
    ),
    icon: <FastFoodIcon />,
  },
  {
    key: 'matingandreporoduction',
    title: 'Mating & Reproduction',
    component: (
      <MatingAndReporoduction
        // components
        headerText={`Mating & Reproduction`}
      />
    ),
    icon: <AutorenewIcon />,
  },
  {
    key: 'habitat',
    title: 'Habitat',
    component: (
      <Habitat
        // components
        headerText={`Koala Habitat`}
      />
    ),
    icon: <NatureIcon />,
  },
  {
    key: 'name',
    title: 'Name & Classification',
    component: (
      <Name
        // components
        headerText={`Scientific Names & Classification`}
      />
    ),
    icon: <ClassIcon />,
  },
  {
    key: 'anatomyandbiology',
    title: 'Anatomy & Biology',
    component: (
      <AnatomyAndBiology
        // components
        headerText={`Anatomy & Biology`}
      />
    ),
    icon: <DeviceHubIcon />,
  },
  {
    key: 'animalbehavior',
    title: 'Behavior',
    component: (
      <AnimalBehavior
        // components
        headerText={`Koala Behavior`}
      />
    ),
    icon: <ToysIcon />,
  },
]
