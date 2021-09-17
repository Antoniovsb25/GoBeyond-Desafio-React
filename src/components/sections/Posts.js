import React from "react";
import Post from "../posts/Post";
import "./Posts.css";
import DUMMY_DATA from "../../dummyData"

const Posts = () => {
  return (
    <section className="posts">
      {DUMMY_DATA.map((element) => (
        <Post key={element.id} id={element.id} image={element.image} title={element.title} />
      ))}
    </section>
  );
};

export default Posts;
