import { useParams } from "react-router-dom";
import { useState } from "react";

import { initialItems } from "./Home"; // ⚠️ Mejor mover initialItems a un archivo separado si lo deseas

function ItemDetails() {
  const { id } = useParams();

  const item = initialItems.find((food) => food.id === id);

  if (!item) return <h2>Alimento no encontrado</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{item.name}</h1>

      <img 
        src={item.image} 
        alt={item.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p><strong>Calorías:</strong> {item.calories}</p>
      <p><strong>Porciones:</strong> {item.servings}</p>

      <p>
        <strong>Calorías totales:</strong> {item.calories * item.servings}
      </p>
    </div>
  );
}

export default ItemDetails;
