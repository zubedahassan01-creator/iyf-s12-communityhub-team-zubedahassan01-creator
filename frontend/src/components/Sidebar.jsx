const navigation = [
  { icon: '⌂', label: 'Home', active: true },
  { icon: '◎', label: 'Discover' },
  { icon: '♧', label: 'Messages', badge: '2' },
]

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <p className="sidebar-label">MENU</p>
      <nav className="side-nav">
        {navigation.map((item) => (
          <a className={`nav-link${item.active ? ' active' : ''}`} href={item.active ? '#feed' : '#'} key={item.label} aria-current={item.active ? 'page' : undefined}>
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </a>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <p className="sidebar-label">YOUR SPACES</p>
      <a className="space-link" href="#neighborhood"><span className="space-dot space-green" /> Neighborhood</a>
      <a className="space-link" href="#makers"><span className="space-dot space-orange" /> Makers circle</a>
      <a className="space-link" href="#wellbeing"><span className="space-dot space-purple" /> Wellbeing</a>
      <a className="create-space" href="#create-space"><span aria-hidden="true">＋</span> Create a space</a>
      <div className="sidebar-prompt"><span aria-hidden="true">✳</span><p>Your voice belongs here.</p><small>Be kind. Stay curious.</small></div>
    </aside>
  )
}

export default Sidebar
