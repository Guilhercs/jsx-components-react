import "./label.css";

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <>
      <label className="label" htmlFor={props.htmlFor}>
        {props.children}
      </label>
    </>
  );
}
