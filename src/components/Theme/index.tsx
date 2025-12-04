import "./theme.css";

export function Theme(props: { themes: { id: number; name: string } }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h3 className="theme-title">{props.themes.name}</h3>
    </div>
  );
}
