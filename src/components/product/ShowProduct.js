import React, { useEffect } from "react";

function ShowProduct(props) {
  const getProduct = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/products/" + props.currentId)
      .then(async (res) => {
        return await res.json();
      })
      .then((data) => {
        console.log(data.data);
      });
  };

  const handleMovePage = () => {
    props.navigate("/edit/" + props.products.id);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Discount</td>
          {/* <td>Company</td> */}
        </tr>
      </thead>
      <tbody id="tbody">
        {props.products.map((product, i) => {
          // console.log(product);

          return (
            <tr key={product.id}>
              <td>{product.productname}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.discount}</td>
              {/* <td>{product.company.companyname}</td> */}
              <td>
                <form>
                  <input
                    className="is-primary is-small  button"
                    type="submit"
                    value="edit"
                    onClick={handleMovePage}
                  />
                </form>
              </td>
              <td>
                <form>
                  <input
                    className="is-danger is-small  button"
                    type="submit"
                    value="delete"
                    onClick={() => {
                      props.deleteProduct(product.id);
                    }}
                  />
                </form>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ShowProduct;
