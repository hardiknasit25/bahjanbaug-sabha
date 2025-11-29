import type { MetaArgs } from "react-router";
import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import MemberListCard from "~/components/shared-component/MemberListCard";

export function meta({}: MetaArgs) {
  return [
    { title: "Members" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Members() {
  const members = [
    {
      name: "Abhishek Hasmukhbhai Radadiya",
      smkId: "SMK001",
      imageApiUrl: "",
    },
    {
      name: "Harikrushna Ghanshyambhai Vaghasiya",
      smkId: "SMK002",
      imageApiUrl: "",
    },
    {
      name: "Charlie Brown",
      smkId: "SMK003",
      imageApiUrl: "",
    },
    {
      name: "David Lee",
      smkId: "SMK004",
      imageApiUrl: "",
    },
    {
      name: "Eva Green",
      smkId: "SMK005",
      imageApiUrl: "",
    },
    {
      name: "Frank Ocean",
      smkId: "SMK006",
      imageApiUrl: "",
    },
    {
      name: "Grace Hopper",
      smkId: "SMK007",
      imageApiUrl: "",
    },
    {
      name: "Harry Potter",
      smkId: "SMK008",
      imageApiUrl: "",
    },
    {
      name: "Irene Adler",
      smkId: "SMK009",
      imageApiUrl: "",
    },
    {
      name: "John Doe",
      smkId: "SMK010",
      imageApiUrl: "",
    },
  ];

  const handleStatusChange = (smkId: string, status: string) => {
    console.log(`Member ${smkId} status changed to ${status}`);
  };

  return (
    <LayoutWrapper>
      <div className="flex flex-col">
        {members.map((member) => (
          <MemberListCard
            key={member.smkId}
            name={member.name}
            smkId={member.smkId}
            imageApiUrl={member.imageApiUrl}
            onStatusAction={(status) =>
              handleStatusChange(member.smkId, status)
            }
          />
        ))}
      </div>
    </LayoutWrapper>
  );
}
