import { useState } from "react";
import Heart from "../components/Heart";
import MyContext from "../MyContext";
import { useContext } from "react";

export default function Favoritos() {
  const { fav, setFav} = useContext(MyContext)
  const {fotos, setFotos} = useContext(MyContext)
  const {toggleUser} = useContext(MyContext)
  
    return (
      
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3">
          <div className=" galeria grid-columns-4 p-3" >
           {fotos
           .filter((u) => u.favorito == true)
            .map((p) => {
              return (
                <div  key={p.id}>
                  <div onClick={()=> toggleUser(p.id)}
                  
                  className="foto"
                  style={{backgroundImage: `url(${p.src})` }}
                  >
                  <Heart filled={p.favorito} />
                  <p>{p.desc}</p>
                  </div>
                </div>
              );
            })
           }
          </div>
        </div>
      </div>
    )
  }