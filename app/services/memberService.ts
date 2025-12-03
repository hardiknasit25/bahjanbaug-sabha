import axiosInstance from "~/interceptor/interceptor";
import { API_ENDPOINTS } from "~/lib/api-endpoints";
import type { MemberPayload } from "~/types/members.interface";

export const memberService = {
  //#region get members
  getMembers: async ({
    pageIndex,
    pageSize,
    searchText,
  }: {
    pageIndex: number;
    pageSize: number;
    searchText?: string;
  }) => {
    try {
      const response = await axiosInstance(API_ENDPOINTS.MEMBERS.BASE, {
        params: {
          page: pageIndex,
          size: pageSize,
          search: searchText,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  //#region get member by id
  getMemberById: async (memberId: string) => {
    try {
      const response = await axiosInstance.get(
        `${API_ENDPOINTS.MEMBERS.BASE}/${memberId}`
      );
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
