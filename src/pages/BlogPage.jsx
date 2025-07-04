import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

function BlogPage() {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
    console.log(data);
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="posts-container">
        {posts.map(post =>
          <div key={post.id} className="post-card-div">
            <PostCard post={post} />
          </div>
        )}
      </div>
    </>
  );
}

export default BlogPage;