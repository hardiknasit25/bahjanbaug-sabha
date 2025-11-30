import type { MemberStatus } from "~/types/members.interface";

interface MemberStatusBadgeProps {
  status: MemberStatus;
}

const statusConfig = {
  present: { label: "Present", className: "bg-green-100 text-green-800" },
  late: { label: "Late", className: "bg-amber-100 text-amber-800" },
  absent: { label: "Absent", className: "bg-red-100 text-red-800" },
  excused: { label: "Excused", className: "bg-gray-100 text-gray-800" },
  pending: { label: "Pending", className: "bg-blue-100 text-blue-800" },
};

export default function MemberStatusBadge({ status }: MemberStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
