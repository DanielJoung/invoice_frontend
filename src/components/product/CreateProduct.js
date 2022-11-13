import { useState, useEffect } from "react";

function CreateProduct(props) {
  const [products, setProducts] = useState({
    productname: "",
    price: "",
    quantity: "",
    discount: "",
    company: localStorage.getItem("companyname"),
  });
  // console.log(props.products.company);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/products/create",
        {
          method: "POST",
          body: JSON.stringify({
            productname: products.productname,
            price: products.price,
            quantity: products.quantity,
            discount: products.discount,
            company: localStorage.getItem("companyname"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      props.CreateProduct(data.data);
      setProducts({
        productname: "",
        price: "",
        quantity: "",
        discount: "",
      });
      console.log(data);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setProducts({
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Discount</td>
              <td>Submit</td>
            </tr>
          </thead>

          <tbody id="tbody">
            <tr>
              <td>
                <input type="text" id="productname" onChange={handleChange} />
              </td>
              <td>
                <input type="number" id="price" onChange={handleChange} />
              </td>
              <td>
                <input type="number" id="quantity" onChange={handleChange} />
              </td>
              <td>
                <input type="number" id="discount" onChange={handleChange} />
              </td>
              <td>
                <button className="is-primary is-small  button">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="buttons" id="register"></div>
    </>
  );
}

export default CreateProduct;
