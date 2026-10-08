import { useState } from "react";
import "./App.css";

const pipeline = [
  {
    name: "Source",
    icon: "⌘",
    status: "success",
    detail: "Code checkout",
  },
  {
    name: "Build",
    icon: "⚙",
    status: "success",
    detail: "npm run build",
  },
  {
    name: "Test",
    icon: "✓",
    status: "success",
    detail: "124 tests passed",
  },
  {
    name: "Lint",
    icon: "◈",
    status: "success",
    detail: "No issues found",
  },
  {
    name: "Package",
    icon: "📦",
    status: "running",
    detail: "Creating artifact",
  },
];

const commits = [
  {
    hash: "a8f42c1",
    message: "Update authentication flow",
    author: "Vaman",
    time: "2 min ago",
  },
  {
    hash: "7d91e3b",
    message: "Improve dashboard animations",
    author: "Alex",
    time: "18 min ago",
  },
  {
    hash: "f31a8d2",
    message: "Fix API response handling",
    author: "Sarah",
    time: "42 min ago",
  },
];

function App() {
  const [running, setRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const runPipeline = () => {
    setRunning(true);

    setTimeout(() => {
      setRunning(false);
    }, 4000);
  };

  return (
    <div className="app">
      {/* Background */}
      <div className="background">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>
        <div className="grid"></div>
      </div>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">
            <span>∞</span>
          </div>

          <div>
            <h2>DevFlow</h2>
            <p>CI PLATFORM</p>
          </div>
        </div>

        <div className="workspace">
          <span className="workspace-dot"></span>
          <div>
            <small>WORKSPACE</small>
            <strong>production</strong>
          </div>
          <span className="chevron">⌄</span>
        </div>

        <nav>
          {["Overview", "Pipelines", "Commits", "Artifacts", "Settings"].map(
            (item, index) => (
              <button
                key={item}
                className={activeTab === item ? "nav-item active" : "nav-item"}
                onClick={() => setActiveTab(item)}
              >
                <span className="nav-icon">
                  {["⌂", "⚡", "◉", "▣", "⚙"][index]}
                </span>

                {item}

                {item === "Pipelines" && (
                  <span className="notification">3</span>
                )}
              </button>
            )
          )}
        </nav>

        <div className="sidebar-bottom">
          <div className="status-card">
            <div className="status-icon">✓</div>
            <div>
              <strong>All systems operational</strong>
              <span>CI infrastructure healthy</span>
            </div>
          </div>

          <div className="user">
            <div className="avatar">VK</div>
            <div>
              <strong>Vaman</strong>
              <span>Developer</span>
            </div>
            <span className="dots">•••</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="topbar">
          <div>
            <div className="breadcrumb">
              Projects <span>/</span> devops-learning <span>/</span> CI
            </div>

            <h1>
              Continuous Integration
              <span className="live-pill">
                <i></i> LIVE
              </span>
            </h1>

            <p className="subtitle">
              Build, test and validate every change automatically.
            </p>
          </div>

          <div className="top-actions">
            <button className="icon-button">⌕</button>
            <button className="icon-button">🔔</button>

            <button
              className={running ? "run-button running" : "run-button"}
              onClick={runPipeline}
            >
              {running ? (
                <>
                  <span className="spinner"></span>
                  Running...
                </>
              ) : (
                <>
                  ▶ Run Pipeline
                </>
              )}
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="stats">
          <div className="stat-card">
            <div className="stat-top">
              <span>SUCCESS RATE</span>
              <div className="stat-icon green">✓</div>
            </div>

            <div className="stat-value">98.7%</div>

            <div className="progress">
              <div style={{ width: "98.7%" }}></div>
            </div>

            <small>
              <b>+2.4%</b> from last week
            </small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>AVG. BUILD TIME</span>
              <div className="stat-icon purple">◷</div>
            </div>

            <div className="stat-value">2m 14s</div>

            <div className="mini-bars">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

            <small>
              <b>18s faster</b> than yesterday
            </small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>BUILDS TODAY</span>
              <div className="stat-icon blue">⚡</div>
            </div>

            <div className="stat-value">47</div>

            <div className="build-track">
              <span className="success-segment"></span>
              <span className="success-segment"></span>
              <span className="success-segment"></span>
              <span className="warning-segment"></span>
              <span className="success-segment"></span>
              <span className="success-segment"></span>
              <span className="success-segment"></span>
            </div>

            <small>
              <b>43 passed</b> · 3 failed · 1 running
            </small>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>CODE COVERAGE</span>
              <div className="stat-icon orange">◎</div>
            </div>

            <div className="stat-value">91.4%</div>

            <div className="coverage-ring">
              <div>
                <strong>91%</strong>
              </div>
            </div>

            <small>
              <b>+4.1%</b> coverage improved
            </small>
          </div>
        </section>

        {/* Pipeline */}
        <section className="pipeline-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CURRENT PIPELINE</span>
              <h2>#1847 · main</h2>
            </div>

            <div className="pipeline-meta">
              <span className="green-dot"></span>
              Running
              <span className="divider"></span>
              Triggered 34 sec ago
            </div>
          </div>

          <div className="pipeline">
            {pipeline.map((stage, index) => (
              <div className="pipeline-wrapper" key={stage.name}>
                <div
                  className={`pipeline-stage ${stage.status} ${
                    running && stage.status === "running" ? "active-run" : ""
                  }`}
                >
                  <div className="stage-icon">{stage.icon}</div>

                  <div className="stage-info">
                    <strong>{stage.name}</strong>
                    <span>{stage.detail}</span>
                  </div>

                  <div className="stage-status">
                    {stage.status === "success" ? (
                      <span className="check">✓</span>
                    ) : (
                      <span className="loader"></span>
                    )}
                  </div>
                </div>

                {index !== pipeline.length - 1 && (
                  <div
                    className={
                      stage.status === "success"
                        ? "connector completed"
                        : "connector"
                    }
                  >
                    <span></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom grid */}
        <section className="content-grid">
          {/* Commits */}
          <div className="panel commits-panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">SOURCE CONTROL</span>
                <h2>Recent Commits</h2>
              </div>

              <button>View all →</button>
            </div>

            <div className="commit-list">
              {commits.map((commit) => (
                <div className="commit" key={commit.hash}>
                  <div className="commit-line">
                    <span className="commit-dot"></span>
                    <span className="commit-hash">{commit.hash}</span>
                  </div>

                  <div className="commit-content">
                    <strong>{commit.message}</strong>

                    <div>
                      <span>{commit.author}</span>
                      <span>·</span>
                      <span>{commit.time}</span>
                    </div>
                  </div>

                  <span className="commit-status">✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="panel activity-panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">PIPELINE ACTIVITY</span>
                <h2>Build Performance</h2>
              </div>

              <button>Last 7 days⌄</button>
            </div>

            <div className="chart">
              <div className="chart-y">
                <span>4m</span>
                <span>3m</span>
                <span>2m</span>
                <span>1m</span>
                <span>0</span>
              </div>

              <div className="chart-area">
                <div className="chart-grid-line"></div>
                <div className="chart-grid-line"></div>
                <div className="chart-grid-line"></div>
                <div className="chart-grid-line"></div>

                <svg
                  viewBox="0 0 500 180"
                  preserveAspectRatio="none"
                  className="chart-svg"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopOpacity="0.3" />
                      <stop offset="100%" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,130 C50,115 70,140 110,105 S170,90 210,110 S270,55 310,78 S360,100 400,65 S450,75 500,38 L500,180 L0,180 Z"
                    fill="url(#gradient)"
                  />

                  <path
                    d="M0,130 C50,115 70,140 110,105 S170,90 210,110 S270,55 310,78 S360,100 400,65 S450,75 500,38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>

                <div className="chart-days">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span>
            <i></i> CI Infrastructure Operational
          </span>

          <span>DevFlow CI · v2.8.4</span>
        </footer>
      </main>
    </div>
  );
}

export default App;