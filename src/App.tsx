import Button from "./components/Button";
import Link from "./components/Link";
import { navItem } from "./constant";
import Home from "./page/Home";

function App() {
  return (
    <>
      <header className="w-full py-3 flex justify-center items-center fixed z-[999] pointer-events-none">
        <nav className="p-4 bg-neutral-900/60 border-[1px] border-neutral-100/20 rounded-2xl flex items-center gap-6 backdrop-blur-lg pointer-events-auto">
          <a href="/">
            <div className="bg-logo bg-150 rounded-full w-[40px] h-[40px] bg-center"></div>
          </a>

          <ul className="flex space-x-4">
            {navItem.map((item, index) => (
              <li key={index}>
                <Link className="text-lg text-white/60" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <Button>Lets Chat</Button>
          </div>
        </nav>
      </header>

      <main className="max-w-[1280px] mx-auto">
        <Home />
      </main>
    </>
  );
}

export default App;
