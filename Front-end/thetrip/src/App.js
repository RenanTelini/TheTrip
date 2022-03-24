import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";

import Clientes from "./views/clientes";
import ClientesCreate from "./views/clientes/Create";
import Contatos from "./views/contato";
import ContatosCreate from "./views/contato/Create";
import Destinos from "./views/destinos";
import DestinosCreate from "./views/destinos/Create";
import Promocoes from "./views/promocoes";
import PromocoesCreate from "./views/promocoes/Create";

import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu/>
        <Routes>

        <Route path="/" element={ <Home/> } />

        {/*          CLIENTES          */}
        <Route path="/Clientes" element={ <Clientes/> } />
        <Route path="/Clientes-Create" element={ <ClientesCreate/> } />
        <Route path="/Clientes-Update/:id" element={ <ClientesCreate/> } />

        <Route path="/Contatos" element={ <Contatos/> }/>
        <Route path="/Contatos-Create"element={ < ContatosCreate /> } />
        <Route path="/Contatos-Update/:id" element={ <ContatosCreate/> } />

        {/*          DESTINOS          */}
        <Route path="/Destinos" element={ <Destinos/> }/>
        <Route path="/Destinos-Create"element={ < DestinosCreate /> } />
        <Route path="/Destinos-Update/:id" element={ <DestinosCreate/> } />       

        <Route path="/Promocoes" element={ <Promocoes/> }/>
        <Route path="/Promocoes-Create"element={ < PromocoesCreate /> } />
        <Route path="/Promocoes-Update/:id" element={ <PromocoesCreate/> } />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
