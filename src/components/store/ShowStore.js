function ShowStore(props) {
  const handleEdit = (id) => {
    // console.log(id);
    props.setStoreId(id);
    props.navigate("/edit/store/" + id);
  };
  return (
    <table>
      <thead>
        <tr>
          <td>Store Name</td>
          <td>Store Phone</td>
          <td>Address</td>
          <td>Edit</td>
          <td>Delete</td>

          {/* <td>Company</td> */}
        </tr>
      </thead>
      <tbody id="tbody">
        {props.stores.map((store, i) => {
          // console.log(store);

          return (
            <tr key={store.id} id="productId">
              <td id="item-list">{store.storename}</td>
              <td id="item-list">{store.storephone}</td>
              <td id="item-list">{store.address}</td>

              {/* <td>{product.company.companyname}</td> */}
              <td id="item-list">
                <button value="edit" onClick={() => handleEdit(store.id)}>
                  Edit
                </button>
              </td>
              <td id="item-list">
                <form>
                  <input
                    type="submit"
                    value="delete"
                    onClick={() => {
                      props.deleteStore(store.id);
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

export default ShowStore;
