import { formatRelativeTime } from '../utils/formatRelativeTime.js'

function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-heading"><span className={`avatar avatar-${post.initials.toLowerCase()}`}>{post.initials}</span><div className="post-author"><h2>{post.author}</h2><p>{post.role} <span aria-hidden="true">·</span> <time dateTime={post.createdAt}>{formatRelativeTime(post.createdAt)}</time></p></div><button type="button" className="more-button" aria-label={`More options for ${post.author}'s post`}>···</button></div>
      <p className="post-content">{post.content}</p>
      <div className="post-reactions"><span><span aria-hidden="true">♡</span> {post.likes} appreciations</span><span>{post.comments} comments</span></div>
      <div className="post-divider" />
      <div className="post-actions"><button type="button"><span aria-hidden="true">♡</span> Appreciate</button><button type="button"><span aria-hidden="true">▱</span> Comment</button><button type="button"><span aria-hidden="true">↗</span> Share</button></div>
    </article>
  )
}

export default PostCard
