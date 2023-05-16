import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./MyContext";
import { useEffect, useState } from "react";
import {photos} from '../public/fotos.json'

export default function App() {
  const endpoint = "/fotos.json";
  const getFotosNaturales = async () => {
    const res = await fetch(endpoint);
    let { photos} = await res.json();
    photos = photos.map((photo)=>({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false
    }))
    setFotos(photos)
  }
  const toggleUser = (id) => {
    // identificar usuario
    const index = fotos.findIndex((foto) => foto.id === id);
    // cambiar su estado
    fotos[index].favorito = !fotos[index].favorito;
    // guardar usuario y su nuevo estado
    setFav([...fotos])
  };
  
  useEffect(() => {
    getFotosNaturales()
  }, []);
  
  const [fotos,setFotos] = useState(photos)
  const [ fav, setFav] = useState("")
  console.log(fotos)
  console.log("console.log de fav",fav)
  return (
    <div className="App">
      <MyContext.Provider value={{fotos, setFotos,fav, setFav,toggleUser}} >

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>

    </div>
  );
}