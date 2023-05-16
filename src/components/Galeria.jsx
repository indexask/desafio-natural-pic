import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../MyContext";
import { useContext } from "react";

export default function Home() {
  const {fotos, setFotos} = useContext(MyContext)
  const { fav, setFav} = useContext(MyContext)
  const { toggleUser} = useContext(MyContext)
  return (
      fotos.map((p) => {
          return (
            <div className="galeria grid-columns-4 p-3">
              <div 
              key={p.id}
              onClick={()=> toggleUser(p.id)}
              className="foto "
              style={{backgroundImage: `url(${p.src})` }}
              >
              </div>
              <Heart filled={p.favorito} />
              <p>{p.desc}</p>
            </div>
          );
        })
  );
}
