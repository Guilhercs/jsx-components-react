import "./button.css";

export function CustomButtom(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button className="custom-button" {...props}>
      {props.children}
    </button>
  );
}
