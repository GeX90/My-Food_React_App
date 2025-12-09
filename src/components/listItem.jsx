import { Link } from "react-router-dom";

function ListItem({ item, onDelete }) {
  const isHealthy = item.calories < 300;

  return (
    <li className="list-item">
      <Link
        to={`/item/${item.id}`}
        style={{
          display: "flex",
          textDecoration: "none",
          color: "black",
          alignItems: "center",
          flex: 1
        }}
      >
        <img src={item.image} alt={item.name} />

        <div>
          <div className="list-item-title">{item.name}</div>
          <div>{item.calories} cal · {isHealthy ? "✔ saludable" : "❌ no saludable"}</div>
        </div>
      </Link>

      <button
        onClick={() => onDelete(item.id)}
        style={{
          background: "tomato",
          border: "none",
          color: "white",
          padding: "8px 15px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Eliminar
      </button>
    </li>
  );
}

export default ListItem;



