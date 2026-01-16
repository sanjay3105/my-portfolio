'use client'

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Email',
      value: 'sanjay3104@gmail.com',
      link: 'mailto:sanjay3104@gmail.com',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22 20.4728 21.5523 20.92 21 20.92C9.40202 20.92 0 11.518 0 -0.0799561C0 -0.632741 0.447715 -1.0799 1 -1.0799H4C4.55228 -1.0799 5 -0.632741 5 -0.0799561C5 1.37734 5.24585 2.81524 5.71678 4.16769C5.85066 4.54945 5.72046 4.97709 5.40493 5.22228L3.72678 6.60086C5.46869 10.0569 8.36331 12.9515 11.8193 14.6934L13.1979 13.0153C13.4431 12.6997 13.8707 12.5695 14.2525 12.7034C15.605 13.1743 17.0429 13.4202 18.4902 13.4202C19.043 13.4202 19.4902 13.8679 19.4902 14.4202V17.4202C19.4902 17.9725 19.043 18.4202 18.4902 18.4202C18.4902 18.4202 22 16.92 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 2C16.5913 2.66667 18.3333 4.40867 19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6C15.8333 6.33333 16.6667 7.16667 17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 7708361913',
      link: 'tel:+917708361913',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Sanjay Ramachandran',
      link: 'https://www.linkedin.com/in/sanjay-ramachandran',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Location',
      value: 'Kallaikurichi, Tamil Nadu',
      link: null,
    },
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's collaborate on innovative AI and Data Science projects
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-card glass-strong">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="contact-grid">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  {item.link ? (
                    <a href={item.link} className="contact-link glass">
                      <div className="contact-icon">{item.icon}</div>
                      <div className="contact-details">
                        <div className="contact-label">{item.label}</div>
                        <div className="contact-value">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-link glass">
                      <div className="contact-icon">{item.icon}</div>
                      <div className="contact-details">
                        <div className="contact-label">{item.label}</div>
                        <div className="contact-value">{item.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="contact-cta">
              <a href="mailto:sanjay3104@gmail.com" className="btn btn-primary">
                Send Message
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>&copy; 2026 Sanjay R. Built with Next.js & passion for AI.</p>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.05));
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-subtitle {
          margin-top: 1rem;
          font-size: 1.125rem;
          color: var(--color-text-muted);
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-card {
          padding: 3rem;
          border-radius: var(--radius-lg);
        }

        .contact-intro {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-intro h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .contact-intro p {
          font-size: 1.125rem;
          color: var(--color-text-muted);
          line-height: 1.8;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          width: 100%;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
          text-decoration: none;
          width: 100%;
          background: rgba(240, 253, 244, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(187, 247, 208, 0.4);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .contact-link:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
          background: rgba(220, 252, 231, 0.8);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border-radius: var(--radius-md);
          color: white;
          flex-shrink: 0;
        }

        .contact-details {
          flex: 1;
          min-width: 0;
        }

        .contact-label {
          font-size: 0.875rem;
          color: var(--color-text-dim);
          margin-bottom: 0.25rem;
        }

        .contact-value {
          font-weight: 600;
          color: var(--color-text);
          word-break: break-word;
        }

        .contact-cta {
          text-align: center;
        }

        .footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .footer p {
          color: var(--color-text-dim);
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 2rem 1.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
