import { useState } from "react";

function AddItemForm({ setItems }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      calories: Number(calories),
      image,
      servings: Number(servings),
    };

    // Añadir nuevo elemento
    setItems((prev) => [...prev, newItem]);

    // Limpiar formulario
    setName("");
    setCalories("");
    setImage("");
    setServings("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "300px",
        marginBottom: "20px",
      }}
    >
      <h3>Añadir Nueva Receta</h3>

      <input
        type="text"
        placeholder="Nombre del alimento"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Calorías"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="URL Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Porciones"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
        required
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddItemForm;

