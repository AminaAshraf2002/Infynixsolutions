import React from 'react';
import { getSisterWebsites } from '../data/contact';

const SisterWebsitesSection = ({
  title = 'Global Presence',
  theme = 'dark',
  variant = 'minimal',
  className = '',
  style = {},
}) => {
  const isDark = theme === 'dark';
  const sisterSites = getSisterWebsites();

  // ─── CARDS VARIANT (Used on Contact page) ───
  if (variant === 'cards') {
    return (
      <div className={`sister-websites-cards-section ${className}`} style={{ width: '100%', ...style }}>
        {title && (
          <h4
            style={{
              fontFamily: "'Albert Sans', sans-serif",
              fontSize: '0.92rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0f172a',
              margin: '0 0 16px 0',
            }}
          >
            {title}
          </h4>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {sisterSites.map(site => (
            <a
              key={site.siteCode || site.domain}
              href={site.url}
              target="_blank"
              rel="noopener"
              title={`${site.label} — ${site.region}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#007A5E';
                e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(0, 122, 94, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 122, 94, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}
                >
                  {site.flag || '🌐'}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "'Albert Sans', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      display: 'block',
                    }}
                  >
                    {site.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', Arial, sans-serif",
                      fontSize: '0.78rem',
                      color: '#64748b',
                    }}
                  >
                    {site.domain}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#007A5E',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}
              >
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  // ─── MINIMAL / FOOTER COLUMN VARIANT ───
  return (
    <div className={`sister-websites-section ${className}`} style={{ width: '100%', ...style }}>
      {title && (
        <span
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            fontSize: isDark ? '0.88rem' : '1rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isDark ? '#ffffff' : '#111827',
            display: 'block',
            marginBottom: '0.85rem',
          }}
        >
          {title}
        </span>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {sisterSites.map(site => (
          <a
            key={site.siteCode || site.domain}
            href={site.url}
            target="_blank"
            rel="noopener"
            title={`${site.label} - ${site.region}`}
            style={{
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: isDark ? '0.88rem' : '0.95rem',
              color: isDark ? 'rgba(255, 255, 255, 0.9)' : '#374151',
              textDecoration: 'none',
              transition: 'color 0.2s',
              lineHeight: 1.6,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#ffffff';
              if (isDark) e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = isDark ? 'rgba(255, 255, 255, 0.9)' : '#374151';
              if (isDark) e.currentTarget.style.textDecoration = 'none';
            }}
          >
            <span>{site.flag}</span>
            <span>{site.label} — {site.domain} ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SisterWebsitesSection;
