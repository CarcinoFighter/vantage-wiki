
export default function Sidebar({ activePage, setActivePage, isSidebarOpen, setIsSidebarOpen }) {
  return (
    <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`} id="sidebar">
      
    <div className="sidebar-logo">
      <div className="logo-badge">
        <img src="/logo.png" className="logo-icon" style={{height: '24px', width: 'auto', objectFit: 'contain'}} />
        <div>
          <div className="logo-text">Carcino Vantage</div>
          <div className="logo-sub">Wiki & Guides</div>
        </div>
      </div>
    </div>

    <div className="sidebar-section">
      <div className="sidebar-section-label">Getting Started</div>
      <a className={`nav-item ${activePage === "overview" ? "active" : ""}`} onClick={() => setActivePage('overview')} href="#overview">
        <span className="nav-icon">🏠</span> Overview
      </a>
      <a className={`nav-item ${activePage === "editor" ? "active" : ""}`} onClick={() => setActivePage('editor')} href="#editor">
        <span className="nav-icon">✎</span> Editor
      </a>
      <a className={`nav-item ${activePage === "tasks" ? "active" : ""}`} onClick={() => setActivePage('tasks')} href="#tasks">
        <span className="nav-icon">◈</span> Tasks & Statuses
      </a>
      <a className={`nav-item ${activePage === "mobile" ? "active" : ""}`} onClick={() => setActivePage('mobile')} href="#mobile" style={{position: 'relative'}}>
        <span className="nav-icon">📱</span> Mobile Guide
        <span style={{marginLeft: 'auto', background: 'linear-gradient(135deg,#f59e0b,#ec4899)', color: '#fff', fontSize: '8px', fontWeight: '800', padding: '2px 7px', borderRadius: '99px', letterSpacing: '0.08em', textTransform: 'uppercase'}}>NEW</span>
      </a>
    </div>

    <div className="sidebar-section">
      <div className="sidebar-section-label">Departments</div>
      <a className={`nav-item dept-amber ${activePage === "writers" ? "active" : ""}`} onClick={() => setActivePage('writers')} href="#writers">
        <img src="/icons/research.svg" className="nav-icon" style={{height: '18px', width: '18px'}} /> Writers's Block
        <span className="nav-dot"></span>
      </a>
      <a className={`nav-item dept-blue ${activePage === "design" ? "active" : ""}`} onClick={() => setActivePage('design')} href="#design">
        <img src="/icons/design.svg" className="nav-icon" style={{height: '18px', width: '18px'}} /> Design Lab
        <span className="nav-dot"></span>
      </a>
      <a className={`nav-item dept-emerald ${activePage === "dev" ? "active" : ""}`} onClick={() => setActivePage('dev')} href="#dev">
        <img src="/icons/development.svg" className="nav-icon" style={{height: '18px', width: '18px'}} /> Development
        <span className="nav-dot"></span>
      </a>
      <a className={`nav-item dept-pink ${activePage === "marketing" ? "active" : ""}`} onClick={() => setActivePage('marketing')} href="#marketing">
        <img src="/icons/marketing.svg" className="nav-icon" style={{height: '18px', width: '18px'}} /> Marketing
        <span className="nav-dot"></span>
      </a>
      <a className={`nav-item dept-indigo ${activePage === "leadership" ? "active" : ""}`} onClick={() => setActivePage('leadership')} href="#leadership">
        <img src="/icons/leadership.svg" className="nav-icon" style={{height: '18px', width: '18px'}} /> Leadership
        <span className="nav-dot"></span>
      </a>
      <a className={`nav-item dept-accent ${activePage === "proofreaders" ? "active" : ""}`} onClick={() => setActivePage('proofreaders')} href="#proofreaders">
        <img src="/icons/research.svg" className="nav-icon" style={{height: '18px', width: '18px'}} /> Proofreaders
        <span className="nav-dot"></span>
      </a>
    </div>

    <div className="sidebar-section">
      <div className="sidebar-section-label">Platform</div>
      <a className={`nav-item ${activePage === "team" ? "active" : ""}`} onClick={() => setActivePage('team')} href="#team">
        <span className="nav-icon">🏢</span> Team Directory
      </a>
      <a className={`nav-item ${activePage === "applications" ? "active" : ""}`} onClick={() => setActivePage('applications')} href="#applications">
        <span className="nav-icon">📋</span> Applications
        <span className="nav-dot" style={{background: '#ec4899'}}></span>
      </a>
      <a className={`nav-item ${activePage === "comments" ? "active" : ""}`} onClick={() => setActivePage('comments')} href="#comments">
        <span className="nav-icon">💬</span> Task Comments
      </a>
      <a className={`nav-item ${activePage === "notifications" ? "active" : ""}`} onClick={() => setActivePage('notifications')} href="#notifications">
        <span className="nav-icon">🔔</span> Notifications
      </a>
      <a className={`nav-item ${activePage === "account" ? "active" : ""}`} onClick={() => setActivePage('account')} href="#account">
        <span className="nav-icon">⚙</span> Account & Settings
      </a>
    </div>
  
    </nav>
  );
}
