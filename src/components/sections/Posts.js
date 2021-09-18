import React from "react";
import Post from "../posts/Post";
import "./Posts.css";
import DUMMY_DATA from "../../dummyData"

const Posts = (props) => {
    let button = props.number
    let DUMMY_DATA_FILTERED = DUMMY_DATA.filter(element => element.address === button)
  return (
    <section className="posts">
      {DUMMY_DATA_FILTERED.map((element) => (
        <Post key={element.id} image={element.image} title={element.title} />
      ))}
    </section>
  );
};

export default Posts;
