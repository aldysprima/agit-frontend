import http from "./axios";

class apiRepository {
  async login(data) {
    return http.post("/auth/login", data);
  }
  async getPositions() {
    return http.get("/positions");
  }
  async getPositionById(id) {
    return http.get(`/position/${id}`);
  }
}

export default apiRepository;
