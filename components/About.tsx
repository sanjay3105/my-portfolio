'use client'

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-card glass card">
                        <div className="card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="22">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3>Career Objective</h3>
                        <p>
                            Aspiring AI professional with a strong foundation in Python programming,
                            seeking opportunities to apply and expand my skills in AI technology and
                            machine learning. Passionate about continuous learning and contributing
                            to innovative projects that push the boundaries of what's possible with
                            artificial intelligence.
                        </p>
                    </div>

                    <div className="about-card glass card">
                        <div className="card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10M22 10V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V10M22 10H18M2 10H6" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 10V20" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 10V20" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="gradient2" x1="2" y1="4" x2="22" y2="20">
                                        <stop offset="0%" stopColor="#06b6d4" />
                                        <stop offset="100%" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3>Education</h3>
                        <div className="education-item">
                            <h4>B.Tech, Artificial Intelligence & Data Science</h4>
                            <p className="institution">Arunai Engineering College</p>
                            <p className="details">CGPA: 7.5 | 2022-2026</p>
                        </div>
                        <div className="education-item">
                            <h4>Higher Secondary Certificate (HSC)</h4>
                            <p className="institution">Adaikala Annai</p>
                            <p className="details">80% | 2021</p>
                        </div>
                        <div className="education-item">
                            <h4>Secondary School Leaving Certificate (SSLC)</h4>
                            <p className="institution">St.Joseph</p>
                            <p className="details">75% | 2019</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .about {
          background: linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.03));
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          margin-bottom: 1rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          margin: 0 auto;
          border-radius: var(--radius-full);
        }

        .about-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-card {
          padding: 2rem;
        }

        .card-icon {
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .about-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .about-card p {
          line-height: 1.8;
          color: var(--color-text-muted);
        }

        .education-item {
          margin-bottom: 1.5rem;
        }

        .education-item:last-child {
          margin-bottom: 0;
        }

        .education-item h4 {
          font-size: 1.125rem;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }

        .institution {
          color: var(--color-primary);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .details {
          font-size: 0.875rem;
          color: var(--color-text-dim);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    )
}
