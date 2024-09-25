import React from 'react';
import profile from '../images/profile.jpg';
import '../assets/aboutme.css'

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profile} alt="Sephora Smiling" />
      <p>I am an aspiring back-end developer interested in solving real world problems with code.</p>
    </section>
  );
}

export default AboutMe;
