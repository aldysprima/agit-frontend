import http from "./axios";

class apiRepository {
  async login(data) {
    return http.post("/auth/login", data);
  }
  async getPositions(description, location, full_time) {
    return http.get(
      `/positions?description=${description}&location=${location}&full_time=${full_time}`
    );
  }
  async getPositionById(id) {
    return http.get(`/position/${id}`);
  }
}

export default apiRepository;
