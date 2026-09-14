export default function Features() {
  const modules = [
    { id: 1, title: "HTML/CSS & Responsive Design", desc: "Built semantic landing pages using CSS Grid and Flexbox." },
    { id: 2, title: "JavaScript ES6+ & APIs", desc: "Implemented arrow functions, array methods, and async data fetching." },
    { id: 3, title: "React Component Architecture", desc: "Transitioned to Vite React with modular components and modern styling." }
  ];

  return (
    <section className="features-section" id="features">
      <h2>Internship Modules</h2>
      <div className="grid-container">
        {modules.map((mod) => (
          <div className="feature-card" key={mod.id}>
            <h3>{mod.title}</h3>
            <p>{mod.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}