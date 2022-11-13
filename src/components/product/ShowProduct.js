import React from "react";

function ShowProduct(props) {
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ShowProduct;
