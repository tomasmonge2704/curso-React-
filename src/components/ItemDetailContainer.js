import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { DatosContext } from "./DatosContext";
import { useContext } from "react";
import "../App.css";



export default function ItemDetailContainer() {
  
  const {Id} = useParams();

  const context = useContext(DatosContext);
  console.log(Id)
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        marginTop: "5%",
      }}
    >
      <ItemDetail item={context.ItemDetail(Id)} />
    </div>
  );
}
