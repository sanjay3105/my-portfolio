'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ]

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <div className="nav-logo" onClick={() => scrollToSection('home')}>
                        <span className="gradient-text">SR</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="nav-menu desktop">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all var(--transition-base);
        }

        .nav.scrolled {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-menu.desktop {
          display: none;
        }

        @media (min-width: 768px) {
          .nav-menu.desktop {
            display: flex;
          }
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          transition: width var(--transition-base);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-text);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .hamburger {
          display: block;
          width: 25px;
          height: 2px;
          background: var(--color-text);
          position: relative;
          transition: all var(--transition-base);
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 2px;
          background: var(--color-text);
          transition: all var(--transition-base);
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          bottom: -8px;
        }

        .hamburger.open {
          background: transparent;
        }

        .hamburger.open::before {
          transform: rotate(45deg);
          top: 0;
        }

        .hamburger.open::after {
          transform: rotate(-45deg);
          bottom: 0;
        }

        .mobile-menu {
          display: block;
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }

        .mobile-menu.open {
          max-height: 400px;
          padding-top: 1rem;
        }

        .mobile-menu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-menu .nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
        }

        .mobile-menu .nav-link:hover,
        .mobile-menu .nav-link.active {
          background: rgba(99, 102, 241, 0.1);
        }
      `}</style>
        </nav>
    )
}
