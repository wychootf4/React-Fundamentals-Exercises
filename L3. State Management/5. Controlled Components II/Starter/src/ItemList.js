import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      <p className="items">Items</p>

      <ol className="item-list">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ol>
    </div>
  );
};

export default ItemList;
