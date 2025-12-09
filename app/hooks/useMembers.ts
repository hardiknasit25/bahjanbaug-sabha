import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  createMember,
  fetchMembers,
  setMembers,
  setSearchText,
  selectFilteredMembers,
  selectFilteredMembersByPoshakGroups,
  fetchMemberById,
  fetchMembersByPoshakGroups,
  enterSabhaReason,
  fetchGroupSelect,
} from "~/store/slice/memberSlice";
import type { CommonParams } from "~/types/common.interface";
import { type MemberData } from "~/types/members.interface";

export const useMembers = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector((state) => state.members);
  const filteredMembers = useAppSelector(selectFilteredMembers);
  const filteredMembersByPoshakGroups = useAppSelector(
    selectFilteredMembersByPoshakGroups
  );

  const actions = {
    setAllMembers: (memberList: MemberData[]) =>
      dispatch(setMembers(memberList)),
    setSearchText: (searchText: string) => dispatch(setSearchText(searchText)),
  };

  const methods = {};

  const thunks = {
    fetchMembers: () => dispatch(fetchMembers()),
    fetchMemberById: (memberId: number) => dispatch(fetchMemberById(memberId)),
    fetchMembersByPoshakGroups: () => dispatch(fetchMembersByPoshakGroups()),
    createMember: (memberData: MemberData) => {
      dispatch(createMember(memberData));
    },
    enterSabhaReason: (sabha_id: number, user_id: number, reason: string) =>
      dispatch(enterSabhaReason({ sabha_id, user_id, reason })),
    fetchGroupSelect: () => dispatch(fetchGroupSelect()),
  };

  return {
    // stats
    ...members,
    filteredMembers,
    filteredMembersByPoshakGroups,

    // actions
    ...actions,

    // thunks
    ...thunks,
  };
};
