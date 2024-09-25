import React from 'react';

function Header({ currentSection, setCurrentSection }) {
  const navItems = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>Sephora Jean-mary</h1>
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
    </header>
  );
}

export default Header;
