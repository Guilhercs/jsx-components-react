import "./customSelect.css";

export function CustomSelect(props: {
  item: { id: number; name: string }[];
  name: string;
}) {
  return (
    <select className="custom-select" name={props.name} defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>

      {props.item.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
