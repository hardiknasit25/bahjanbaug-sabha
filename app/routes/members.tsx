import type { MetaArgs } from "react-router";
import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import MemberListCard from "~/components/shared-component/MemberListCard";
import { useMembers } from "~/hooks/useMembers";

export function meta({}: MetaArgs) {
  return [
    { title: "Members" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Members() {
  const { members, loading, error, updateStatus } = useMembers();

  const handleStatusChange = (
    smkNo: string,
    status: "present" | "late" | "absent" | "excused"
  ) => {
    updateStatus(smkNo, status);
    console.log(`Member ${smkNo} status changed to ${status}`);
  };

  if (loading) {
    return (
      <LayoutWrapper>
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">Loading members...</p>
        </div>
      </LayoutWrapper>
    );
  }

  if (error) {
    return (
      <LayoutWrapper>
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper>
      <div className="flex flex-col">
        {members.map((member) => (
          <MemberListCard
            key={member.smk_no}
            name={member.name}
            smkId={member.smk_no}
            imageApiUrl={member.img}
            status={member.status}
            onStatusAction={(status) =>
              handleStatusChange(member.smk_no, status)
            }
          />
        ))}
      </div>
    </LayoutWrapper>
  );
}
