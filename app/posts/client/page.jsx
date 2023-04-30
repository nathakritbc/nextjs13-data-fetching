"use client";

import React, { useState, useEffect } from "react";

function PostsList({ posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();
  //     setPosts(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Posts List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
