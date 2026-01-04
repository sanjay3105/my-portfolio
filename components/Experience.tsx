'use client'

export default function Experience() {
    const experiences = [
        {
            company: 'Intel Corporation',
            role: 'Data Analyst Intern',
            period: 'Jul - Aug 2022',
            description: 'Real-Time Car Detection using OpenCV',
            type: 'Internship',
        },
    ]

    const workshops = [
        {
            title: 'International Visiting Lecture',
            organization: 'Stekom University, Indonesia',
            icon: '🌍',
        },
        {
            title: 'IBM Cloud: Overview of Watson',
            organization: 'Android Technology Innovation Solution Pvt Ltd',
            icon: '☁️',
        },
        {
            title: 'Web Development Bootcamp',
            organization: 'Aerobits Developer',
            description: 'Building a Website in a Day with ChatGPT',
            icon: '💻',
        },
    ]

    const achievements = [
        {
            title: 'National Level Innovation Technical Fest',
            organization: 'Maailam Engineering College',
            icon: '🏆',
        },
        {
            title: 'Public Speaker - TrendTrain',
            organization: 'NEXTGEN (Institutions)',
            description: 'Digital marketing, design, and creative skills',
            icon: '🎤',
        },
    ]

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Experience & Achievements</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="experience-content">
                    {/* Internship */}
                    <div className="subsection">
                        <h3 className="subsection-title gradient-text">Internship</h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item glass card">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4>{exp.role}</h4>
                                            <span className="period">{exp.period}</span>
                                        </div>
                                        <p className="company">{exp.company}</p>
                                        <p className="description">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Workshops */}
                    <div className="subsection">
                        <h3 className="subsection-title gradient-text">Workshops & Presentations</h3>
                        <div className="cards-grid">
                            {workshops.map((workshop, index) => (
                                <div key={index} className="experience-card glass card">
                                    <div className="card-icon">{workshop.icon}</div>
                                    <h4>{workshop.title}</h4>
                                    <p className="organization">{workshop.organization}</p>
                                    {workshop.description && (
                                        <p className="card-description">{workshop.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="subsection">
                        <h3 className="subsection-title gradient-text">Certifications & Achievements</h3>
                        <div className="cards-grid">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="experience-card glass card">
                                    <div className="card-icon">{achievement.icon}</div>
                                    <h4>{achievement.title}</h4>
                                    <p className="organization">{achievement.organization}</p>
                                    {achievement.description && (
                                        <p className="card-description">{achievement.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .experience {
          background: linear-gradient(180deg, rgba(99, 102, 241, 0.03), transparent);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .experience-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .subsection {
          margin-bottom: 4rem;
        }

        .subsection:last-child {
          margin-bottom: 0;
        }

        .subsection-title {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          padding: 1.5rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2.5rem;
          top: 1.5rem;
          width: 12px;
          height: 12px;
          background: var(--color-primary);
          border-radius: 50%;
          box-shadow: 0 0 0 4px var(--color-bg-dark), 0 0 0 6px var(--color-primary);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .timeline-header h4 {
          font-size: 1.25rem;
          color: var(--color-text);
        }

        .period {
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.2);
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          color: var(--color-primary);
        }

        .company {
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .description {
          color: var(--color-text-muted);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .experience-card {
          padding: 1.5rem;
          text-align: center;
          transition: all var(--transition-base);
        }

        .experience-card:hover {
          transform: translateY(-5px);
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .experience-card h4 {
          font-size: 1.125rem;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }

        .organization {
          color: var(--color-primary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .card-description {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .timeline {
            padding-left: 1.5rem;
          }

          .timeline-marker {
            left: -2rem;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    )
}
