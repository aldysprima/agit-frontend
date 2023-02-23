import create from "zustand";
import apiRepository from "../repository/api";

const ApiRepository = new apiRepository();

export const store = create((set) => ({
  isLoading: false,
  positions: [],
  position: {},
  user: {},
  login: async (data, navigate, toast) => {
    set({ isLoading: true });
    try {
      const response = await ApiRepository.login(data);
      set({ user: await response.data });
      const token = await response.headers.authorization.split(" ")[1];
      localStorage.setItem("userToken", token);
      set({ isLoading: false });
      navigate("/job-list");
      toast.success("Login Succed");
    } catch (error) {
      toast.error(error?.response?.data);
      set({ isLoading: false });
    }
  },
  fetchPositions: async () => {
    set({ isLoading: true });
    try {
      const response = await ApiRepository.getPositions();
      set({ positions: await response.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.log(error.response.data);
    }
  },
  fetchPositionById: async (id) => {
    set({ isLoading: true });
    try {
      const response = await ApiRepository.getPositionById(id);
      set({ position: await response.data[0], isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.log(error.response.data);
    }
  },
}));
