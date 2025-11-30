import type React from "react";
import "./App.css";

function TitleCard(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <>
      <h2 {...props}>{props.children}</h2>
    </>
  );
}

function FieldSet(props: React.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <>
      <fieldset>{props.children}</fieldset>
    </>
  );
}

function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.children}</label>
    </>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input {...props} />
    </>
  );
}

function FormularioDeEvento() {
  return (
    <>
      <form className="form">
        <TitleCard>Preencha para criar um evento:</TitleCard>
        <FieldSet>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <Input type="text" id="nome" />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="nome">Data do evento</Label>
          <Input type="text" id="data" />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="nome">Tema do evento</Label>
          <Input type="text" id="tema" placeholder="Summer dev hits" />
        </FieldSet>
      </form>
    </>
  );
}

function App() {
  return (
    <>
      <main>
        <header className="header">
          <img src="/header-desktop.png" alt="header" />
        </header>
        <section>
          <img src="/Hero Image com texto_L.png" alt="" />
        </section>
        <div>
          <FormularioDeEvento />
        </div>
      </main>
    </>
  );
}

export default App;
