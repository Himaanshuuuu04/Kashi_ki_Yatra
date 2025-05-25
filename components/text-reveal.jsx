export function TextReveal({ text, className = "", delay = 0 }) {
  const words = text.split(" ");
  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-1">
          {word}
        </span>
      ))}
    </div>
  );
}
