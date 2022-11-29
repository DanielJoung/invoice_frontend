function ShowProduct(props) {
  const handleEdit = (id) => {
    console.log(id);
    props.setId(id);
    props.navigate("/edit/product/" + id);
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
              <td id="item-list">{product.productname}</td>
              <td id="item-list">{product.price}</td>
              <td id="item-list">{product.quantity}</td>
              <td id="item-list">{product.discount}</td>
              {/* <td>{product.company.companyname}</td> */}
              <td id="item-list">
                <button value="edit" onClick={() => handleEdit(product.id)}>
                  Edit
                </button>
              </td>
              <td id="item-list">
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
