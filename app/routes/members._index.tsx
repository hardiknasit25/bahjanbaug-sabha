import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { Link, type MetaArgs } from "react-router";
import { Virtuoso } from "react-virtuoso";
import { ClientOnly } from "~/components/shared-component/ClientOnly";
import GroupAccordionMember from "~/components/shared-component/GroupAccordionMember";
import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import MemberListCard from "~/components/shared-component/MemberListCard";
import MemberSkeleton from "~/components/skeleton/MemberSkeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useMembers } from "~/hooks/useMembers";

export function meta({}: MetaArgs) {
  return [
    { title: "Members" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type MemberTabs = "all-members" | "by-group";

export default function Members() {
  const [activeTab, setActiveTab] = useState<MemberTabs>("all-members");
  const { members, loading, error } = useMembers();
  const [searchText, setSearchText] = useState("");

  return (
    <LayoutWrapper
      headerConfigs={{
        title: "Members",
        children: (
          <Link to="/members/create-member">
            <CirclePlus size={25} />
          </Link>
        ),
        className: "flex-col gap-2",
        description: `Total ${members.length} Members`,
        showSearch: true,
        searchPlaceholder: "Search Members...",
        searchValue: searchText,
        onSearchChange: (value: string) => {
          setSearchText(value);
          console.log("Search value changed:", value);
        },
        showSorting: activeTab === "all-members",
      }}
    >
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as MemberTabs)}
        className="w-full h-full flex flex-col justify-start"
      >
        <TabsList className="w-full bg-primaryColor rounded-none justify-evenly h-10 pb-2">
          <TabsTrigger value="all-members">All Members</TabsTrigger>
          <TabsTrigger value="by-group">Poshak Groups</TabsTrigger>
        </TabsList>
        <TabsContent value="all-members" className="h-full w-full">
          <Virtuoso
            totalCount={members.length}
            itemContent={(index) => {
              const member = members[index];
              return (
                <MemberListCard
                  key={member.smk_no}
                  member={member}
                  from={"members"}
                />
              );
            }}
            components={{
              Footer: () => (
                <div className="">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <MemberSkeleton key={index} />
                  ))}
                </div>
              ),
            }}
          />
        </TabsContent>
        <TabsContent value="by-group" className="h-full w-full">
          <GroupAccordionMember />
        </TabsContent>
      </Tabs>
    </LayoutWrapper>
  );
}
