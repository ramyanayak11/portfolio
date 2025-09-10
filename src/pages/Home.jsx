import { useEffect, useRef, useState } from "react";
import "./Home.css";

export default function Home() {
  // typing effect lines
  const lines = [
    "i''m so glad you're here :))",
    "dive into my world of projects & ideas 🚀",
  ];
  const full = lines.join("\n");
  const [text, setText] = useState("");
  const iRef = useRef(0);

  useEffect(() => {
    const t = setInterval(() => {
      setText((prev) => prev + full.charAt(iRef.current));
      iRef.current += 1;
      if (iRef.current >= full.length) clearInterval(t);
    }, 42);
    return () => clearInterval(t);
  }, [full]);

  // scroll-reveal on mount
  useEffect(() => {
    const el = document.querySelector(".section.home");
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) el.classList.add("reveal"); });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section home">
      <span className="kicker">cover story</span>
      <h1 className="cover">hi, i’m <span className="accent-underline">ramya</span>!</h1>

      <p className="lede typing" aria-live="polite">{text}</p>
    </section>
  );
}
