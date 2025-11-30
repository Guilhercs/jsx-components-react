import { Card } from "../Card";
import { FieldSet } from "../Fieldset";
import { Input } from "../Input";
import { Label } from "../Label";
import { Title } from "../Title";

export function EventForm() {
  return (
    <>
      <Card>
        <form className="form">
          <Title as="span">Preencha para criar um evento:</Title>
          <FieldSet>
            <Label htmlFor="nome">Qual o nome do evento?</Label>
            <Input type="text" id="nome" />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="data">Data do evento</Label>
            <Input type="date" id="data" />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="tema">Tema do evento</Label>
            <Input type="text" id="tema" placeholder="Summer dev hits" />
          </FieldSet>
        </form>
      </Card>
    </>
  );
}
