import React from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import Tweet from "../components/Tweet";

export default function Home() {
  // const [state, setState] = useState({
  //   tweets: null,
  // });

  // useEffect(() => {
  //   axios
  //     .get("/tweets")
  //     .then((res) => {
  //       console.log("====================================");
  //       console.log(res.data);
  //       console.log("====================================");
  //       setState({
  //         ...state,
  //         tweets: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("====================================");
  //       console.log(err);
  //       console.log("====================================");
  //     });
  // });

  const history = useHistory();

  // eslint-disable-next-line
  const viewTweets = (e, url) => {
    history.push(url);
  };

  return (
    <div className="container-fluid">
      {/* { let  recentTweetMarkup = this.tweets ? (
              this.tweets.map((tweet) => <Tweet tweet={tweet} />)
            ) : (
              <p>Loading...</p>
            )} */}
    </div>
  );
}
