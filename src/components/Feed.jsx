import React, { useEffect, useState } from "react";
// import "../css/feed.css";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet.jsx";
import FlipMove from "react-flip-move";
// import axios from "axios";
import HttpService from "../services/HttpServices";
// import tweetImageUrl from "../assets/images/avatar.png";
// import tweepProf from "../assets /images/avatar.png";

function Feed() {
  // fetchTweets(){

  // }

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweetsFromServer();
    // return () => {
    //   cleanup
    // }
  }, []);

  const fetchTweetsFromServer = () => {
    const http = new HttpService();
    let tweetsUrl = "tweets";

    return http
      .getData(tweetsUrl)
      .then((res) => {
        console.log("====================================");
        // console.log(res);
        console.log("====================================");

        setTweets(res);
        console.log(tweets);
      })
      .catch((err) => {});
    // axios
    //   .get("http:localhost:8000/api/tweets")
    //   .then((res) => {
    //     console.log("====================================");
    //     console.log(res.data);
    //     console.log("====================================");
    //     // let tweetsData = res.data;
    //     // setTweets(tweetsData);
    //   })
    //   .catch((err) => {});
  };

  // useEffect(() => {
  //   axios.get('http:localhost:8000/api/tweets')
  //   .then((res) => {

  //   }).catch((err) => {

  //   });
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div className="feed mt-0 containe text-left">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox></TweetBox>
      <FlipMove>
        {tweets.map((tweet) => (
          <Tweet
            key="text"
            tweepName={tweet.tweep.first_name + " " + tweet.tweep.last_name}
            username={tweet.tweep.handle}
            verified={true}
            text={tweet.tweet_text}
            avatar={
              "http://localhost:8000/storage/users/profile/" +
              tweet.tweep.profile_picture
            }
            // avatar={
            //   "http://localhost:8000/public/storage/users/profile" +
            //   tweet.tweep.profile_picture
            // }
            // avatar={tweepProf}
            tweetImage={
              "http://localhost:8000/storage/tweets/photos/" + tweet.tweet_photo
            }
            // tweetImage={tweetImageUrl}
          ></Tweet>
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
