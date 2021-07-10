import React from "react";
// import "../css/feed.css";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet.jsx";
import FlipMove from "react-flip-move";

function Feed() {
  return (
    <div className="feed mt-0">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox></TweetBox>
      <FlipMove>
        <Tweet
          key="text"
          displayName="David Chibueze"
          username="davydocsurg"
          verified={true}
          text="Hello World"
          avatar="../assets/images/avatar.png"
          tweetImage="../assets/images/avatar.png"
        ></Tweet>
      </FlipMove>
    </div>
  );
}

export default Feed;
