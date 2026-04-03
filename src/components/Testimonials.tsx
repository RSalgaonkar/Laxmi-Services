const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Daily commuter',
    text: 'Bike taxis save me at least 30 minutes every morning. The interface is fast and easy to trust.'
  },
  {
    name: 'Neha Kamat',
    role: 'Weekend traveler',
    text: 'The car rental flow is simple, and the pricing cards made it easy to compare options before booking.'
  },
  {
    name: 'Rohan Desai',
    role: 'Startup founder',
    text: 'This concept feels like a strong production MVP with clear sections, polished cards, and responsive layout.'
  }
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-heading">
        <span className="eyebrow">Rider stories</span>
        <h2>Built for everyday travel</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p>“{item.text}”</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}