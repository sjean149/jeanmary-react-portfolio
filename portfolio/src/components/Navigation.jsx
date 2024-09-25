import React from 'react';

function Navigation({ currentSection, setCurrentSection }) {
  const navItems = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => setCurrentSection(item)}
              className={currentSection === item ? 'nav-active' : ''}
            >
              {item === 'AboutMe' ? 'About Me' : item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
