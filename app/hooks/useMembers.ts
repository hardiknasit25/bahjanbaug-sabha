import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  addMember,
  removeMember,
  setMembers,
  updateMemberStatus,
} from "~/store/slice/memberSlice";
import { type MemberData, type MemberStatus } from "~/types/members.interface";

export const useMembers = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector((state) => state.members);

  const actions = {
    updateStatus: (smkNo: string, status: MemberStatus) => {
      dispatch(updateMemberStatus({ smkNo, status }));
    },

    addNewMember: (member: MemberData) => {
      dispatch(addMember(member));
    },

    deleteMember: (smkNo: string) => {
      dispatch(removeMember(smkNo));
    },

    setAllMembers: (memberList: MemberData[]) => {
      dispatch(setMembers(memberList));
    },
  };

  return {
    // stats
    ...members,

    // actions
    ...actions,
  };
};
