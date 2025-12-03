import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import MemberDetailInfo from "~/components/shared-component/MemberDetailInfo";

function MemberDetails() {
  return (
    <LayoutWrapper
      showTab={false}
      headerConfigs={{
        title: "people",
        iconName: "ArrowLeft",
        href: "/members",
      }}
    >
      <MemberDetailInfo />
      <div className="w-full flex flex-col justify-start items-center"></div>
    </LayoutWrapper>
  );
}

export default MemberDetails;
