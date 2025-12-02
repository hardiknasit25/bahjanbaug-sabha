import axiosInstance from "~/interceptor/interceptor";
import { API_ENDPOINTS } from "~/lib/api-endpoints";
import type { MemberPayload } from "~/types/members.interface";

export const memberService = {
  //#region get members
  getMembers: async () => {
    try {
      const response = await axiosInstance(API_ENDPOINTS.MEMBERS.BASE);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  //#create member
  createMember: async (memberData: MemberPayload) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.MEMBERS.CREATE,
        memberData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
