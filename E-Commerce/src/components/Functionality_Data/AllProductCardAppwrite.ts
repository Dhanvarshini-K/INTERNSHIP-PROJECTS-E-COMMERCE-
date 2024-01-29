import { Query } from "appwrite";
import { databases } from "../../AppWriteConfig";
import { productList } from "./AllProductCard";

// for (const product in productList) {
//   databases.createDocument(
//     "",
//     "",
//     productList[product].id.toString(),
//     {
//       product_id: productList[product].id,
//       category: productList[product].category,
//       discount_title: productList[product].discount_title,
//       discount_percent: productList[product].discount_percent,
//       product_title: productList[product].product_title,
//       actual_price: productList[product].actual_price,
//       discount_price: productList[product].discount_price,
//       color: productList[product].color,
//     }
//   );
// }

const allProductList = databases.listDocuments(
  "659681feb0c97e65e766",
  "65b22413a06b653fd138",
  [Query.orderAsc("product_id"),
Query.limit(72)]
);
export let productListDocuments;
export let productListLength: number;

allProductList.then(
  function (response) {
    // console.log(response.documents?.[0]?.benefit_number);
    productListDocuments = response;
    productListLength = productListDocuments.documents.length;
    console.log("res", response);

  },
  function (error) {
    console.log(error);
  }
);

const homeProductList = databases.listDocuments(
    "659681feb0c97e65e766",
    "65b22413a06b653fd138",
    [Query.orderAsc("product_id"),
     Query.limit(12)]
  );
  export let homeProductListDocuments;

  homeProductList.then(
    function (response) {
      // console.log(response.documents?.[0]?.benefit_number);
      homeProductListDocuments = response;
      console.log(homeProductListDocuments);
    },
    function (error) {
      console.log(error);
    }
  );
