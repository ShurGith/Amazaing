
function PostCard({post }) {
  return (
    <div className="post-card">
        <h2>{post.title}</h2>
        <h4>{post.body}</h4>
    </div>
  )
}

export default PostCard