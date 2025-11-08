import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const tabs = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Portfolio', id: 'portfolio' },
    // { name: 'Tech Stack', id: 'tech-stack' },
    // { name: 'Hobbies', id: 'hobbies' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add temporary padding to account for navbar
      const tempPadding = document.createElement('div');
      tempPadding.style.height = '80px';
      element.insertBefore(tempPadding, element.firstChild);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Remove temporary padding after scroll
      setTimeout(() => {
        if (tempPadding.parentNode) {
          tempPadding.parentNode.removeChild(tempPadding);
        }
      }, 1000);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => tab.id);
      const scrollPosition = window.scrollY + 200; // Fixed offset instead of viewport center

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-base-300/90 backdrop-blur-sm shadow-sm border-b border-base-content/10">
      <div className="navbar-start">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </div>

      <div className="navbar-center">
        <div role="tablist" className="tabs tabs-border">
          {tabs.map(({ name, id }) => (
            <button
              key={id}
              role="tab"
              onClick={() => scrollToSection(id)}
              className={`tab transition-colors duration-200 ${
                activeSection === id ? 'tab-active text-primary' : 'hover:text-primary'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="navbar-end">
        {/* Optional: Add additional nav items here */}
      </div>
    </nav>
  );
};

export default Navbar;
