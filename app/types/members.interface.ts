export interface MemberData {
  name: string;
  smk_no: string;
  img: string;
  status: MemberStatus;
}

export type MemberStatus = "present" | "absent";
