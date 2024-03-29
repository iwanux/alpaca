import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BugReportTwoToneIcon from "@material-ui/icons/BugReportTwoTone";
import "./Navbar.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const [isLogin, setSession] = useState(false);

  const classes = useStyles();
  if (isLogin === false) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setSession(!isLogin);
              }}
            >
              <BugReportTwoToneIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Alpaca.io
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setSession(!isLogin);
              }}
            >
              <BugReportTwoToneIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Alpaca.io
            </Typography>
            <Button color="inherit">Logout</Button>
            <Button color="inherit">Profil</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

export default Navbar;
