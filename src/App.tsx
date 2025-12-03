import "./App.css";
import { Card } from "./components/card";
import { EventForm } from "./components/eventForm";
import { Theme } from "./components/theme";

const themes = [
  { id: 1, name: "frontend" },
  { id: 2, name: "backend" },
  { id: 3, name: "devops" },
  { id: 4, name: "inteligência artificial" },
  { id: 5, name: "data science" },
  { id: 6, name: "cloud" },
];

const events = [
  {
    id: 1,
    img: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
    date: new Date(),
    theme: themes[0],
    title: "Woman in Tech",
  },
];

function App() {
  return (
    <>
      <main className="main">
        <header className="header">
          <img src="/header-desktop.png" alt="header" />
        </header>
        <section className="banner">
          <img src="/Hero Image com texto_L.png" alt="" />
        </section>
        <EventForm themes={themes} />
        {themes.map((item) => (
          <section className="stack-container" key={item.id}>
            <Theme themes={item}></Theme>
            <Card
              img="https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png"
              styles={{ borderRadius: "8px", height: "480px", width: "282px" }}
            >
              <div style={{ padding: "16px" }}>
                <p className="tag">{events[0].theme.name}</p>
                <p style={{ fontSize: "12px", fontWeight: "200" }}>
                  {events[0].date.toLocaleDateString("pt-BR")}
                </p>
                <h4>{events[0].title}</h4>
                <p></p>
              </div>
            </Card>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
