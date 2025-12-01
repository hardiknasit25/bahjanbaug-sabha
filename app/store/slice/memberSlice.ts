import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MemberData, MemberStatus } from "~/types/members.interface";

interface MemberState {
  members: MemberData[];
  loading: boolean;
  error: string | null;
}

const initialState: MemberState = {
  members: [
    {
      name: "Abhishek Hasmukhbhai Radadiya",
      smk_no: "SMK001",
      img: "",
      status: "present",
    },
    {
      name: "Harikrushna Ghanshyambhai Vaghasiya",
      smk_no: "SMK002",
      img: "",
      status: "present",
    },
    {
      name: "Charlie Brown",
      smk_no: "SMK003",
      img: "",
      status: "absent",
    },
    {
      name: "David Lee",
      smk_no: "SMK004",
      img: "",
      status: "absent",
    },
    {
      name: "Eva Green",
      smk_no: "SMK005",
      img: "",
      status: "absent",
    },
    {
      name: "Frank Ocean",
      smk_no: "SMK006",
      img: "",
      status: "absent",
    },
    {
      name: "Grace Hopper",
      smk_no: "SMK007",
      img: "",
      status: "absent",
    },
    {
      name: "Harry Potter",
      smk_no: "SMK008",
      img: "",
      status: "absent",
    },
    {
      name: "Irene Adler",
      smk_no: "SMK009",
      img: "",
      status: "absent",
    },
    {
      name: "John Doe",
      smk_no: "SMK010",
      img: "",
      status: "absent",
    },
  ],
  loading: false,
  error: null,
};

const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    updateMemberStatus: (
      state,
      action: PayloadAction<{ smkNo: string; status: MemberStatus }>
    ) => {
      const { smkNo, status } = action.payload;
      const member = state.members.find((m) => m.smk_no === smkNo);
      if (member) {
        member.status = status;
      }
    },
    addMember: (state, action: PayloadAction<MemberData>) => {
      const newMember: MemberData = {
        ...action.payload,
        status: "absent",
      };
      state.members.push(newMember);
    },
    removeMember: (state, action: PayloadAction<string>) => {
      state.members = state.members.filter((m) => m.smk_no !== action.payload);
    },
    setMembers: (state, action: PayloadAction<MemberData[]>) => {
      state.members = action.payload.map((member) => ({
        ...member,
        status: "absent" as MemberStatus,
      }));
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  updateMemberStatus,
  addMember,
  removeMember,
  setMembers,
  setLoading,
  setError,
} = memberSlice.actions;

export default memberSlice.reducer;
