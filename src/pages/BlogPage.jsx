import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

function BlogPage() {
  const [posts, setPosts] = useState([])
  const[error, setError] = useState(false)

  const getPosts = async () => {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
    setError(false)
    console.log(data);
    }catch(e){
      setError(true)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="posts-container">
        {error ? 
        <h2>Algo ha salido mal </h2>
        :posts.length ? posts.map(post =>
          <div key={post.id} className="post-card-div">
            <PostCard post={post} />
          </div>
        ) : <h2>...Loading</h2>}
      </div>
    </>
  );
}

export default BlogPage;