import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen ">
      <section id="inicio" className="bg-gradient-to-t to-[#000207] from-[#02153af5]">
        <Header />
        <Hero />
      </section>
      <section className="text-4xl p-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis dicta iure dolor, doloremque error accusantium, in repellendus beatae vel ducimus iste molestias ab cumque, soluta sit. Vel, iste officiis?
      </section>
    </main>
  );
}

export default App;