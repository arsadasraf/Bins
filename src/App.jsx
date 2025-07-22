import { Header } from "./components/Header/Header"
import Hero from "./components/Heros/Hero";
import './components/list.css'
import Hr from "./components/Modules/Hr";
import Module from "./components/Modules/Module";


function App() {
  // const mangoPrice =34;

  return (
    <>
    <div className="flex flex-col  ml-10">
    <Header/>
    <Hero/>
    <Module/>
    </div>
    
  
    </>
  )
}

export default App
