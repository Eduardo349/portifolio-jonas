import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Hero from "./components/Hero/Hero";
import Sobre from "./pages/Sobre";
import ProjectsPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hero" element={<Hero/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </>
  );
}


export default App;
