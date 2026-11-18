import { useState } from 'react'

function CreatePost({ onCreatePost }) {
  const [content, setContent] = useState('')
  const trimmedContent = content.trim()

  function handleSubmit(event) {
    event.preventDefault()
    if (!trimmedContent) return
    onCreatePost(trimmedContent)
    setContent('')
  }

  return (
    <form className="composer-card" id="create-post" onSubmit={handleSubmit}>
      <div className="composer-top"><span className="avatar avatar-you">YO</span><label className="sr-only" htmlFor="post-content">Share something with your community</label><textarea id="post-content" rows="2" maxLength="500" placeholder="What’s on your mind? Share it with your community…" value={content} onChange={(event) => setContent(event.target.value)} /></div>
      <div className="composer-bottom"><span className="composer-prompt"><span aria-hidden="true">✦</span> A little kindness goes a long way</span><div className="composer-actions"><span className="character-count">{content.length}/500</span><button className="post-button" type="submit" disabled={!trimmedContent}>Share post <span aria-hidden="true">↗</span></button></div></div>
    </form>
  )
}

export default CreatePost
