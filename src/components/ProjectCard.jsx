import "./ProjectCard.css";

export default function ProjectCard({ title, deck, tracks, img }) {
  return (
    <article className="project-card">
      {img && <div className="thumb" style={{ backgroundImage: `url(${img})` }} />}
      <h3 className="title">{title}</h3>
      {deck && <p className="deck">{deck}</p>}
      {tracks?.length > 0 && (
        <ul className="tracklist">
          {tracks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      )}
    </article>
  );
}
