import "./App.css";

function FormularioDeEvento() {
  return (
    <>
      <form className="form">
        <h2>Preencha para criar um evento:</h2>
        <fieldset>
          <label htmlFor="nome">Qual o nome do evento?</label>
          <input type="text" id="nome" />
        </fieldset>
        <fieldset>
          <label htmlFor="nome">Data do evento</label>
          <input type="text" id="data" />
        </fieldset>
        <fieldset>
          <label htmlFor="nome">Tema do evento</label>
          <input type="text" id="tema" />
        </fieldset>
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
