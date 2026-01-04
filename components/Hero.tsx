'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className={`hero-content ${mounted ? 'animate' : ''}`}>
                    <div className="hero-badge glass">
                        <span className="badge-dot"></span>
                        Available for opportunities
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Sanjay R</span>
                    </h1>

                    <div className="hero-subtitle">
                        <h2>Artificial Intelligence & Data Science Engineer</h2>
                    </div>

                    <p className="hero-description">
                        Passionate about AI, Machine Learning, and building innovative solutions
                        with Python, JavaScript, and cutting-edge technologies. Transforming data
                        into actionable insights and creating intelligent systems.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            <span>Get In Touch</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <a href="#projects" className="btn btn-outline">
                            View Projects
                        </a>
                    </div>

                    <div className="hero-stats glass">
                        <div className="stat">
                            <div className="stat-value gradient-text">3+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <div className="stat-value gradient-text">1+</div>
                            <div className="stat-label">Internship</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <div className="stat-value gradient-text">5+</div>
                            <div className="stat-label">Workshops</div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <p>Scroll to explore</p>
                </div>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--color-primary), transparent);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--color-secondary), transparent);
          top: 50%;
          right: -10%;
          animation-delay: 5s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--color-accent-cyan), transparent);
          bottom: -10%;
          left: 50%;
          animation-delay: 10s;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .hero-content.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.5rem;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          margin-bottom: 2rem;
          animation: fadeIn 1s ease-out 0.2s forwards;
          opacity: 0;
        }

        .hero-content.animate .hero-badge {
          opacity: 1;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-title {
          margin-bottom: 1rem;
          animation: fadeIn 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .hero-content.animate .hero-title {
          opacity: 1;
        }

        .hero-subtitle {
          margin-bottom: 1.5rem;
          animation: fadeIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        .hero-content.animate .hero-subtitle {
          opacity: 1;
        }

        .hero-subtitle h2 {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .hero-description {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.8;
          animation: fadeIn 1s ease-out 0.8s forwards;
          opacity: 0;
        }

        .hero-content.animate .hero-description {
          opacity: 1;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          animation: fadeIn 1s ease-out 1s forwards;
          opacity: 0;
        }

        .hero-content.animate .hero-buttons {
          opacity: 1;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          border-radius: var(--radius-lg);
          max-width: 600px;
          margin: 0 auto;
          animation: fadeIn 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        .hero-content.animate .hero-stats {
          opacity: 1;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: fadeIn 1s ease-out 1.5s forwards;
          opacity: 0;
        }

        .hero-content.animate ~ .scroll-indicator {
          opacity: 1;
        }

        .mouse {
          width: 24px;
          height: 36px;
          border: 2px solid var(--color-text-muted);
          border-radius: 12px;
          position: relative;
        }

        .wheel {
          width: 3px;
          height: 8px;
          background: var(--color-text-muted);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s ease-in-out infinite;
        }

        @keyframes scroll {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) translateY(12px);
            opacity: 0;
          }
        }

        .scroll-indicator p {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 100px;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .stat-divider {
            width: 40px;
            height: 1px;
          }

          .scroll-indicator {
            display: none;
          }
        }
      `}</style>
        </section>
    )
}
