import { useState } from "react";

function CreateStore(props) {
  const [store, setStore] = useState({
    storename: "",
    address: "",
    storephone: "",
    company: localStorage.getItem("companyname"),
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStore((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/stores/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            storename: store.storename,
            address: store.address,
            storephone: store.storephone,
            company: store.company,
          }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (res.status === 201) {
        props.createStore(data);
        console.log(data);
      }

      setStore({
        storename: "",
        address: "",
        storephone: "",
        company: localStorage.getItem("companyname"),
      });
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
            Store Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Store Name"
              value={store.storename}
              // name="productname"
              id="storename"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Store Phone
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Address"
              // name="price"
              id="storephone"
              onChange={handleChange}
              value={store.storephone}
            />
          </div>
        </div>
        <div id="register">
          <label className="label" htmlFor="name">
            Address{" "}
          </label>
          <input
            className="textarea"
            placeholder="e.g. 44-44 444th st..."
            onChange={handleChange}
            value={store.address}
            id="address"
          />
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

export default CreateStore;
