import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export const Header = () => {
  return (
    <List>
      {menu.map((m, index) => {
        return (
          <ListItem button key={index}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Link to={`${m.path}`}>
              <ListItemText primary={m.icon} />
            </Link>
          </ListItem>
        )
      })}
    </List>
  )
}
const menu = [
  {
    icon: "Inbox",
    path: "",
  },
  {
    icon: "Starred",
    path: "about",
  },
  {
    icon: "Send email",
    path: "topics",
  },
]
