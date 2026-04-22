
'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [activePage, setActivePage] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on page change for mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="layout">

  {/*  Sidebar  */}
  <Sidebar activePage={activePage} setActivePage={setActivePage} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

  {/*  Main Content  */}
  <main className="main">

    {/*  OVERVIEW PAGE  */}
    <div className={`page-section ${activePage === "overview" ? "active" : ""}`} id="page-overview">
      <div className="hero anim anim-1">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Official Documentation</div>
        <h1>The <em>Carcino Vantage</em><br />Team Wiki</h1>
        <p>Your complete guide to every workflow in the platform — from writing your first article to approving content as Leadership. Upload screen recordings to each workflow card below.</p>
        <div className="hero-tags">
          <span className="hero-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writers' Block</span>
          <span className="hero-tag" style={{color: 'var(--blue)', borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>Design Lab</span>
          <span className="hero-tag" style={{color: 'var(--emerald)', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>Development</span>
          <span className="hero-tag" style={{color: 'var(--pink)', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>Marketing</span>
          <span className="hero-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span>
          <span className="hero-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>Proofreaders</span>
        </div>
      </div>

      <div className="section anim anim-2">
        <div className="section-header">
          <div className="section-eyebrow">Platform at a Glance</div>
          <h2 className="section-title">What is Carcino Vantage?</h2>
          <p className="section-desc">A full-stack content management and collaboration platform built for The Carcino Foundation's editorial workflows.</p>
        </div>

        <div className="overview-grid">
          <div className="ov-card">
            <div className="ov-card-icon">✎</div>
            <h3>Markdown Editor</h3>
            <p>A distraction-free editor with live preview, syntax highlighting, auto-save, and GFM support for all document types.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">◈</div>
            <h3>Task Management</h3>
            <p>Structured task pipelines with assignment, status tracking, proofreader queues, and leadership approval flows.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">📊</div>
            <h3>Department Dashboards</h3>
            <p>Role-specific dashboards for Writers, Design Lab, Development, Marketing, and Leadership with live analytics.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🔔</div>
            <h3>Push Notifications</h3>
            <p>Real-time push notifications keep every team member updated on task assignments, reviews, and deadlines.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🏗</div>
            <h3>Content Types</h3>
            <p>Supports Articles, Blog Posts, Survivor Stories, Cancer Docs, and Awareness Posts across all departments.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🌐</div>
            <h3>PWA + Mobile</h3>
            <p>Installable Progressive Web App with full mobile support, offline persistence, and swipe navigation.</p>
          </div>
        </div>

        <div className="callout">
          <h3>How to use this wiki</h3>
          <p>Navigate to your department using the sidebar. Each workflow card has a video slot — click <strong>"Upload Recording"</strong> on any card to attach your screen recording for that specific workflow. Videos are stored locally in your browser for easy reference.</p>
        </div>
      </div>
    </div>

    {/*  MOBILE GUIDE PAGE  */}
    <div className={`page-section ${activePage === "mobile" ? "active" : ""}`} id="page-mobile">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Mobile Navigation Centre</div>
        <h1>Mobile <em>Guide</em></h1>
        <p>How the app works differently on phones and tablets — the bottom navigation bar, docked toolbar, hamburger menus, and mobile-only interaction patterns across every page.</p>
        <div className="hero-tags">
          <span className="hero-tag" style={{color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>≤ 767px breakpoint</span>
          <span className="hero-tag" style={{color: '#10b981', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>PWA Ready</span>
          <span className="hero-tag" style={{color: '#3b82f6', borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>Touch Optimised</span>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Core Concept</div>
          <h2 className="section-title">Desktop vs Mobile Layout</h2>
          <p className="section-desc">On screens narrower than 768px, the entire navigation paradigm switches. The left sidebar disappears and a fixed bottom nav bar takes over. Modals resize to full-width. The editor toolbar docks to the bottom and becomes a flat scrollable strip.</p>
        </div>

        {/*  comparison table  */}
        <table className="wiki-table" style={{marginBottom: '40px'}}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Desktop</th>
              <th>Mobile (≤767px)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Navigation</strong></td>
              <td>Left sidebar with text labels</td>
              <td>Fixed bottom bar — icons + labels</td>
            </tr>
            <tr>
              <td><strong>Editor toolbar</strong></td>
              <td>Top bar, grouped by category (Headings / Style / Code / Insert / Lists)</td>
              <td>Bottom docked, flat horizontal scroll strip — all tools in one row</td>
            </tr>
            <tr>
              <td><strong>Editor view mode</strong></td>
              <td>Split view available (drag handle to resize)</td>
              <td>Editor-only by default — toggle to Preview via view mode buttons. No split view.</td>
            </tr>
            <tr>
              <td><strong>Sidebar (editor)</strong></td>
              <td>Left slide-out panel for document outline</td>
              <td>Hidden by default; accessible via hamburger in the header</td>
            </tr>
            <tr>
              <td><strong>Page header</strong></td>
              <td>Full header with search bar, icons, account menu</td>
              <td>Compact header with hamburger (☰) button that opens a slide-down panel</td>
            </tr>
            <tr>
              <td><strong>Modals</strong></td>
              <td>Fixed width (400–600px) centred on screen</td>
              <td>Full-width minus 32px padding, no centred positioning</td>
            </tr>
            <tr>
              <td><strong>Applications table</strong></td>
              <td>Wide table with mouse-drag scroll</td>
              <td>Touch-drag scroll horizontally to reveal all columns</td>
            </tr>
            <tr>
              <td><strong>Keyboard resize</strong></td>
              <td>Not applicable</td>
              <td>VisualViewport API adjusts editor height when keyboard opens so toolbar stays above keyboard</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*  SECTION: Bottom Nav Bar  */}
      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Primary Navigation</div>
          <h2 className="section-title">The Bottom Navigation Bar</h2>
          <p className="section-desc">The fixed bottom bar is the primary way to move between pages on mobile. It replaces the left sidebar entirely.</p>
        </div>

        {/*  Nav bar visual mockup  */}
        <div style={{background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px', marginBottom: '32px', maxWidth: '480px'}}>
          <div style={{fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text4)', marginBottom: '20px', textAlign: 'center'}}>MOBILE BOTTOM NAV BAR</div>
          <div style={{background: 'var(--bg3)', border: '1px solid var(--border-med)', borderRadius: '14px', padding: '12px 8px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '4px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 10px', borderRadius: '10px', background: 'var(--accent-sub)', border: '1px solid rgba(152,117,193,0.25)'}}>
              <span style={{fontSize: '18px'}}>🏠</span>
              <span style={{fontSize: '9px', fontWeight: '700', color: 'var(--accent-light)'}}>Overview</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 10px'}}>
              <span style={{fontSize: '18px'}}>🗂</span>
              <span style={{fontSize: '9px', color: 'var(--text3)'}}>Queues</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 10px', position: 'relative'}}>
              <span style={{fontSize: '18px'}}>💼</span>
              <span style={{fontSize: '9px', color: 'var(--text3)'}}>Tasks</span>
              <span style={{position: 'absolute', top: '0', right: '2px', background: '#ef4444', color: 'white', fontSize: '8px', fontWeight: '800', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>3</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 10px'}}>
              <span style={{fontSize: '18px'}}>👥</span>
              <span style={{fontSize: '9px', color: 'var(--text3)'}}>Team</span>
            </div>
          </div>
          <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '16px'}}>
            <div style={{background: 'var(--surface2)', borderRadius: '8px', padding: '6px 10px', fontSize: '11px', color: 'var(--text3)'}}>Writers' Block also shows: <strong style={{color: 'var(--text2)'}}>Articles</strong> + <strong style={{color: 'var(--text2)'}}>Blog Posts</strong></div>
          </div>
        </div>

        <div className="overview-grid" style={{marginBottom: '0'}}>
          <div className="ov-card">
            <div className="ov-card-icon">🏠</div>
            <h3>Overview (Home)</h3>
            <p>Links to <span className="kbd">/</span> — your department dashboard. Always the leftmost tab.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🗂</div>
            <h3>Queues</h3>
            <p>Links to <span className="kbd">/queues</span> — the proofreader queue page for reviewing tasks.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">📄</div>
            <h3>Articles + Blog Posts</h3>
            <p>Only visible for <strong>Writers' Block</strong> and <strong>Leadership</strong> (isFullSidebar). Links to filtered document views.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">💼</div>
            <h3>Assignments</h3>
            <p>Links to <span className="kbd">/tasks</span>. Shows a red badge with the count of pending tasks when you have open work.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">👥</div>
            <h3>Team</h3>
            <p>Links to <span className="kbd">/team</span>. Always shown as the last tab.</p>
          </div>
        </div>

        <div className="cards-grid" style={{marginTop: '32px'}}>
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-1">
              <video src="/videos/mob-1.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Navigating with the Bottom Bar</div>
              <div className="wf-desc">A walkthrough of the fixed bottom navigation bar — switching between Overview, Queues, Assignments, and Team using the tab icons.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Key Points</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>★</div><div className="wf-step-text">Tap any icon to navigate — the active tab gets an accent underline</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>★</div><div className="wf-step-text">Red badge on Assignments shows how many tasks are pending</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>★</div><div className="wf-step-text">On very small screens labels may hide — icons only mode</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-2">
              <video src="/videos/mob-2.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Using the Hamburger Menu (☰)</div>
              <div className="wf-desc">Opening the page-specific hamburger menu in the header to access settings, notifications, theme toggle, and page-specific controls.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>1</div><div className="wf-step-text">Tap the ☰ icon in the top-right of the header</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>2</div><div className="wf-step-text">A slide-down panel opens below the header</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>3</div><div className="wf-step-text">Access theme toggle, settings, notifications, search</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>4</div><div className="wf-step-text">Tap ☰ again or tap outside to close</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  SECTION: Mobile Editor  */}
      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Editor on Mobile</div>
          <h2 className="section-title">Writing on Your Phone</h2>
          <p className="section-desc">The editor has a completely different layout on mobile — optimised for one-handed writing with a keyboard-aware toolbar that floats above the on-screen keyboard.</p>
        </div>

        <div className="tip-box">
          <span className="tip-icon">⌨</span>
          <div className="tip-text">On mobile, the editor automatically defaults to <strong>Editor-only mode</strong>. The formatting toolbar moves to the <strong>bottom</strong> of the screen and sits just above the on-screen keyboard. As you type, the editor height adjusts using the <code style={{background: 'var(--surface2)', padding: '2px 5px', borderRadius: '4px', fontFamily: 'DM Mono', fontSize: '11px'}}>VisualViewport API</code> so the toolbar never gets hidden behind the keyboard.</div>
        </div>

        <div className="tip-box" style={{background: 'rgba(59,130,246,0.06)', borderColor: 'rgba(59,130,246,0.2)'}}>
          <span className="tip-icon">ℹ</span>
          <div className="tip-text" style={{color: 'var(--text2)'}}><strong style={{color: '#60a5fa'}}>Split view is not available on mobile.</strong> The drag-handle that lets you resize the editor/preview panes is hidden. Instead, use the view mode toggle buttons in the header to switch between Editor and Preview.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-3">
              <video src="/videos/mob-3.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writers</span></div>
              <div className="wf-title">Using the Bottom Toolbar in the Editor</div>
              <div className="wf-desc">The mobile toolbar is a flat horizontally-scrollable strip at the bottom. Swipe left/right to reveal all formatting tools (Bold, Italic, Headings, Lists, Code, Links etc.).</div>
              <div className="wf-steps">
                <div className="wf-steps-label">How It Works</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>★</div><div className="wf-step-text">Toolbar sits <strong>above your on-screen keyboard</strong></div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>★</div><div className="wf-step-text">Swipe the toolbar <strong>horizontally</strong> to see all tools — they're in a single scrollable row</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>★</div><div className="wf-step-text">Tap any tool icon to apply formatting to selected text</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>★</div><div className="wf-step-text">Icons are 40×40px touch targets — easier to tap than on desktop</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-4">
              <video src="/videos/mob-4.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writers</span></div>
              <div className="wf-title">Switching Between Editor and Preview (Mobile)</div>
              <div className="wf-desc">How to toggle from writing mode to reading the rendered Markdown preview on mobile — since split view isn't available.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>1</div><div className="wf-step-text">While in the Editor, tap the Preview icon (👁) in the header</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>2</div><div className="wf-step-text">The editor pane hides, preview fills the full screen</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>3</div><div className="wf-step-text">Tap the Editor icon (✎) to switch back to writing</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>4</div><div className="wf-step-text">The ⊞ split icon is greyed out — not available on mobile</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-5">
              <video src="/videos/mob-5.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Accessing the Guided Tour on Mobile</div>
              <div className="wf-desc">The Guided Tour on mobile is a simplified version with 5 steps (vs 7 on desktop), adapted for mobile interactions — no spotlight highlights, just centred modals.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Mobile Tour Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>1</div><div className="wf-step-text">✦ Welcome — overview of the app</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>2</div><div className="wf-step-text">✎ Toolbar — swipe horizontally at the bottom</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>3</div><div className="wf-step-text">⊞ Editor/Preview — use floating button to switch</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>4</div><div className="wf-step-text">≡ Outline — tap menu and select "Outline"</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>5</div><div className="wf-step-text">&gt; Commands — tap the search icon for quick commands</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  SECTION: Mobile-specific page differences  */}
      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Page-by-Page Differences</div>
          <h2 className="section-title">What Changes on Each Page</h2>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-6">
              <video src="/videos/mob-6.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Dashboard on Mobile</div>
              <div className="wf-desc">The main dashboard page on mobile — stat cards stack vertically, the document grid goes single-column, and quick action buttons wrap to fit the screen.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">What's Different</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text">Stat cards stack in a column (not a 4-wide grid)</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text">Quick action buttons may wrap to 2 columns</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text">All functionality identical — layout adapts only</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-7">
              <video src="/videos/mob-7.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--emerald)', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>Tasks</span></div>
              <div className="wf-title">Submitting Tasks on Mobile</div>
              <div className="wf-desc">The Task Submission Modal and Task Details Modal on mobile — they expand to near-full-screen width, making file upload and comment input comfortable on a phone.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">What's Different</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text">Modal is <span className="kbd">calc(100vw - 32px)</span> wide — full width</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text">Max height is <span className="kbd">calc(100vh - 32px)</span> with overflow scroll</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text">File picker works with camera — can take a photo as proof</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-8">
              <video src="/videos/mob-8.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span></div>
              <div className="wf-title">Applications Table on Mobile (Drag Scroll)</div>
              <div className="wf-desc">The internship applications table has many columns — on mobile, touch-drag horizontally across the table to scroll left and right and see all columns.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>1</div><div className="wf-step-text">Open the Applications tab on the Team page</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>2</div><div className="wf-step-text">Press and hold on the table, then drag left/right</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>3</div><div className="wf-step-text">Release to stop scrolling — cursor becomes a grab hand</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-mob-9">
              <video src="/videos/mob-9.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Mobile</span><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Installing the App (Add to Home Screen)</div>
              <div className="wf-desc">Installing Carcino Vantage as a PWA on your phone for a native-like experience — no App Store required.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">On iOS (Safari)</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Tap the Share button (box with arrow) in Safari</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Scroll down and tap "Add to Home Screen"</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Confirm — app icon appears on your home screen</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>A</div><div className="wf-step-text"><em>On Android:</em> Tap ⋮ menu → "Add to Home screen" or look for the install banner prompt</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  EDITOR PAGE  */}
    <div className={`page-section ${activePage === "editor" ? "active" : ""}`} id="page-editor">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Core Feature</div>
        <h1>The <em>Editor</em></h1>
        <p>A beautiful, minimal Markdown editor with live split-view, document outline, auto-save, and rich formatting tools.</p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Editor Interface</div>
          <h2 className="section-title">View Modes & Layout</h2>
          <p className="section-desc">The editor supports three view modes, toggled from the header.</p>
        </div>

        <div className="overview-grid" style={{marginBottom: '32px'}}>
          <div className="ov-card">
            <div className="ov-card-icon">⊞</div>
            <h3>Split View</h3>
            <p>Editor on the left, live Markdown preview on the right. Perfect for drafting and reviewing simultaneously.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">✎</div>
            <h3>Editor Only</h3>
            <p>Full-width CodeMirror 6 editor for distraction-free writing. All formatting shortcuts active.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">👁</div>
            <h3>Preview Only</h3>
            <p>Rendered Markdown output with syntax highlighting, GFM tables, task lists, and styled prose.</p>
          </div>
        </div>

        <div className="cards-grid">
          {/*  Card 1  */}
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-editor-1">
              <video src="/videos/editor-1.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span>
              </div>
              <div className="wf-title">Switching View Modes</div>
              <div className="wf-desc">How to switch between Editor-only, Split View, and Preview-only using the icons in the header bar.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div>
                  <div className="wf-step-text">Open the Editor page at <span className="kbd">/editor</span></div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div>
                  <div className="wf-step-text">Click the view mode icons in the top header (⊞ ✎ 👁)</div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div>
                  <div className="wf-step-text">Observe how the layout transitions between modes</div>
                </div>
              </div>
            </div>
          </div>

          {/*  Card 2  */}
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-editor-2">
              <video src="/videos/editor-2.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span>
              </div>
              <div className="wf-title">Using the Formatting Toolbar</div>
              <div className="wf-desc">Applying bold, italic, headings, lists, code blocks, links, tables, and horizontal rules using toolbar buttons or keyboard shortcuts.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Key Shortcuts</div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>B</div>
                  <div className="wf-step-text"><span className="kbd">Ctrl+B</span> — Bold selection</div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>I</div>
                  <div className="wf-step-text"><span className="kbd">Ctrl+I</span> — Italic selection</div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>K</div>
                  <div className="wf-step-text"><span className="kbd">Ctrl+K</span> — Open Command Palette</div>
                </div>
              </div>
            </div>
          </div>

          {/*  Card 3  */}
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-editor-3">
              <video src="/videos/editor-3.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span>
              </div>
              <div className="wf-title">Document Outline & Navigation</div>
              <div className="wf-desc">Using the left sidebar outline that auto-parses all headings. Click any heading to jump to it in the editor.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div>
                  <div className="wf-step-text">Add headings (##, ###) to your document</div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div>
                  <div className="wf-step-text">See them auto-appear in the left sidebar outline</div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div>
                  <div className="wf-step-text">Click a heading in the outline to jump the editor to that section</div>
                </div>
              </div>
            </div>
          </div>

          {/*  Card 4  */}
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-editor-4">
              <video src="/videos/editor-4.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span>
              </div>
              <div className="wf-title">Export & Save Documents</div>
              <div className="wf-desc">Exporting your document as Markdown (.md) or styled HTML. Auto-save runs every 800ms to localStorage.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div>
                  <div className="wf-step-text">Click the export icon in the header toolbar</div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div>
                  <div className="wf-step-text">Choose "Export as .md" or "Export as HTML"</div>
                </div>
                <div className="wf-step">
                  <div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div>
                  <div className="wf-step-text">File downloads immediately — no manual save needed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  TASKS PAGE  */}
    <div className={`page-section ${activePage === "tasks" ? "active" : ""}`} id="page-tasks">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Core Feature</div>
        <h1>Tasks & <em>Status Flow</em></h1>
        <p>How tasks move through the pipeline from creation to final approval — and what each status means.</p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Status Pipeline</div>
          <h2 className="section-title">Task Lifecycle</h2>
        </div>

        <div className="status-flow">
          <span className="status-chip" style={{color: '#94a3b8', borderColor: 'rgba(148,163,184,0.3)', background: 'rgba(148,163,184,0.08)'}}>📋 To Do</span>
          <span className="status-arrow">→</span>
          <span className="status-chip" style={{color: '#3b82f6', borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>⚡ In Progress</span>
          <span className="status-arrow">→</span>
          <span className="status-chip" style={{color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>📝 Ready for Proofread</span>
          <span className="status-arrow">→</span>
          <span className="status-chip" style={{color: '#ec4899', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>🔍 Proofreading</span>
          <span className="status-arrow">→</span>
          <span className="status-chip" style={{color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.08)'}}>⬆ Ready for Upload</span>
          <span className="status-arrow">→</span>
          <span className="status-chip" style={{color: '#9875c1', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>👁 In Review</span>
          <span className="status-arrow">→</span>
          <span className="status-chip" style={{color: '#10b981', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>✓ Done</span>
        </div>

        <table className="wiki-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Who Acts</th>
              <th>What Happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="role-badge" style={{color: '#94a3b8', borderColor: 'rgba(148,163,184,0.3)', background: 'rgba(148,163,184,0.08)'}}>📋 To Do</span></td>
              <td>Writer / Assignee</td>
              <td>Task created and assigned. Writer picks it up and starts work.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: '#3b82f6', borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>⚡ In Progress</span></td>
              <td>Writer</td>
              <td>Writer is actively working on the document in the Editor.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>📝 Ready for Proofread</span></td>
              <td>Writer → Proofreader</td>
              <td>Writer marks draft complete. Task enters the Proofreader Queue.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: '#ec4899', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>🔍 Proofreading</span></td>
              <td>Proofreader</td>
              <td>Proofreader claims the task and actively reviews the document.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.08)'}}>⬆ Ready for Upload</span></td>
              <td>Proofreader → Leadership</td>
              <td>Proofreader approves. Task is ready for final publishing decision.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: '#9875c1', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>👁 In Review</span></td>
              <td>Leadership</td>
              <td>Submission media uploaded. Leadership reviews before final approval.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: '#10b981', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>✓ Done</span></td>
              <td>Leadership</td>
              <td>Task fully approved and published. Counted in completion metrics.</td>
            </tr>
          </tbody>
        </table>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint">
                <div className="upload-hint-icon" style={{background: 'var(--accent-sub)'}}>🎬</div>
                <div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div>
              </div>
              <video id="vid-task-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writers</span></div>
              <div className="wf-title">Creating & Submitting a Task</div>
              <div className="wf-desc">How to pick up a task, work on it in the Editor, and submit with proof of work media when complete.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>1</div><div className="wf-step-text">Go to Tasks page, find your assigned task</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>2</div><div className="wf-step-text">Click "Start" to move to In Progress</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>3</div><div className="wf-step-text">Write in the Editor — auto-save is active</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>4</div><div className="wf-step-text">Click Submit, upload proof media, confirm</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint">
                <div className="upload-hint-icon" style={{background: 'var(--accent-sub)'}}>🎬</div>
                <div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div>
              </div>
              <video id="vid-task-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span></div>
              <div className="wf-title">Assigning a Task to a Team Member</div>
              <div className="wf-desc">Leadership creates a task and assigns it to a specific team member via the Assign Task modal.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Click "+ Assign Task" from the dashboard</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Fill title, description, category, priority, due date</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">Select department and assignee</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Confirm — assignee receives push notification</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  WRITERS PAGE  */}
    <div className={`page-section ${activePage === "writers" ? "active" : ""}`} id="page-writers">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Department</div>
        <h1>Writers' <em>Block</em></h1>
        <p>Workflows for Writers — from creating documents to submitting tasks for proofreading and tracking your word count goals.</p>
      </div>

      <div className="section">
        <div className="dept-header bg-amber" style={{borderColor: 'rgba(245,158,11,0.3)'}}>
          <div className="dept-header-icon" style={{background: 'rgba(245,158,11,0.15)', fontSize: '26px'}}><img src="/icons/research.svg" style={{height: '32px', width: '32px'}} /></div>
          <div>
            <h2 className="c-amber">Writers' Block</h2>
            <p className="c-amber" style={{opacity: '0.7'}}>Content & Research Department</p>
          </div>
          <div className="dept-header-badge c-amber" style={{borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Content & Research</div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div className="tip-text">Writers can create <strong>Articles</strong>, <strong>Blog Posts</strong>, and <strong>Survivor Stories</strong>. Your dashboard shows total word count, weekly output, and a live activity graph. The word goal tracker updates in real time as you write.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(245,158,11,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-wr-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writer</span></div>
              <div className="wf-title">Creating a New Article</div>
              <div className="wf-desc">Start a new research article or cancer document from the Writers' dashboard Quick Actions.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>1</div><div className="wf-step-text">Click "New Article" quick action on your dashboard</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>2</div><div className="wf-step-text">Select document type in the Initial Type Modal</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>3</div><div className="wf-step-text">Begin writing — auto-save keeps every change</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(245,158,11,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-wr-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writer</span></div>
              <div className="wf-title">Writing a Blog Post</div>
              <div className="wf-desc">Creating perspective-driven blog content and using the editor's Markdown features effectively for blog format.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>1</div><div className="wf-step-text">Click "New Blog Post" from quick actions</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>2</div><div className="wf-step-text">Write your intro, body sections with ## headings</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>3</div><div className="wf-step-text">Use Split View to check formatting in preview</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(245,158,11,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-wr-3" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writer</span></div>
              <div className="wf-title">Submitting a Survivor Story</div>
              <div className="wf-desc">How to write and submit a community survivor story through the platform with appropriate tone and structure.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>1</div><div className="wf-step-text">Click "Survivor Story" quick action</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>2</div><div className="wf-step-text">Write the story following editorial guidelines</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>3</div><div className="wf-step-text">Submit for proofreading via task workflow</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(245,158,11,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-wr-4" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writer</span></div>
              <div className="wf-title">Tracking Word Count & Goals</div>
              <div className="wf-desc">How the dashboard shows total words, weekly output, and the word goal progress bar in real time.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Where to Find</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>★</div><div className="wf-step-text">Stats grid: Total Words, This Week, Published, Word Goal</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--amber)'}}>★</div><div className="wf-step-text">Activity chart shows daily word output for the week</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  DESIGN PAGE  */}
    <div className={`page-section ${activePage === "design" ? "active" : ""}`} id="page-design">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Department</div>
        <h1><em>Design</em> Lab</h1>
        <p>Workflows for the Design Lab team — managing creative tasks, awareness posts, and design deliverables.</p>
      </div>

      <div className="section">
        <div className="dept-header bg-blue" style={{borderColor: 'rgba(59,130,246,0.3)'}}>
          <div className="dept-header-icon" style={{background: 'rgba(59,130,246,0.15)', fontSize: '26px'}}><img src="/icons/design.svg" style={{height: '32px', width: '32px'}} /></div>
          <div>
            <h2 className="c-blue">Design Lab</h2>
            <p className="c-blue" style={{opacity: '0.7'}}>Creative & UI Department</p>
          </div>
          <div className="dept-header-badge c-blue" style={{borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>Creative & UI</div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div className="tip-text">Design Lab tasks include <strong>Awareness Posts</strong>, campaign visuals, and UI assets. Tasks flow through the same pipeline — get assigned, work in your tool of choice, then submit via the task card with your deliverable as proof of work.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(59,130,246,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-dl-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--blue)', borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>Design</span></div>
              <div className="wf-title">Picking Up a Design Task</div>
              <div className="wf-desc">Finding your assigned design task in the Design Lab dashboard and understanding the task brief.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>1</div><div className="wf-step-text">Navigate to your Design Lab dashboard</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>2</div><div className="wf-step-text">Find tasks in "To Do" status with your name</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>3</div><div className="wf-step-text">Click the task card to view full brief and due date</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(59,130,246,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-dl-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--blue)', borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>Design</span></div>
              <div className="wf-title">Submitting a Design Deliverable</div>
              <div className="wf-desc">Uploading your completed design (image or video) as proof of work and moving the task to In Review.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>1</div><div className="wf-step-text">Open the task card, click "Submit Task"</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>2</div><div className="wf-step-text">Upload your design file (image or short video)</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--blue)'}}>3</div><div className="wf-step-text">Status moves to In Review automatically</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  DEV PAGE  */}
    <div className={`page-section ${activePage === "dev" ? "active" : ""}`} id="page-dev">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Department</div>
        <h1><em>Development</em></h1>
        <p>Workflows for the Development team — tracking GitHub metrics, managing issues, and coordinating technical tasks.</p>
      </div>

      <div className="section">
        <div className="dept-header bg-emerald" style={{borderColor: 'rgba(16,185,129,0.3)'}}>
          <div className="dept-header-icon" style={{background: 'rgba(16,185,129,0.15)', fontSize: '26px'}}><img src="/icons/development.svg" style={{height: '32px', width: '32px'}} /></div>
          <div>
            <h2 className="c-emerald">Development</h2>
            <p className="c-emerald" style={{opacity: '0.7'}}>Engineering Department</p>
          </div>
          <div className="dept-header-badge c-emerald" style={{borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>Engineering</div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div className="tip-text">The Development dashboard pulls <strong>live GitHub stats</strong> for <code style={{background: 'var(--surface2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'DM Mono'}}>project-scribe</code> and <code style={{background: 'var(--surface2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'DM Mono'}}>carcino-fighters-website</code> — including total commits, open PRs, and weekly contribution activity.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(16,185,129,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-dev-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--emerald)', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>Developer</span></div>
              <div className="wf-title">Reading the Development Dashboard</div>
              <div className="wf-desc">Understanding the GitHub stats panel — commits, PRs merged, open issues, and weekly contribution graph.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Metrics Explained</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text"><strong>Total Commits</strong> — across all tracked repos</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text"><strong>PRs Merged</strong> — total merged pull requests</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>★</div><div className="wf-step-text"><strong>API Status</strong> — health of backend services</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(16,185,129,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-dev-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--emerald)', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>Developer</span></div>
              <div className="wf-title">Tracking Technical Tasks</div>
              <div className="wf-desc">Managing development tasks in the platform — bug fixes, feature builds, and infrastructure work through the task pipeline.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>1</div><div className="wf-step-text">Check Tasks page for development assignments</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>2</div><div className="wf-step-text">Update status as you progress (Todo → In Progress)</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--emerald)'}}>3</div><div className="wf-step-text">Submit with a PR link or screenshot as proof</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  MARKETING PAGE  */}
    <div className={`page-section ${activePage === "marketing" ? "active" : ""}`} id="page-marketing">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Department</div>
        <h1><em>Marketing</em></h1>
        <p>Workflows for the Marketing team — reading analytics, tracking campaigns, and managing growth tasks.</p>
      </div>

      <div className="section">
        <div className="dept-header bg-pink" style={{borderColor: 'rgba(236,72,153,0.3)'}}>
          <div className="dept-header-icon" style={{background: 'rgba(236,72,153,0.15)', fontSize: '26px'}}><img src="/icons/marketing.svg" style={{height: '32px', width: '32px'}} /></div>
          <div>
            <h2 className="c-pink">Marketing</h2>
            <p className="c-pink" style={{opacity: '0.7'}}>Growth & Analytics Department</p>
          </div>
          <div className="dept-header-badge c-pink" style={{borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>Growth & Analytics</div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div className="tip-text">The Marketing dashboard connects to <strong>Google Analytics (GA4)</strong> and displays total active users, page views, and bounce rate for the past 7 days. Use this to track campaign performance and content reach.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(236,72,153,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-mkt-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--pink)', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>Marketing</span></div>
              <div className="wf-title">Reading the Analytics Dashboard</div>
              <div className="wf-desc">Understanding GA4 metrics — active users, page views, bounce rate, and the daily page view chart.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Key Metrics</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>★</div><div className="wf-step-text"><strong>Active Users</strong> — unique visitors in past 7 days</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>★</div><div className="wf-step-text"><strong>Page Views</strong> — total content views</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>★</div><div className="wf-step-text"><strong>Bounce Rate</strong> — average session quality</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(236,72,153,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-mkt-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--pink)', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>Marketing</span></div>
              <div className="wf-title">Managing Awareness Post Tasks</div>
              <div className="wf-desc">How marketing tasks for social awareness posts move from brief to approval through the task pipeline.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>1</div><div className="wf-step-text">Receive awareness_post task from Leadership</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>2</div><div className="wf-step-text">Create content in your platform of choice</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(236,72,153,0.1)', color: 'var(--pink)'}}>3</div><div className="wf-step-text">Submit with screenshot/video as proof of work</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  LEADERSHIP PAGE  */}
    <div className={`page-section ${activePage === "leadership" ? "active" : ""}`} id="page-leadership">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Department</div>
        <h1><em>Leadership</em></h1>
        <p>Workflows for Leadership — assigning tasks, reviewing submissions, approving content, and monitoring org-wide performance.</p>
      </div>

      <div className="section">
        <div className="dept-header bg-indigo" style={{borderColor: 'rgba(99,102,241,0.3)'}}>
          <div className="dept-header-icon" style={{background: 'rgba(99,102,241,0.15)', fontSize: '26px'}}><img src="/icons/leadership.svg" style={{height: '32px', width: '32px'}} /></div>
          <div>
            <h2 className="c-indigo">Leadership</h2>
            <p className="c-indigo" style={{opacity: '0.7'}}>Organizational Oversight</p>
          </div>
          <div className="dept-header-badge c-indigo" style={{borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Oversight</div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div className="tip-text">Leadership has <strong>full visibility</strong> across all departments. The dashboard lets you filter by department to see that team's metrics, task queue, completion rate, and work velocity — or view the global org overview.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(99,102,241,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-ld-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span></div>
              <div className="wf-title">Assigning Tasks to Team Members</div>
              <div className="wf-desc">Creating new tasks and assigning them to specific members across any department with priority, due date, and category.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Click "+ Assign Task" button on dashboard</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Fill in title, description, type, priority, due date</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">Select department and assignee user</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Submit — push notification sent to assignee</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(99,102,241,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-ld-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span></div>
              <div className="wf-title">Reviewing & Approving Submissions</div>
              <div className="wf-desc">Viewing submitted work in the Review Queue, checking proof of work media, and approving or rejecting tasks.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Navigate to the Review Queue</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Open a task in "In Review" status</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">View the submission media and document</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Click Approve → status moves to Done</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(99,102,241,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-ld-3" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span></div>
              <div className="wf-title">Monitoring Department Performance</div>
              <div className="wf-desc">Using the department selector cards to drill into each team's stats — completion rate, approval rate, and velocity.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Dashboard Features</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>★</div><div className="wf-step-text">Click a dept card to filter all metrics to that team</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>★</div><div className="wf-step-text">Global view when no dept is selected</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>★</div><div className="wf-step-text">Activity chart updates to show that dept's output</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(99,102,241,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-ld-4" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span></div>
              <div className="wf-title">Inviting New Team Members</div>
              <div className="wf-desc">Sending invitations to new users and assigning them to departments using the Invite User modal.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Open Account menu → Invite User</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Enter the user's email address</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">Select their department assignment</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Invitation email is sent via Supabase Auth</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  PROOFREADERS PAGE  */}
    <div className={`page-section ${activePage === "proofreaders" ? "active" : ""}`} id="page-proofreaders">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Role</div>
        <h1><em>Proofreaders</em></h1>
        <p>Workflows for Proofreaders — claiming tasks from the proofreader queue, reviewing documents, and forwarding approved work.</p>
      </div>

      <div className="section">
        <div className="dept-header bg-accent" style={{borderColor: 'rgba(152,117,193,0.3)'}}>
          <div className="dept-header-icon" style={{background: 'rgba(152,117,193,0.15)', fontSize: '26px'}}><img src="/icons/research.svg" style={{height: '32px', width: '32px'}} /></div>
          <div>
            <h2 className="c-accent">Proofreaders</h2>
            <p className="c-accent" style={{opacity: '0.7'}}>Quality & Editorial Review</p>
          </div>
          <div className="dept-header-badge c-accent" style={{borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>Editorial Review</div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div className="tip-text">Proofreaders have a dedicated <strong>Proofreader Queue</strong> at <span className="kbd">/queues</span>. Tasks appear here once a writer marks them "Ready for Proofreading." You claim a task, review the document, then move it to "Ready for Upload" when approved.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(152,117,193,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-pr-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>Proofreader</span></div>
              <div className="wf-title">Accessing the Proofreader Queue</div>
              <div className="wf-desc">How to navigate to the Queues page and find tasks waiting for proofreading in your department.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Navigate to <span className="kbd">/queues</span> in the sidebar</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">See all tasks in "Ready for Proofreading" status</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Click a task to claim and begin reviewing</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(152,117,193,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-pr-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>Proofreader</span></div>
              <div className="wf-title">Reviewing a Document</div>
              <div className="wf-desc">Opening the linked document, reading through it in the Editor preview, and noting any corrections needed.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Open the document from the task card</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Use Preview mode to read the rendered document</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Add comments or corrections via task comments</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'rgba(152,117,193,0.1)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-pr-3" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>Proofreader</span></div>
              <div className="wf-title">Approving & Forwarding Content</div>
              <div className="wf-desc">Once satisfied with the document quality, marking it "Ready for Upload" to forward to Leadership review.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Open the task details modal</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Click "Approve" or set status to Ready for Upload</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(152,117,193,0.1)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Task moves to Leadership review queue</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  TEAM PAGE  */}
    <div className={`page-section ${activePage === "team" ? "active" : ""}`} id="page-team">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Platform Feature</div>
        <h1>Team <em>Directory</em></h1>
        <p>The Team page at <span className="kbd" style={{fontSize: '15px'}}>/team</span> shows every member of The Carcino Foundation, grouped by department, with filtering, search, and direct task assignment.</p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Page Overview</div>
          <h2 className="section-title">What's on the Team Page</h2>
          <p className="section-desc">A full directory of all active members, sorted by department, with GitHub and LinkedIn links on each member card.</p>
        </div>

        <div className="overview-grid" style={{marginBottom: '32px'}}>
          <div className="ov-card">
            <div className="ov-card-icon">🔍</div>
            <h3>Search & Filter</h3>
            <p>Search by name, email, or department. Filter by "All Members", "Admins", or any specific department from the sidebar or tab bar.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🏷</div>
            <h3>Department Grouping</h3>
            <p>Members are automatically grouped under: Leadership (01), Writers' Block (02), Public Relations (03), Design Lab (04), Development (05).</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🛡</div>
            <h3>Admin Badge</h3>
            <p>Members with <code style={{background: 'var(--surface2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'DM Mono'}}>admin_access = true</code> show a shield badge and "Admin" tag on their card.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">⚡</div>
            <h3>Quick Assign</h3>
            <p>Admins and Leadership can click "Assign" on any member card to immediately open the Assign Task Modal pre-filled with that member.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🌐</div>
            <h3>Social Links</h3>
            <p>Each card shows GitHub and LinkedIn links built from the member's username, allowing quick professional profile access.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🟢</div>
            <h3>Active Status</h3>
            <p>A small green or grey dot on each avatar indicates whether the member is currently active or inactive in the system.</p>
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">👥</span>
          <div className="tip-text">The <strong>Applications</strong> tab in the Team page sidebar is only visible to Leadership. It switches the main content from the member directory to the full internship applications table pulled from Google Sheets.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-team-1">
              <video src="/videos/team-1.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span>
              </div>
              <div className="wf-title">Browsing the Team Directory</div>
              <div className="wf-desc">Navigating the /team page — using the department tabs, scrolling through member cards, and using the search bar to find a specific person.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Click "Team" in the main sidebar navigation</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Use the filter bar tabs to narrow by department</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Type in the search box to find members by name or email</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>4</div><div className="wf-step-text">Click GitHub or LinkedIn on a card to visit their profile</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-team-2">
              <video src="/videos/team-2.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span>
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>Admins</span>
              </div>
              <div className="wf-title">Assigning a Task from the Team Page</div>
              <div className="wf-desc">Using the quick "Assign" button on a member card to open the Assign Task Modal pre-filled with that team member as the assignee.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Find the team member you want to assign a task to</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Click the "+ Assign" button at the bottom of their card</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">Fill in the task details in the modal that opens</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Submit — the member is notified via push notification</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  APPLICATIONS PAGE  */}
    <div className={`page-section ${activePage === "applications" ? "active" : ""}`} id="page-applications">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Leadership Only</div>
        <h1>Internship <em>Applications</em></h1>
        <p>The Recruitment Bureau — a live table of all internship applications submitted through the Foundation's Google Forms, pulled directly from Google Sheets.</p>
      </div>

      <div className="section">
        <div className="dept-header bg-pink" style={{borderColor: 'rgba(236,72,153,0.3)'}}>
          <div className="dept-header-icon" style={{background: 'rgba(236,72,153,0.15)', fontSize: '26px'}}>📋</div>
          <div>
            <h2 className="c-pink">Recruitment Bureau</h2>
            <p className="c-pink" style={{opacity: '0.7'}}>Leadership access only — via Team → Applications tab</p>
          </div>
          <div className="dept-header-badge" style={{color: '#ec4899', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>🔒 Leadership</div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">🔒</span>
          <div className="tip-text"><strong>Access:</strong> Only users with <code style={{background: 'var(--surface2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'DM Mono'}}>department = "Leadership"</code> can see the Applications tab. It appears in both the Team page sidebar and the filter bar. The data is fetched live from Google Sheets via <span className="kbd">/api/applications</span> and connected to Google Cloud Identity Platform (v4.0.1).</div>
        </div>

        <div className="section-header" style={{marginTop: '32px'}}>
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">Applications Table Features</h2>
        </div>

        <div className="overview-grid" style={{marginBottom: '32px'}}>
          <div className="ov-card">
            <div className="ov-card-icon">📊</div>
            <h3>Department Tabs</h3>
            <p>Filter applications by: <strong>ALL</strong>, Development, Writers' Block, Design Lab, or Marketing. Each tab shows a count of applications received for that department.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🔍</div>
            <h3>Live Search</h3>
            <p>The search bar filters all visible rows in real time — search by applicant name, email, portfolio URL, or any cell content in the table.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🔗</div>
            <h3>Clickable Links</h3>
            <p>Any URLs in the application (portfolio, GitHub, LinkedIn, Google Drive links) are automatically rendered as clickable links that open in a new tab.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">↔</div>
            <h3>Horizontal Scroll</h3>
            <p>The table can be scrolled horizontally by dragging — click and drag left/right on the table to reveal all columns without losing context.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🏷</div>
            <h3>ALL View</h3>
            <p>The "ALL" tab combines every department's applications into a single table with a "DEPARTMENT" column automatically injected so you can see the full picture at once.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">⏱</div>
            <h3>Timestamps</h3>
            <p>Every row includes the original Google Form submission timestamp, so you can see exactly when each candidate applied.</p>
          </div>
        </div>

        <table className="wiki-table">
          <thead>
            <tr>
              <th>Department Tab</th>
              <th>Data Source</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="role-badge" style={{color: 'var(--text2)', borderColor: 'var(--border-med)', background: 'var(--surface2)'}}>ALL</span></td>
              <td>All sheets combined</td>
              <td>Adds a "DEPARTMENT" column automatically. Shows total count across all departments.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: 'var(--emerald)', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.08)'}}>Development</span></td>
              <td>Development Google Sheet</td>
              <td>Engineering applicants — expect GitHub links, technical skills, project portfolios.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: 'var(--amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)'}}>Writers' Block</span></td>
              <td>Writers' Block Google Sheet</td>
              <td>Content applicants — writing samples, blog links, research interests.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: 'var(--blue)', borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)'}}>Design Lab</span></td>
              <td>Design Lab Google Sheet</td>
              <td>Creative applicants — Figma portfolios, Behance/Dribbble links, UI samples.</td>
            </tr>
            <tr>
              <td><span className="role-badge" style={{color: 'var(--pink)', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)'}}>Marketing</span></td>
              <td>Marketing Google Sheet</td>
              <td>Growth applicants — social media links, campaign experience, analytics knowledge.</td>
            </tr>
          </tbody>
        </table>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-app-1">
              <video src="/videos/app-1.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span>
              </div>
              <div className="wf-title">Accessing the Applications Table</div>
              <div className="wf-desc">How Leadership navigates to the Recruitment Bureau — from the Team page sidebar or the filter tab bar — to view all submitted applications.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Go to the Team page via the main sidebar</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Click "Applications" in the left sidebar or filter bar</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">The Recruitment Bureau table loads from Google Sheets</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Use the dept tabs to view per-department applications</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-app-2">
              <video src="/videos/app-2.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span>
              </div>
              <div className="wf-title">Searching & Filtering Applicants</div>
              <div className="wf-desc">Using the real-time search bar and department tabs to find specific applicants and review their submitted details and portfolio links.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Type a name or keyword in the "SEARCH RECORDS..." box</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Table filters live — any matching cell highlights the row</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">Click any URL in the table to open their portfolio/links</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Drag horizontally on the table to scroll and see all columns</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-app-3">
              <video src="/videos/app-3.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span>
              </div>
              <div className="wf-title">Reviewing & Acting on an Application</div>
              <div className="wf-desc">Reading an application in full, reviewing portfolio links, and then taking the next step — inviting accepted candidates via the Invite User modal.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">After Reviewing</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Review the applicant's answers and portfolio links</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">If accepted, go to Team → click "+ Invite" button</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">Enter their email and assign to the correct department</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">They receive a Supabase Auth invite to join the platform</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  TASK COMMENTS PAGE  */}
    <div className={`page-section ${activePage === "comments" ? "active" : ""}`} id="page-comments">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Platform Feature</div>
        <h1>Task <em>Comments</em></h1>
        <p>Every task has a threaded comment feed built in — team members can leave notes, feedback, and status updates directly on the task, creating a full audit trail.</p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-eyebrow">Comments System</div>
          <h2 className="section-title">How Task Comments Work</h2>
          <p className="section-desc">The comment thread lives inside the Task Details Modal. It supports three types of entries: regular comments, status changes, and reassignment logs.</p>
        </div>

        <div className="overview-grid" style={{marginBottom: '32px'}}>
          <div className="ov-card">
            <div className="ov-card-icon">💬</div>
            <h3>Comments</h3>
            <p>Any team member can type a message into the "Type a message..." input and hit Send (or <span className="kbd">Enter</span>) to post. Comments show the sender's avatar, name, and timestamp.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">🔄</div>
            <h3>Status Change Logs</h3>
            <p>When a task's status changes, an automatic system entry is added to the feed — showing exactly who changed what and when, with a refresh icon to distinguish it from manual comments.</p>
          </div>
          <div className="ov-card">
            <div className="ov-card-icon">↪</div>
            <h3>Reassignment Logs</h3>
            <p>When Leadership reassigns a task to a different person, the thread logs the reassignment with the reason entered — keeping a clear record of ownership changes.</p>
          </div>
        </div>

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div className="tip-text">The comment thread auto-scrolls to the <strong>latest message</strong> every time a new comment is posted. There is no need to scroll manually — it behaves like a chat window. Comments are stored in Supabase and persist permanently on the task.</div>
        </div>

        <div className="tip-box" style={{background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.2)'}}>
          <span className="tip-icon">⚠</span>
          <div className="tip-text" style={{color: 'var(--text2)'}}><strong style={{color: '#f87171'}}>Where to find it:</strong> Open any task card → click the task title or the details icon → the Task Details Modal opens. Scroll down past the task metadata to reach the <strong>Comments</strong> section at the bottom of the modal.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-cmt-1">
              <video src="/videos/cmt-1.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span>
              </div>
              <div className="wf-title">Opening the Task Details Modal</div>
              <div className="wf-desc">How to open the Task Details Modal from a task card and navigate to the comments section at the bottom.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Navigate to the Tasks page or your dashboard</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Click on a task card to open its Details Modal</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Scroll down inside the modal to the Comments section</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>4</div><div className="wf-step-text">See all past comments, status logs, and reassignment notes</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-cmt-2">
              <video src="/videos/cmt-2.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span>
              </div>
              <div className="wf-title">Posting a Comment on a Task</div>
              <div className="wf-desc">Typing and sending a comment or feedback message on a task — useful for asking questions, flagging issues, or leaving proofreading notes.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Open the Task Details Modal for the relevant task</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Click the "Type a message..." input at the bottom</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Type your message and click the Send (➤) button</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>4</div><div className="wf-step-text">Your comment appears instantly with your avatar and name</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot has-video" id="slot-cmt-3">
              <video src="/videos/cmt-3.mp4" controls></video>
            </div>
            <div className="wf-body">
              <div className="wf-tags">
                <span className="wf-tag" style={{color: 'var(--indigo)', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)'}}>Leadership</span>
                <span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>Admins</span>
              </div>
              <div className="wf-title">Reassigning a Task with a Reason</div>
              <div className="wf-desc">How Leadership can reassign a task to a different team member — and enter a reason that gets permanently logged in the comment thread.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>1</div><div className="wf-step-text">Open the Task Details Modal (admin view)</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>2</div><div className="wf-step-text">Click "Reassign" and select the new assignee</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>3</div><div className="wf-step-text">Enter the reason for reassignment in the text field</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)'}}>4</div><div className="wf-step-text">Confirm — a reassignment log appears in the comment thread</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  NOTIFICATIONS PAGE  */}
    <div className={`page-section ${activePage === "notifications" ? "active" : ""}`} id="page-notifications">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Platform Feature</div>
        <h1>Push <em>Notifications</em></h1>
        <p>How the platform keeps every team member informed with real-time browser push notifications.</p>
      </div>

      <div className="section">
        <div className="tip-box">
          <span className="tip-icon">🔔</span>
          <div className="tip-text">Notifications are powered by the <strong>Web Push API</strong> with VAPID keys. Users must grant browser permission once. Notifications fire automatically when tasks are assigned, reach review status, or deadlines approach.</div>
        </div>

        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'var(--accent-sub)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-notif-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Enabling Push Notifications</div>
              <div className="wf-desc">Granting browser notification permission and subscribing to push alerts in your profile settings.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Open your Profile / Settings page</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Click "Enable Notifications"</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Allow browser permission prompt</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>4</div><div className="wf-step-text">Subscription saved — you'll receive alerts instantly</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  ACCOUNT PAGE  */}
    <div className={`page-section ${activePage === "account" ? "active" : ""}`} id="page-account">
      <div className="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Platform Feature</div>
        <h1>Account & <em>Settings</em></h1>
        <p>Managing your profile, avatar, department assignment, theme preferences, and PWA installation.</p>
      </div>

      <div className="section">
        <div className="cards-grid">
          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'var(--accent-sub)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-acc-1" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Updating Your Profile & Avatar</div>
              <div className="wf-desc">Changing your display name, uploading a profile photo, and setting your department in the Profile page.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Click your avatar in the top-right header</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Select "Profile" from the account menu</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Upload avatar (auto-cropped), update name, save</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'var(--accent-sub)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-acc-2" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Light / Dark Mode & Themes</div>
              <div className="wf-desc">Toggling between light and dark themes and how preferences persist across sessions.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Click the theme toggle icon in the header</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">Theme switches immediately across all UI</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">Preference saved to localStorage automatically</div></div>
              </div>
            </div>
          </div>

          <div className="workflow-card">
            <div className="wf-video-slot" >
              <div className="upload-hint"><div className="upload-hint-icon" style={{background: 'var(--accent-sub)'}}>🎬</div><div className="upload-hint-text"><p>Video Coming Soon</p><span>Recording will appear here</span></div></div>
              <video id="vid-acc-3" controls></video>
              </div>
            <div className="wf-body">
              <div className="wf-tags"><span className="wf-tag" style={{color: 'var(--accent-light)', borderColor: 'rgba(152,117,193,0.3)', background: 'rgba(152,117,193,0.08)'}}>All Roles</span></div>
              <div className="wf-title">Installing as a PWA</div>
              <div className="wf-desc">Installing Carcino Vantage as a Progressive Web App on mobile or desktop for native-like access.</div>
              <div className="wf-steps">
                <div className="wf-steps-label">Steps</div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>1</div><div className="wf-step-text">Look for the Install prompt in the header or browser</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>2</div><div className="wf-step-text">On mobile: Share → Add to Home Screen</div></div>
                <div className="wf-step"><div className="wf-step-num" style={{background: 'var(--accent-sub)', color: 'var(--accent-light)'}}>3</div><div className="wf-step-text">App installs with full-screen experience + offline support</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</div>
      <button 
        className="mobile-toggle" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
    </>
  );
}
