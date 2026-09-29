import React from 'react';
import { BRAND_CONTACTS } from '../data/contact';
import { useLocation } from 'react-router-dom';

const BrandContactBlocks = ({
  theme = 'dark',
  variant = 'minimal',
  brandId = null,
  className = '',
  style = {},
  displayContents = false,
}) => {
  const isDark = theme === 'dark';
  let pathname = '';
  try {
    const loc = useLocation();
    pathname = loc.pathname;
  } catch {
    pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  }

  let activeBrandKey = brandId;
  if (!activeBrandKey) {
    if (pathname.includes('infynix-agency')) activeBrandKey = 'agency';
    else if (pathname.includes('infynix-media')) activeBrandKey = 'media';
  }

  const rawList = [BRAND_CONTACTS.agency, BRAND_CONTACTS.media].filter(Boolean);
  const displayedBrands = activeBrandKey
    ? rawList.filter(b => b.key === activeBrandKey || b.serviceSlug === activeBrandKey || b.serviceSlug === `infynix-${activeBrandKey}`)
    : rawList;

  // ─── CARDS VARIANT (Used on Contact page) ───
  if (variant === 'cards') {
    return (
      <div
        className={`brand-contact-cards-grid ${className}`}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          ...style,
        }}
      >
        {displayedBrands.map(brand => {
          const isAgency = brand.serviceSlug === 'infynix-agency' || brand.key === 'agency';
          const divisionColor = isAgency ? '#007A5E' : '#d97706';
          const divisionBg = isAgency ? 'rgba(0, 122, 94, 0.08)' : 'rgba(217, 119, 6, 0.08)';
          const divisionBorder = isAgency ? 'rgba(0, 122, 94, 0.25)' : 'rgba(217, 119, 6, 0.25)';
          const divisionHoverShadow = isAgency ? 'rgba(0, 122, 94, 0.14)' : 'rgba(217, 119, 6, 0.14)';
          const telHref = `tel:${brand.phone.replace(/\s+/g, '')}`;

          return (
            <div
              key={brand.serviceSlug || brand.key}
              className="brand-division-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '28px 24px 24px 24px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 18px -2px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 14px 28px -4px ${divisionHoverShadow}`;
                e.currentTarget.style.borderColor = divisionColor;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: divisionBg,
                    border: `1px solid ${divisionBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: divisionColor,
                  }}
                >
                  {isAgency ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11l19-9-9 19-2-8-8-2z" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                      <line x1="7" y1="2" x2="7" y2="22" />
                      <line x1="17" y1="2" x2="17" y2="22" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <line x1="2" y1="7" x2="22" y2="7" />
                      <line x1="2" y1="17" x2="7" y2="17" />
                      <line x1="17" y1="17" x2="22" y2="17" />
                      <line x1="17" y1="7" x2="22" y2="7" />
                    </svg>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "'Albert Sans', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    color: divisionColor,
                    background: divisionBg,
                    border: `1px solid ${divisionBorder}`,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                  }}
                >
                  {brand.badge}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Albert Sans', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0 0 6px 0',
                  letterSpacing: '-0.015em',
                }}
              >
                {brand.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontSize: '0.88rem',
                  color: '#64748b',
                  lineHeight: 1.55,
                  margin: '0 0 20px 0',
                }}
              >
                {brand.desc}
              </p>

              {/* Action Buttons Row: Phone, Email, Instagram */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <a
                    href={telHref}
                    aria-label={`Call ${brand.title} at ${brand.phoneFormatted}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '9px 14px',
                      borderRadius: '8px',
                      background: divisionColor,
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontFamily: "'Montserrat', Arial, sans-serif",
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{brand.phoneFormatted}</span>
                  </a>

                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${brand.title} on Instagram`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '9px 13px',
                      borderRadius: '8px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      color: '#0f172a',
                      textDecoration: 'none',
                      fontFamily: "'Montserrat', Arial, sans-serif",
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = divisionColor;
                      e.currentTarget.style.color = divisionColor;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.color = '#0f172a';
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>@{brand.instagram} ↗</span>
                  </a>
                </div>

                <a
                  href={`mailto:${brand.email}`}
                  aria-label={`Email ${brand.title} at ${brand.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#64748b',
                    textDecoration: 'none',
                    fontFamily: "'Montserrat', Arial, sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = divisionColor;
                    e.currentTarget.style.color = divisionColor;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.color = '#64748b';
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{brand.email}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ─── MINIMAL VARIANT (Used in Footer & single columns) ───
  const headingColor = isDark ? '#ffffff' : '#111827';
  const textColor = isDark ? 'rgba(255, 255, 255, 0.9)' : '#374151';
  const hoverColor = isDark ? '#ffffff' : '#007A5E';
  const labelColor = isDark ? 'rgba(255, 255, 255, 0.72)' : '#6b7280';

  return (
    <div
      className={`brand-contact-blocks ${className}`}
      style={
        displayContents
          ? { display: 'contents', ...style }
          : {
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              width: '100%',
              ...style,
            }
      }
    >
      {displayedBrands.map(brand => {
        const telHref = `tel:${brand.phone.replace(/\s+/g, '')}`;

        return (
          <div
            key={brand.serviceSlug || brand.key}
            className="brand-contact-item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              padding: isDark ? '0' : '0.5rem 0',
            }}
          >
            <span
              style={{
                fontFamily: "'Albert Sans', sans-serif",
                fontSize: isDark ? '0.88rem' : '1rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: headingColor,
              }}
            >
              {brand.title}
            </span>

            {brand.desc && (
              <span
                style={{
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontSize: isDark ? '0.84rem' : '0.9rem',
                  color: labelColor,
                  lineHeight: 1.55,
                }}
              >
                {brand.desc}
              </span>
            )}

            <a
              href={telHref}
              aria-label={`Call ${brand.title} at ${brand.phoneFormatted}`}
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: isDark ? '0.88rem' : '0.95rem',
                color: textColor,
                textDecoration: 'none',
                transition: 'color 0.2s',
                lineHeight: 1.6,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = hoverColor;
                if (isDark) e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = textColor;
                if (isDark) e.currentTarget.style.textDecoration = 'none';
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{brand.phoneFormatted}</span>
            </a>

            <a
              href={`mailto:${brand.email}`}
              aria-label={`Email ${brand.title} at ${brand.email}`}
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: isDark ? '0.88rem' : '0.95rem',
                color: textColor,
                textDecoration: 'none',
                transition: 'color 0.2s',
                lineHeight: 1.6,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = hoverColor;
                if (isDark) e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = textColor;
                if (isDark) e.currentTarget.style.textDecoration = 'none';
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{brand.email}</span>
            </a>

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${brand.title} on Instagram`}
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: isDark ? '0.88rem' : '0.95rem',
                color: textColor,
                textDecoration: 'none',
                transition: 'color 0.2s',
                lineHeight: 1.6,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = hoverColor;
                if (isDark) e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = textColor;
                if (isDark) e.currentTarget.style.textDecoration = 'none';
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>@{brand.instagram} ↗</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BrandContactBlocks;
