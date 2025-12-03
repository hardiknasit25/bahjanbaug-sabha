import axiosInstance from "~/interceptor/interceptor";
import { API_ENDPOINTS } from "~/lib/api-endpoints";

export const sabhaService = {
  //#region get all sabhas
  getSabhas: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.SABHA.BASE);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
