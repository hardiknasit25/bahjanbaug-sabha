import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  createMember,
  fetchMembers,
  setMembers,
} from "~/store/slice/memberSlice";
import { type MemberData } from "~/types/members.interface";

export const useMembers = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector((state) => state.members);

  const actions = {
    setAllMembers: (memberList: MemberData[]) => {
      dispatch(setMembers(memberList));
    },
  };

  const thunks = {
    fetchMembers: () => {
      dispatch(fetchMembers());
    },

    createMember: (memberData: MemberData) => {
      dispatch(createMember(memberData));
    },
  };

  return {
    // stats
    ...members,

    // actions
    ...actions,

    // thunks
    ...thunks,
  };
};
