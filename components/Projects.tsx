'use client'

import { useState } from 'react'

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    const projects = [
        {
            title: 'Real-Time Car Detection',
            description: 'Advanced computer vision system using OpenCV for real-time vehicle detection and tracking on roads with high accuracy.',
            technologies: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning'],
            icon: '🚗',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            title: 'Plant Disease Detection',
            description: 'AI-powered agricultural solution combining OpenCV and Roboflow to identify and classify plant diseases for early intervention.',
            technologies: ['Python', 'OpenCV', 'Roboflow', 'Deep Learning'],
            icon: '🌱',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            title: 'Car Detection on Roads',
            description: 'Intelligent traffic monitoring system utilizing OpenCV for automated vehicle detection and traffic flow analysis.',
            technologies: ['Python', 'OpenCV', 'Image Processing', 'AI'],
            icon: '🛣️',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
    ]

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Innovative solutions leveraging AI and Computer Vision
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass card"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="project-icon" style={{ background: project.gradient }}>
                                <span>{project.icon}</span>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag glass">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className={`project-overlay ${hoveredProject === index ? 'active' : ''}`}>
                                <button className="btn btn-primary">
                                    View Details
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .projects {
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05), transparent);
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          padding: 2rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .project-icon {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-lg);
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .project-description {
          color: var(--color-text-muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.375rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-primary);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-base);
          pointer-events: none;
        }

        .project-overlay.active {
          opacity: 1;
          pointer-events: all;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    )
}
