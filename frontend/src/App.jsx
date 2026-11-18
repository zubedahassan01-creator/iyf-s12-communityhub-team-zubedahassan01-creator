import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import PostList from './components/PostList.jsx'
import CreatePost from './components/CreatePost.jsx'
import { initialPosts } from './data/posts.js'
import './App.css'

function App() {
  const [posts, setPosts] = useState(initialPosts)

  function handleCreatePost(content) {
    const post = {
      id: `post-${Date.now()}`,
      author: 'You',
      initials: 'YO',
      role: 'Community member',
      content,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
    }
    setPosts((currentPosts) => [post, ...currentPosts])
  }

  return (
    <div className="app-shell">
      <Header />
      <div className="page-layout">
        <Sidebar />
        <main className="main-content">
          <div className="feed-heading">
            <div>
              <p className="eyebrow">YOUR COMMUNITY</p>
              <h1>Community feed</h1>
              <p className="feed-subtitle">A little closer, wherever you are.</p>
            </div>
            <button className="filter-button" type="button" aria-label="Current feed: Latest">
              Latest <span aria-hidden="true">⌄</span>
            </button>
          </div>
          <CreatePost onCreatePost={handleCreatePost} />
          <PostList posts={posts} />
        </main>
        <aside className="right-rail" aria-label="Community information">
          <section className="welcome-card">
            <div className="welcome-art" aria-hidden="true">✦</div>
            <p className="eyebrow">GOOD THINGS GROW HERE</p>
            <h2>Make this space yours.</h2>
            <p>Share a win, ask for a hand, or just say hello.</p>
            <a href="#create-post">Start a conversation <span aria-hidden="true">→</span></a>
          </section>
          <section className="online-card">
            <div className="online-title"><h2>Community today</h2><span className="live-dot" /> <span className="online-count">8 online</span></div>
            <p>People are sharing, learning, and cheering each other on.</p>
            <div className="avatar-stack" aria-label="Community members online"><span>AM</span><span>JK</span><span>LW</span><span>+5</span></div>
          </section>
          <p className="rail-note">A good community starts with showing up.</p>
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default App
