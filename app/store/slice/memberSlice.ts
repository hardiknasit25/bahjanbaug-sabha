import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { memberService } from "~/services/memberService";
import type { MemberData, MemberStatus } from "~/types/members.interface";

interface MemberState {
  members: MemberData[];
  loading: boolean;
  error: string | null;
}

const initialState: MemberState = {
  members: [],
  loading: false,
  error: null,
};

//#region fetch members
export const fetchMembers = createAsyncThunk(
  "members/fetchMembers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await memberService.getMembers();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

//#region create member
export const createMember = createAsyncThunk(
  "members/createMember",
  async (memberData: MemberData, { rejectWithValue }) => {
    try {
      const response = await memberService.createMember(memberData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

//#region member slice

const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    setMembers: (state, action: PayloadAction<MemberData[]>) => {
      state.members = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    //#region fetch members
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    //#region create member
    builder
      .addCase(createMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMember.fulfilled, (state, action) => {
        state.loading = false;
        state.members.push(action.payload);
      })
      .addCase(createMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setMembers, setLoading, setError } = memberSlice.actions;

export default memberSlice.reducer;
