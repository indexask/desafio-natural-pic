import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../MyContext";
import { useContext } from "react";

export default function Home() {
  const {fotos, setFotos} = useContext(MyContext)
  const { toggleUser} = useContext(MyContext)
  return (
      fotos.map((p) => {
          return (
            <div key={p.id}>
              <div 
              onClick={()=> toggleUser(p.id)}
              className="foto "
              style={{backgroundImage: `url(${p.src})` }}
              >
              <Heart filled={p.favorito} />
              <p>{p.desc}</p>
              </div>
            </div>
          );
        })
  );
}
