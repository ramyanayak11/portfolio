import { useEffect, useState } from "react";
import linkedinPng from "/linkedin.png";
import githubPng from "/github.png";
import "./Connect.css";

export default function Connect() {
  const [status, setFormStatus] = useState("");

  useEffect(() => {
    const el = document.querySelector(".section.connect");
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) el.classList.add("reveal"); });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/meolqanl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("Thanks for your message! I’ll get back to you soon. ✅");
        e.target.reset();
      } else {
        setFormStatus("Oops! Something went wrong. Please try again. ❌");
      }
    } catch (error) {
      setFormStatus("Oops! Something went wrong. Please try again. ❌");
    }
  };


  return (
    <section className="section connect">
      <span className="kicker">contact</span>
      <h2>Let’s Connect</h2>

      <div className="social-row">
        <a className="circle" href="https://linkedin.com/in/ramyanayak11" target="_blank" rel="noreferrer">
          <img src={linkedinPng} alt="LinkedIn" />
        </a>
        <a className="circle" href="https://github.com/ramyanayak11" target="_blank" rel="noreferrer">
          <img src={githubPng} alt="GitHub" />
        </a>
      </div>

      <div className="form-wrap">
        <h3 className="sub">Send me a message</h3>
        <form onSubmit={handleSubmit} className="stack">
          <div>
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className="btn" type="submit">Send</button>
        </form>
        {status && <p className="status" role="status">{status}</p>}
      </div>
    </section>
  );
}
