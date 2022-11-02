import  Item  from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row" onClick={(e) => (e)}>
        {products.map((prod) => {
          return <Item key={prod.id} {...prod} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
