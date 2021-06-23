import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tweet from "../components/Tweet";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    // height: ,
  },
  tabs: {
    borderRight: `1px solid primary`,
  },
}));

export default function Home() {
  const [state, setState] = useState({
    tweets: null,
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get("/tweets")
      .then((res) => {
        console.log("====================================");
        console.log(res.data);
        console.log("====================================");
        setState({
          ...state,
          tweets: res.data,
        });
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  });

  const history = useHistory();

  // eslint-disable-next-line
  const viewTweets = (e, url) => {
    history.push(url);
  };

  return (
    <div className="container-fluid">
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Home Page"
          className={classes.tabs}
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Notifications" {...a11yProps(3)} />
          <Tab label="Tweet" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Home
          {/* {
            (recentTweetMarkup = this.tweets ? (
              this.tweets.map((tweet) => <Tweet tweet={tweet} />)
            ) : (
              <p>Loading...</p>
            ))
          } */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Profile
        </TabPanel>
        <TabPanel value={value} index={2}>
          Notifications
        </TabPanel>
        <TabPanel value={value} index={3}>
          Tweet
        </TabPanel>
      </div>
    </div>
  );
}
