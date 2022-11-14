import { useState, useEffect } from "react";

function CreateProduct(props) {
  const [products, setProducts] = useState({
    productname: "",
    price: "",
    quantity: "",
    discount: "",
    company: localStorage.getItem("companyname"),
  });

  console.log(products);

  const handleChange = (e) => {
    setProducts({
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resJson = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/products/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productname: products.productname,
            price: products.price,
            quantity: products.quantity,
            discount: products.discount,
            company: products.company,
          }),
          credentials: "include",
        }
      );
      const data = await resJson.json();

      props.createProduct(data);

      setProducts({
        productname: "",
        price: "",
        quantity: "",
        discount: "",
        company: localStorage.getItem("companyname"),
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 id="tag">Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Product Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Product Name"
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
              placeholder="Price"
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
              placeholder="Quantity"
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
              placeholder="Discount"
              name="discount"
              id="discount"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="buttons" id="register">
          <button className="is-primary is-rounded is-fullwidth button">
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateProduct;
