export default function Hero({ eyebrow, title, desc, tags }) {
  return (
    <div className="hero anim anim-1">
      <div className="hero-eyebrow">
        <span className="hero-dot"></span> {eyebrow}
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
      {tags && tags.length > 0 && (
        <div className="hero-tags">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="hero-tag" 
              style={{
                color: tag.color, 
                borderColor: tag.borderColor, 
                background: tag.bg
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
