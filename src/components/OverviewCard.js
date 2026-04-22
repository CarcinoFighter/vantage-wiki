export default function OverviewCard({ icon, title, desc }) {
  return (
    <div className="ov-card">
      <div className="ov-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
