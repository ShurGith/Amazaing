import { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";
import { useContext } from "react";
import { BlogContext } from "../context/Blog.Context";
import { UserContext } from "../context/User.Context";

function BlogPage() {
  const { posts, getPosts, error } = useContext(BlogContext)
const {login, logout} = useContext(UserContext)

  useEffect(() => {
    getPosts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>

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