function ListItem({ item, onDelete }) {
  // Condición: si tiene menos de 300 calorías → saludable
  const isHealthy = item.calories < 300;
  const statusIcon = isHealthy ? "✔️" : "❌";

  return (
    <li 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid #ccc",
        marginBottom: "8px",
        borderRadius: "6px",
        background: "#f9f9f9"
      }}
    >
      <span>
        {item.name} — {item.calories} cal — {statusIcon}
      </span>

      <button 
        onClick={() => onDelete(item.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Eliminar
      </button>
    </li>
  );
}

export default ListItem;

