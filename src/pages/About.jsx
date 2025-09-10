import { useEffect } from "react";
import photo from "/profile-photo.jpg";
import "./About.css";

export default function About() {
  useEffect(() => {
    const el = document.querySelector(".section.about");
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) el.classList.add("reveal"); });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const skills = [
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "SQL",
    "ReactJS",
    "OpenFrameworks",
    "Streamlit",
    "Adobe Creative Cloud"
  ];

  return (
    <section className="section about">
      <span className="kicker">profile</span>

      <h2>About Me</h2>
      <div className="content-block">
        <div className="info">
          <div className="info-text">
            <p>
              i’m ramya, and i love blending design, creativity, and engineering to build things
              that feel delightful and useful. i’ve worked across back-end, front-end, and graphics. 
              at heart, i enjoy iterating and polishing details that matter.
            </p>
            <p>
              check out some of my work!
            </p>
            <p>
              outside of code, you'll catch me listening to music and exploring playful design ideas.
            </p>
          </div>
          <div className="info-photo">
            <img src={photo} alt="Ramya's photo" />
          </div>
        </div>
      </div>

      <h2>Education</h2>
      <div className="content-block">
        <div className="education">
          <h3>San Jose State University</h3>
          <p>Bachelor of Science in Computer Science</p>
          <span className="edu-detail">San Jose, CA • Spring 2025</span>
        </div>
      </div>

      <h2>Skills</h2>
        <div className="content-block">
          <div className="skills-row">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, idx) => (
              <span key={idx} className="skill-badge">{skill}</span>
            ))}
          </div>
          <div className="skills-row">
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, idx) => (
              <span key={idx} className="skill-badge">{skill}</span>
            ))}
          </div>
      </div>
    </section>
  );
}
