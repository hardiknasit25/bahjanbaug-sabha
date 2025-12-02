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
  members: [
    {
      first_name: "Abhishek",
      middle_name: "Hasmukhbhai",
      last_name: "Radadiya",
      img: "/images/members/ramesh.jpg",
      email: "ramesh.patel@example.com",
      mobile: "9876543210",
      role_id: 1,
      birth_day: "1995-02-14",
      satsang_day: "sunday",
      mulgam: "Kathiyavad",
      smk_no: "SMK101",
      address: "Surat, Gujarat",
      is_married: true,
      is_job: true,
      occupation: "job",
      occupation_field: "Software Engineer",
      is_family_leader: false,
      family_leader_id: 0,
      is_seva: true,
      seva: "Mandir Cleaning",
      parichit_bhakt_name: "Mahesh",
      group_id: [1, 3],
    },
    {
      first_name: "Harikrushna",
      middle_name: "Ghanshyambhai",
      last_name: "Vaghasiya",
      img: "/images/members/priya.jpg",
      email: "priya.shah@example.com",
      mobile: "9823456712",
      role_id: 2,
      birth_day: "1998-10-09",
      satsang_day: "friday",
      mulgam: "Bhavnagar",
      smk_no: "SMK102",
      address: "Ahmedabad, Gujarat",
      is_married: false,
      is_job: false,
      occupation: "study",
      occupation_field: "BSc IT",
      is_family_leader: false,
      family_leader_id: 0,
      is_seva: false,
      seva: "",
      parichit_bhakt_name: "Nisha",
      group_id: [2],
    },
    {
      first_name: "Harsh",
      middle_name: "Raj",
      last_name: "Mehta",
      img: "/images/members/harsh.jpg",
      email: "harsh.mehta@example.com",
      mobile: "9912334455",
      role_id: 1,
      birth_day: "1992-07-21",
      satsang_day: "wednesday",
      mulgam: "Vadodara",
      smk_no: "SMK103",
      address: "Vadodara, Gujarat",
      is_married: true,
      is_job: true,
      occupation: "business",
      occupation_field: "Textile Shop",
      is_family_leader: true,
      family_leader_id: 0,
      is_seva: true,
      seva: "Flower Decoration",
      parichit_bhakt_name: "Karan",
      group_id: [1, 4],
    },
    {
      first_name: "Anjali",
      middle_name: "M.",
      last_name: "Desai",
      img: "/images/members/anjali.jpg",
      email: "anjali.desai@example.com",
      mobile: "9090909090",
      role_id: 3,
      birth_day: "2000-01-15",
      satsang_day: "tuesday",
      mulgam: "Rajkot",
      smk_no: "SMK104",
      address: "Rajkot, Gujarat",
      is_married: false,
      is_job: false,
      occupation: "study",
      occupation_field: "MBA",
      is_family_leader: false,
      family_leader_id: 0,
      is_seva: true,
      seva: "Pustak Vitaran",
      parichit_bhakt_name: "Vishal",
      group_id: [3],
    },
    {
      first_name: "Manish",
      middle_name: "D.",
      last_name: "Chauhan",
      img: "/images/members/manish.jpg",
      email: "manish.chauhan@example.com",
      mobile: "9512345678",
      role_id: 1,
      birth_day: "1988-12-05",
      satsang_day: "saturday",
      mulgam: "Surendranagar",
      smk_no: "SMK105",
      address: "Surendranagar, Gujarat",
      is_married: true,
      is_job: true,
      occupation: "job",
      occupation_field: "Accountant",
      is_family_leader: true,
      family_leader_id: 0,
      is_seva: false,
      seva: "",
      parichit_bhakt_name: "Rajan",
      group_id: [4],
    },
    {
      first_name: "Nidhi",
      middle_name: "",
      last_name: "Trivedi",
      img: "/images/members/nidhi.jpg",
      email: "nidhi.trivedi@example.com",
      mobile: "9845126734",
      role_id: 1,
      birth_day: "1999-05-20",
      satsang_day: "monday",
      mulgam: "Amreli",
      smk_no: "SMK106",
      address: "Amreli, Gujarat",
      is_married: false,
      is_job: false,
      occupation: "study",
      occupation_field: "Nursing",
      is_family_leader: false,
      family_leader_id: 0,
      is_seva: true,
      seva: "Food Seva",
      parichit_bhakt_name: "Jinal",
      group_id: [2],
    },
    {
      first_name: "Yash",
      middle_name: "Prakash",
      last_name: "Joshi",
      img: "/images/members/yash.jpg",
      email: "yash.joshi@example.com",
      mobile: "9877001122",
      role_id: 2,
      birth_day: "2001-09-11",
      satsang_day: "thursday",
      mulgam: "Junagadh",
      smk_no: "SMK107",
      address: "Junagadh, Gujarat",
      is_married: false,
      is_job: true,
      occupation: "job",
      occupation_field: "Graphic Designer",
      is_family_leader: false,
      family_leader_id: 0,
      is_seva: false,
      seva: "",
      parichit_bhakt_name: "Rohit",
      group_id: [1, 2],
    },
    {
      first_name: "Kavya",
      middle_name: "R.",
      last_name: "Bhatt",
      img: "/images/members/kavya.jpg",
      email: "kavya.bhatt@example.com",
      mobile: "9033445566",
      role_id: 1,
      birth_day: "1997-08-29",
      satsang_day: "friday",
      mulgam: "Porbandar",
      smk_no: "SMK108",
      address: "Porbandar, Gujarat",
      is_married: true,
      is_job: false,
      occupation: "business",
      occupation_field: "Home Boutique",
      is_family_leader: false,
      family_leader_id: 0,
      is_seva: true,
      seva: "Bhakti Group",
      parichit_bhakt_name: "Neha",
      group_id: [3, 4],
    },
    {
      first_name: "Sagar",
      middle_name: "Jay",
      last_name: "Vora",
      img: "/images/members/sagar.jpg",
      email: "sagar.vora@example.com",
      mobile: "9001122334",
      role_id: 3,
      birth_day: "1985-11-12",
      satsang_day: "wednesday",
      mulgam: "Bhuj",
      smk_no: "SMK109",
      address: "Bhuj, Gujarat",
      is_married: true,
      is_job: true,
      occupation: "job",
      occupation_field: "Teacher",
      is_family_leader: true,
      family_leader_id: 0,
      is_seva: false,
      seva: "",
      parichit_bhakt_name: "Harshad",
      group_id: [1],
    },
    {
      first_name: "Meera",
      middle_name: "S.",
      last_name: "Pandya",
      img: "/images/members/meera.jpg",
      email: "meera.pandya@example.com",
      mobile: "9988776655",
      role_id: 1,
      birth_day: "1994-03-07",
      satsang_day: "sunday",
      mulgam: "Anand",
      smk_no: "SMK110",
      address: "Anand, Gujarat",
      is_married: true,
      is_job: false,
      occupation: "business",
      occupation_field: "Homemade Snacks",
      is_family_leader: false,
      family_leader_id: 0,
      is_seva: true,
      seva: "Kitchen Seva",
      parichit_bhakt_name: "Dhara",
      group_id: [2, 3],
    },
  ],
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
