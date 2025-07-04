import { Link } from "react-router-dom"
function PostCard({post }) {
  return (
    <article className="post-card">
        <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
        <h4>{post.body}</h4>
    </article>
  )
}

export default PostCard