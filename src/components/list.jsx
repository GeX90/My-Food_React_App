import ListItem from "./listItem";

function List({ items, setItems }) {
  const handleDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map(item => (
        <ListItem 
          key={item.id} 
          item={item} 
          onDelete={handleDelete} 
        />
      ))}
    </ul>
  );
}

export default List;
