import React, { useEffect, useState } from 'react';
import PageTransition from '../../components/PageTransition';
import './blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
        const data = await res.json();
        if (mounted) setPosts(data);
      } catch (err) {
        console.error('Failed to load posts', err);
        if (mounted) setPosts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  const filtered = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.body.toLowerCase().includes(query.toLowerCase()));

  return (
    <PageTransition>
      <div className="container blog-page">
        <div className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-sub">Latest articles, guides and tips about shopping and product reviews.</p>

          <div className="blog-controls">
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search articles"
            />
          </div>
        </div>

        <div className="posts-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="post-card skeleton">
                <h3 className="post-title">&nbsp;</h3>
                <p className="post-body">&nbsp;</p>
              </article>
            ))
          ) : (
            (filtered.length ? filtered : posts).map(post => (
              <article key={post.id} className="post-card">
                <div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-body">{post.body.substring(0, 140)}{post.body.length > 140 ? '...' : ''}</p>
                </div>
                <div className="post-meta">
                  <span>By Admin</span>
                  <span>•</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="post-actions">
                  <a className="btn" href={`#/blog/${post.id}`}>Read</a>
                </div>
              </article>
            ))
          )}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="empty">No articles match your search.</div>
        )}
      </div>
    </PageTransition>
  );
}

export default Blog;