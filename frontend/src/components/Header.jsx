function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="CommunityHub home">
        <span className="brand-mark" aria-hidden="true">c</span>
        <span>community<span className="brand-light">hub</span></span>
      </a>
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input type="search" placeholder="Search your community" aria-label="Search your community" />
        <kbd>/</kbd>
      </label>
      <nav className="header-actions" aria-label="Account">
        <button type="button" className="icon-button" aria-label="Notifications">♧<span className="notification-dot" /></button>
        <button type="button" className="profile-button" aria-label="Open your profile"><span className="avatar avatar-you">YO</span><span className="profile-caret">⌄</span></button>
      </nav>
    </header>
  )
}

export default Header
