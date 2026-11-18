import PostCard from './PostCard.jsx'

function PostList({ posts }) {
  if (!posts.length) return <p className="empty-feed">No posts yet. Start the conversation above.</p>

  return (
    <section className="post-list" id="feed" aria-label="Community posts">
      {posts.map((post) => <PostCard key={post.id} post={post} />)}
    </section>
  )
}

export default PostList
