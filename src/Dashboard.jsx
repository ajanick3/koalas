import React from 'react'
import clsx from 'clsx'

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { modules } from './modules'

const drawerWidth = 280

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

// const links = [
//   {
//     key: 'Home',
//     title: 'Home',
//     icon: <PetsIcon />,
//   },
//   {
//     key: 'ImageGallery',
//     title: 'Image Gallery',
//     icon: <CollectionsIcon />,
//   },
//   {
//     key: 'DietInformation',
//     title: 'Diet Information',
//     icon: <FastFoodIcon />,
//   },
//   {
//     key: 'MatingAndReporoduction',
//     title: 'Mating & Reproduction',
//     icon: <AutorenewIcon />,
//   },
//   {
//     key: 'Habitat',
//     title: 'Koala Habitat',
//     icon: <NatureIcon />,
//   },
//   {
//     key: 'Name',
//     title: 'Name & Classification',
//     icon: <ClassIcon />,
//   },
//   {
//     key: 'AnatomyAndBiology',
//     title: 'Anatomy & Biology',
//     icon: <DeviceHubIcon />,
//   },
//   {
//     key: 'AnimalBehavior',
//     title: 'Behavior',
//     icon: <ToysIcon />,
//   },
// ]

export default function Dashboard() {
  const classes = useStyles()
  // const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const [pageOpen, setPageOpen] = React.useState('HomePage')

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Koalas
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {modules.map(({ key, title, icon }, index) => (
            <ListItem button key={title} onClick={() => setPageOpen(key)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <div style={{ width: '100%' }}> */}
        {modules.map(({ key, component }) => pageOpen === key && component)}
        {/* </div> */}
      </main>
    </div>
  )
}