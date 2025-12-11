import { useState } from "react";
import AddItemForm from "../components/AddItemForm";

function Dashboard({ items, setItems }) {
  return (
    <div>
      <h1>Panel de Control</h1>
      <AddItemForm items={items} setItems={setItems} />
    </div>
  );
}

export default Dashboard;
