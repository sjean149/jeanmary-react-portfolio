import React from 'react';

function Resume() {
  const proficiencies = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML', 'CSS'];

  return (
    <section>
      <h2>Resume</h2>
      <a href="path-to-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
