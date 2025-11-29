import { CalendarDays, ChartColumn, Home, UsersRound } from "lucide-react";
import type { TabItem } from "~/types/tab.interface";

export const tabsConfig: TabItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    path: "/",
    show: true,
  },
  {
    id: "events",
    label: "Events",
    icon: CalendarDays,
    path: "/events",
    show: true,
  },
  {
    id: "members",
    label: "Members",
    icon: UsersRound,
    path: "/members",
    show: true,
  },
  {
    id: "report",
    label: "Report",
    icon: ChartColumn,
    path: "/report",
    show: true,
  },
];
