import http from "../http-common";

class Products {
  productList() {
    return http.get("products");
  }
}

export default new Products();
