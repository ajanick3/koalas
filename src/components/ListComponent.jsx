import React from 'react'
import { List, ListItem } from '@material-ui/core'

const ListComponent = ({ items }) => {
  return (
    <List>
      {items.map((item, i) => (
        <ListItem key={`list-item-${i}`}>
          {item}
        </ListItem>
      ))}
    </List>
  )
}

export default ListComponent
