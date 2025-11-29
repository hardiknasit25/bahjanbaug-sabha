import type { LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon; // Lucide icon component type
  path: string;
  show?: boolean; // optional: defaults to true
}
