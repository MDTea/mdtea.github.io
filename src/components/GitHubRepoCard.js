import React, { useEffect, useState } from 'react';

// Rough per-language accent dots, matching GitHub's own convention.
// Falls back to the theme's accent purple for anything not listed.
const LANGUAGE_COLORS = {
  JavaScript: '#f1c40f',
  TypeScript: '#3b82f6',
  Python: '#4b8bbe',
  HTML: '#e0674a',
  CSS: '#7262b3',
  Java: '#b07219',
  'Jupyter Notebook': '#e8762c',
};

function timeSince(dateString) {
  if (!dateString) return null;
  const seconds = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);
  const units = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
  ];
  for (const [label, secondsInUnit] of units) {
    const value = Math.floor(seconds / secondsInUnit);
    if (value >= 1) return `${value} ${label}${value > 1 ? 's' : ''} ago`;
  }
  return 'today';
}

/**
 * Live preview card for a GitHub repository. Fetches public repo metadata
 * directly from the GitHub REST API in the visitor's browser, so it always
 * reflects the current description, primary language, and star count.
 *
 * Props:
 *  - owner: GitHub username or org that owns the repo
 *  - repo: repository name
 *  - tabName: label shown in the editor-style tab (defaults to repo name)
 *  - fallbackDescription: shown if the live fetch fails (e.g. private repo)
 *  - badge: optional short status label, e.g. "In progress"
 */
function GitHubRepoCard({ owner, repo, tabName, fallbackDescription, badge }) {
  const [state, setState] = useState({ status: 'loading', data: null });
  const repoUrl = `https://github.com/${owner}/${repo}`;

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error('not ok');
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setState({ status: 'loaded', data });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', data: null });
      });
    return () => {
      cancelled = true;
    };
  }, [owner, repo]);

  return (
    <div className="editor-window">
      <div className="editor-titlebar">
        <span className="editor-dot dot-red" />
        <span className="editor-dot dot-yellow" />
        <span className="editor-dot dot-green" />
        <span className="editor-tab">{tabName || `${repo}/`}</span>
        {badge && <span className="editor-badge">{badge}</span>}
      </div>

      <div className="editor-body repo-card-body">
        {state.status === 'loading' && (
          <div className="repo-skeleton" aria-label="Loading repository details">
            <div className="skeleton-line skeleton-line--wide" />
            <div className="skeleton-line skeleton-line--medium" />
            <div className="skeleton-line skeleton-line--narrow" />
          </div>
        )}

        {state.status === 'loaded' && (
          <>
            <p className="repo-description">
              {state.data.description || fallbackDescription || 'No description provided.'}
            </p>
            <div className="repo-meta">
              {state.data.language && (
                <span className="repo-meta-item">
                  <span
                    className="language-dot"
                    style={{
                      background: LANGUAGE_COLORS[state.data.language] || 'var(--accent-primary)',
                    }}
                  />
                  {state.data.language}
                </span>
              )}
              <span className="repo-meta-item">★ {state.data.stargazers_count}</span>
              {state.data.updated_at && (
                <span className="repo-meta-item">Updated {timeSince(state.data.updated_at)}</span>
              )}
            </div>
          </>
        )}

        {state.status === 'error' && (
          <p className="repo-description">
            {fallbackDescription || "Live details couldn't be loaded right now."}
          </p>
        )}

        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          View repository
        </a>
      </div>
    </div>
  );
}

export default GitHubRepoCard;
