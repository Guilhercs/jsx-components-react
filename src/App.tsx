import "./App.css";
import { EventForm } from "./components/EventForm";

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
          <EventForm />
        </div>
      </main>
    </>
  );
}

export default App;
