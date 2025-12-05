export interface SabhaData {
  id: number;
  title: string;
  sabha_date: string;
  status: SabhaStatus;
  total_present?: number;
  total_users?: number;
}

export type SabhaStatus = "upcoming" | "completed" | "running";
