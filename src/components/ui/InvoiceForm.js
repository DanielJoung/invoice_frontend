function InvoiceForm(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Case</td>
            <td>Price</td>
            <td>Total Price</td>
            {/* <td>Add</td> */}
            {/* <td>Product</td> */}
          </tr>
        </thead>
        <tbody className="tbody">
          <tr className="copyTr">
            <td>
              <input
                id="invoicetd"
                className="nameProd"
                onChange={props.handleProduct}
                type="text"
              />
            </td>

            <td>
              <input
                id="invoicetd"
                type="number"
                className="prodCase"
                onChange={props.handlePrice}
              />
            </td>
            <td className="priceProd"></td>
            <td id="td-item" className="totalPrice"></td>
          </tr>

          <tr className="copyTr">
            <td>
              <input
                id="invoicetd"
                className="nameProd"
                onChange={props.handleProduct}
                type="text"
              />
            </td>

            <td>
              <input
                id="invoicetd"
                type="number"
                className="prodCase"
                onChange={props.handlePrice}
              />
            </td>
            <td className="priceProd"></td>
            <td id="td-item" className="totalPrice"></td>
          </tr>
        </tbody>
      </table>
      ;
    </>
  );
}

export default InvoiceForm;
