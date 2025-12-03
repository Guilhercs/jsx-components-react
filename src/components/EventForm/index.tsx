import "./form.css";

import { Card } from "../card";
import { FieldSet } from "../fieldset";
import { Input } from "../input";
import { Label } from "../Label";
import { Title } from "../title";
import { CustomButtom } from "../button";
import { CustomSelect } from "../customSelect/index";

export function EventForm(props: { themes: { id: number; name: string }[] }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    return {
      id: crypto.randomUUID(),
      img: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      date: new Date(),
      theme: data.get("theme"),
      title: data.get("title"),
    };
  }

  return (
    <>
      <Card styles={{ padding: "32px 28px", margin: "64px auto" }}>
        <form className="form" onSubmit={handleSubmit}>
          <Title className="title-card" as="span">
            Preencha para criar um evento:
          </Title>
          <FieldSet>
            <Label htmlFor="nome">Qual o nome do evento?</Label>
            <Input type="text" id="nome" placeholder="Summer dev hits" />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="data">Data do evento</Label>
            <Input type="date" id="data" placeholder="DD/MM/AAAA" />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="tema">Tema do evento</Label>
            <CustomSelect item={props.themes} />
          </FieldSet>
          <div className="form-button">
            <CustomButtom type="submit">Criar evento</CustomButtom>
          </div>
        </form>
      </Card>
    </>
  );
}
