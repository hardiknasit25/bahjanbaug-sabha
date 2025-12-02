import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { Link, type MetaArgs } from "react-router";
import { Virtuoso } from "react-virtuoso";
import { ClientOnly } from "~/components/shared-component/ClientOnly";
import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import MemberListCard from "~/components/shared-component/MemberListCard";
import MemberSkeleton from "~/components/skeleton/MemberSkeleton";
import { useMembers } from "~/hooks/useMembers";

export function meta({}: MetaArgs) {
  return [
    { title: "Members" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Members() {
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
      }}
    >
      <ClientOnly
        fallback={
          <div className="">
            {Array.from({ length: 10 }).map((_, index) => (
              <MemberSkeleton key={index} />
            ))}
          </div>
        }
      >
        <Virtuoso
          style={{ height: "100%", width: "100%" }}
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
          useWindowScroll
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
      </ClientOnly>
    </LayoutWrapper>
  );
}
