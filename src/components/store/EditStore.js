import React, { useState } from "react";

function EditStore(props) {
  const store = props.stores.find((store) => {
    return store.id === props.currentStoreId;
  });
  // console.log(props.stores);

  const [editStore, setEditStore] = useState({
    storename: store.storename,
    storephone: store.storephone,
    address: store.address,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const edit = {
      storename: editStore.storename,
      storephone: editStore.storephone,
      address: editStore.address,
    };
    props.updateStore(edit);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditStore((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Store Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={editStore.storename}
              id="storename"
              onChange={(e) => handleChange(e)}
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
              value={editStore.storephone}
              id="storephone"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="field" id="register">
          <label className="label" htmlFor="name">
            Address
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={editStore.address}
              id="address"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="buttons" id="register">
          <button className="is-primary is-rounded is-fullwidth button">
            Edit
          </button>
        </div>
      </form>
    </>
  );
}

export default EditStore;
