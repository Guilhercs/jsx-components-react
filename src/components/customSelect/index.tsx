import "./customSelect.css";

export function CustomSelect(props: { item: { id: number; name: string }[] }) {
  return (
    <>
      <select className="custom-select" defaultValue={""} {...props}>
        <option disabled>Selecione uma opção</option>
        {props.item.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}
