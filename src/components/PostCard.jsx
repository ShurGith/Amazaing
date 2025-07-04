
function PostCard({post }) {
  return (
    <article className="post-card">
        <h2>{post.title}</h2>
        <h4>{post.body}</h4>
    </article>
  )
}

export default PostCard