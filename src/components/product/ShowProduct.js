import React, { useState, useEffect } from "react";

function ShowProduct(props) {
  const handleEdit = (id) => {
    console.log(id);
    props.setId(id);
    props.navigate("/edit/" + id);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Discount</td>
          <td>Edit</td>
          <td>Delete</td>
          {/* <td>Company</td> */}
        </tr>
      </thead>
      <tbody id="tbody">
        {props.products.map((product, i) => {
          // console.log(product.id);

          return (
            <tr key={product.id} id="productId">
              <td>{product.productname}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.discount}</td>
              {/* <td>{product.company.companyname}</td> */}
              <td>
                <button value="edit" onClick={() => handleEdit(product.id)}>
                  Edit
                </button>
              </td>
              <td>
                <form>
                  <input
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
