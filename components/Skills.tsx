'use client'

export default function Skills() {
  const technicalSkills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'HTML/CSS', level: 88, icon: '🎨' },
    { name: 'OpenCV', level: 85, icon: '👁️' },
    { name: 'Machine Learning', level: 80, icon: '🤖' },
    { name: 'Git', level: 85, icon: '📦' },
    { name: 'Markdown', level: 90, icon: '📝' },
    { name: 'Digital Marketing', level: 75, icon: '📱' },
  ]

  const softSkills = [
    { name: 'Analytical Thinking', icon: '🧠' },
    { name: 'Team Work', icon: '🤝' },
    { name: 'Team Leadership', icon: '👨‍💼' },
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Communication', icon: '💬' },
    { name: 'Creativity', icon: '🎯' },
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-content">
          {/* Technical Skills */}
          <div className="skills-section">
            <h3 className="skills-subtitle gradient-text">Technical Skills</h3>
            <div className="technical-skills">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item glass card">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-section">
            <h3 className="skills-subtitle gradient-text">Soft Skills</h3>
            <div className="soft-skills">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-card glass card">
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <div className="soft-skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          background: radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.05), transparent);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .skills-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .skills-section {
          margin-bottom: 4rem;
        }

        .skills-section:last-child {
          margin-bottom: 0;
        }

        .skills-subtitle {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .technical-skills {
          display: grid;
          gap: 1.5rem;
        }

        .skill-item {
          padding: 1.5rem;
          transition: all var(--transition-base);
        }

        .skill-item:hover {
          transform: translateX(10px);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          font-size: 1.5rem;
        }

        .skill-name {
          flex: 1;
          font-weight: 600;
          color: var(--color-text);
        }

        .skill-percentage {
          font-weight: 700;
          color: var(--color-primary);
          font-family: 'Outfit', sans-serif;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          border-radius: var(--radius-full);
          transition: width 1s ease-out;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }

        .soft-skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .soft-skill-card {
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all var(--transition-base);
          cursor: pointer;
        }

        .soft-skill-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
        }

        .soft-skill-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
        }

        .soft-skill-card:nth-child(2) .soft-skill-icon {
          animation-delay: 0.5s;
        }

        .soft-skill-card:nth-child(3) .soft-skill-icon {
          animation-delay: 1s;
        }

        .soft-skill-card:nth-child(4) .soft-skill-icon {
          animation-delay: 1.5s;
        }

        .soft-skill-card:nth-child(5) .soft-skill-icon {
          animation-delay: 2s;
        }

        .soft-skill-card:nth-child(6) .soft-skill-icon {
          animation-delay: 2.5s;
        }

        .soft-skill-name {
          font-weight: 600;
          color: var(--color-text);
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .soft-skills {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .soft-skills {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
