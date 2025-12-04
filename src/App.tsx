/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      img: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      date: new Date(),
      theme: themes[0],
      title: "Woman in Tech",
      description:
        "Um evento dedicado a celebrar e promover a participação das mulheres na tecnologia.",
    },
  ]);

  function addEventWhenSubmitForm(event: any) {
    setEvents((prevEvents) => [...prevEvents, event]);
    console.log(events);
  }

  return (
    <>
      <main className="main">
        <header className="header">
          <img src="/header-desktop.png" alt="header" />
        </header>
        <section className="banner">
          <img src="/Hero Image com texto_L.png" alt="" />
        </section>
        <EventForm themes={themes} onSubmit={addEventWhenSubmitForm} />
        {themes.map((theme) => {
          const hasTheme = events.some((event) => event.theme?.id === theme.id);
          if (!hasTheme) {
            return null;
          }
          return (
            <>
              <section className="stack-container" key={theme.id}>
                <Theme themes={theme} />
                <div className="card-list">
                  {events
                    .filter((event) => event.theme?.id === theme.id)
                    .map((event, index) => (
                      <Card
                        key={index}
                        img={event.img}
                        styles={{
                          borderRadius: "8px",
                          height: "480px",
                          width: "282px",
                        }}
                      >
                        <div style={{ padding: "16px" }}>
                          <p className="tag">{event.theme?.name}</p>
                          <p style={{ fontSize: "12px", fontWeight: "200" }}>
                            {event.date.toLocaleDateString("pt-BR")}
                          </p>

                          <h4>{event.title}</h4>
                          <p>{event.description}</p>
                        </div>
                      </Card>
                    ))}
                </div>
              </section>
            </>
          );
        })}
      </main>
    </>
  );
}

export default App;
