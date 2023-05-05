import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Avatar, ListItemAvatar } from "@mui/material";
import { arrShield } from "../Footer/Footer";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="CLUBES" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {arrShield.map((row, key) => (
            <ListItemButton key={key} sx={{ pl: 4 }}>
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="Remy Sharp"
                  src={row.shield}
                />
              </ListItemAvatar>
              <ListItemText primary={row.name.toUpperCase()} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
