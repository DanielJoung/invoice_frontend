// const searchProduct = (e) => {
//   const nameProd = document.querySelector(".nameProd");
//   const priceProd = document.querySelector(".priceProd");
//   const searchProd = document.querySelector("#searchProd");
//   const totalPrice = document.querySelector(".totalPrice");
//   const prodCase = document.querySelector(".prodCase");
//   const invoicetd = document.querySelector("#invoicetd");
//   invoicetd.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e.target);
//   });
//   // const addButton = document.querySelector("#addButton");

//   nameProd.value = e.target.innerText;
//   // console.log(typeof prodCase.value);
//   for (let i in props.users) {
//     let prodName = props.users["product"];
//     for (let j of prodName) {
//       if (e.target.innerText === j["productname"]) {
//         priceProd.innerHTML = `$${j["price"]}`;

//         prodCase.addEventListener("keypress", (e) => {
//           const isNumber = isFinite(e.key);
//           // console.log(number);
//           if (isNumber) {
//             // console.log(number);
//             totalPrice.innerHTML = "$" + j["price"] * Number(e.key);
//           }
//         });
//       }
//     }
//   }

//   if (nameProd.value === e.target.innerText) {
//     for (let i of searchProd.children) {
//       for (let j of i.children) {
//         j.innerText = "";
//       }
//     }
//   }
// };
