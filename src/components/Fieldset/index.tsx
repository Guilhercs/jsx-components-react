import "./fieldset.css";

export function FieldSet(
  Props: React.FieldsetHTMLAttributes<HTMLFieldSetElement>
) {
  return (
    <fieldset className="fieldset" {...Props}>
      {Props.children}
    </fieldset>
  );
}
