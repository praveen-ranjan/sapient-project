import http from "../http-common";

class Categories {
  categoryList() {
    return http.get("categories");
  }
}

export default new Categories();
