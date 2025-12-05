import type { MemberData } from "~/types/members.interface";

export function filterMembers(memberList: MemberData[], searchText: string) {
  const query = searchText.trim().toLowerCase();
  if (!query) return memberList;

  const words = query.split(" ").filter(Boolean);

  const normalized = memberList.map((m) => ({
    ...m,
    first: (m.first_name || "").toLowerCase(),
    middle: (m.middle_name || "").toLowerCase(),
    last: (m.last_name || "").toLowerCase(),
    fullName: [m.first_name, m.middle_name, m.last_name]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
    smk: (m.smk_no || "").toString().toLowerCase(),
  }));

  return normalized.filter((m) =>
    words.every(
      (w) =>
        m.first.includes(w) ||
        m.middle.includes(w) ||
        m.last.includes(w) ||
        m.fullName.includes(w) ||
        m.smk.includes(w) ||
        m.id?.toString().includes(w)
    )
  );
}
