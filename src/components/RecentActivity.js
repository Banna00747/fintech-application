import React from "react";
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import profile from "../assets/images/profile.png";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: "25px",
  },
  inline: {
    display: "inline",
  },
  subTitle: {
    padding: "20px 0",
  },
}));

export const tabsStyles = () =>
  makeStyles({
    root: {
      border: `1px solid red`,
      backgroundColor: "#eee",
      borderRadius: 10,
      minHeight: 44,
    },
    flexContainer: {
      border: `1px solid green`,

      display: "inline-flex",
      position: "relative",
      zIndex: 1,
    },
    scroller: {},
    indicator: {
      border: `1px solid blue`,

      top: 3,
      bottom: 3,
      right: 3,
      height: "auto",
      background: "none",
      "&:after": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        left: 4,
        right: 4,
        bottom: 0,
        borderRadius: 8,
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
      },
    },
  });
export const tabItemStyles = () =>
  makeStyles({
    root: {
      "&:hover": {
        opacity: 1,
      },
      minHeight: 44,
      minWidth: 96,
    },
    wrapper: {
      border: `1px solid magenta`,
      color: "#000",
      textTransform: "initial",
    },
  });

export default function RecentActivity() {
  const classes = useStyles();
  const classes2 = tabsStyles();
  const classes3 = tabItemStyles();

  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <List className={classes.root}>
      <Tabs
        classes={classes2}
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
      >
        <Tab classes={classes3} disableRipple label={"Recent"} />
        <Tab classes={classes3} disableRipple label={"Pending"} />
      </Tabs>
      <Typography
        component="div"
        variant="subtitle1"
        className={classes.subTitle}
        color="textPrimary"
      >
        Today, 15 January
      </Typography>
      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={profile} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Dollar Balance (Primary)
              </Typography>
              {"To: Mrs Mohan . valobasha@email.com…"}
            </React.Fragment>
          }
        />
        <div className="info">
          <p>+ $ 1,750.00</p>
          <Button className="btn btn-status">Approved</Button>
        </div>
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={profile} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Dollar Balance (Primary)
              </Typography>
              {"To: Jane Smith . jsmith@email.com"}
            </React.Fragment>
          }
        />
           <div className="info">
          <p>+ $ 1,750.00</p>
          <Button className="btn btn-status">Approved</Button>
        </div>
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={profile} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
           <div className="info">
          <p>+ $ 1,750.00</p>
          <Button className="btn btn-status">Approved</Button>
        </div>
      </ListItem>
      <Divider component="li" />

      <Typography
        component="div"
        variant="subtitle1"
        className={classes.subTitle}
        color="textPrimary"
      >
        Today, 15 January
      </Typography>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={profile} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
           <div className="info">
          <p>+ $ 1,750.00</p>
          <Button className="btn btn-status">Approved</Button>
        </div>
      </ListItem>
    </List>
  );
}
