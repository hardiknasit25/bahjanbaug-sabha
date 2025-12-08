import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  fetchGroupReport,
  fetchMembersReport,
  selectFilteredReportMembers,
  setSearchText,
} from "~/store/slice/reportSlice";

export const useReport = () => {
  const dispatch = useAppDispatch();
  const reportState = useAppSelector((state) => state.report);
  const filteredMembers = useAppSelector(selectFilteredReportMembers);

  const actions = {
    setSearchText: (searchText: string) => dispatch(setSearchText(searchText)),
  };

  const thunks = {
    fetchMembersReport: () => dispatch(fetchMembersReport()),
    fetchGroupReport: () => dispatch(fetchGroupReport()),
  };

  return {
    // State
    ...reportState,
    filteredMembers,

    // Actions
    ...actions,

    // Thunks
    ...thunks,
  };
};
