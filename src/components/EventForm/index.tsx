/* eslint-disable @typescript-eslint/no-explicit-any */
import "./form.css";

import { Card } from "../card";
import { FieldSet } from "../fieldset";
import { Input } from "../input";
import { Label } from "../Label";
import { Title } from "../title";
import { CustomButtom } from "../button";
import { CustomSelect } from "../customSelect/index";

export function EventForm(props: {
  themes: { id: number; name: string }[];
  onSubmit: (event: any) => void;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const randomId = Math.floor(Math.random() * 15) + 1;

    console.log(data.get("name"));

    props.onSubmit({
      id: 2,
      img: `https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_${randomId}.png`,
      date: new Date(data.get("date") as string),
      theme: props.themes.find(
        (theme) => theme.id.toString() === data.get("theme")
      ),
      title: data.get("name"),
      description: data.get("description"),
    });
  }

  return (
    <>
      <Card styles={{ padding: "32px 28px", margin: "64px auto" }}>
        <form className="form" onSubmit={handleSubmit}>
          <Title className="title-card" as="span">
            Preencha para criar um evento:
          </Title>
          <FieldSet>
            <Label htmlFor="name">Qual o nome do evento?</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Summer dev hits"
            />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="description">Sobre o evento</Label>
            <Input
              type="text"
              id="description"
              name="description"
              placeholder="Evento sobre as principais tendências em desenvolvimento web..."
            />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="date">Data do evento</Label>
            <Input type="date" id="date" name="date" placeholder="DD/MM/AAAA" />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="theme">Tema do evento</Label>
            <CustomSelect item={props.themes} name="theme" />
          </FieldSet>
          <div className="form-button">
            <CustomButtom type="submit">Criar evento</CustomButtom>
          </div>
        </form>
      </Card>
    </>
  );
}
