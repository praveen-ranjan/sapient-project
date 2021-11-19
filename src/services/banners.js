import http from "../http-common";

class Banners {
  bannerList() {
    return http.get("banners");
  }
}

export default new Banners();
