import React from "react";

function ShowInvoice(props) {
  console.log(props.invoices);

  return (
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Invoice Number</td>
          <td>Case</td>
          <td>Balance</td>
          {/* <td>Edit</td> */}
          <td>Delete</td>
          {/* <td>Company</td> */}
        </tr>
      </thead>
      <tbody>
        {props.invoices.map((invoice, i) => {
          // console.log(product.id);

          return (
            <tr key={invoice.id} id="productId">
              <td>{invoice.created_at}</td>
              <td>{invoice.id}</td>
              <td>{invoice.case} Cases</td>
              <td>${invoice.balance}</td>
              {/* <td>{invoice.store}</td> */}
              {/* <td>{product.company.companyname}</td> */}

              <td>
                {/* <form>
                  <input
                    type="submit"
                    value="delete"
                    onClick={() => {
                      props.deleteProduct(product.id);
                    }}
                  />
                </form> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ShowInvoice;
