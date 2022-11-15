import React, { useState } from "react";

function EditProduct(props) {
  const product = props.products.find((product) => {
    return product.id === props.currentId;
  });
  console.log(product);

  const [editProduct, setEditProduct] = useState({
    productname: product.productname,
    price: product.price,
    quantity: product.quantity,
    discount: product.discount,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const edit = {
      productname: editProduct.productname,
      price: editProduct.price,
      quantity: editProduct.quantity,
      discount: editProduct.discount,
    };
    props.updateProduct(edit);
  };

  const handleChange = (e) => {
    setEditProduct({
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Product Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={editProduct.productname}
              name="productname"
              id="productname"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Price
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              value={editProduct.price}
              name="price"
              id="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Quantity
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              value={editProduct.quantity}
              name="quantity"
              id="quantity"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Discount
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              value={editProduct.discount}
              name="discount"
              id="discount"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="buttons" id="register">
          <button className="is-primary is-rounded is-fullwidth button">
            Edit
          </button>
        </div>
      </form>
    </>
  );
}

export default EditProduct;