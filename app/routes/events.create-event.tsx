import LayoutWrapper from "~/components/shared-component/LayoutWrapper";

function createEvent() {
  return (
    <LayoutWrapper
      showTab={false}
      headerConfigs={{
        title: "Create Sabha",
        iconName: "ArrowLeft",
        href: "/events",
      }}
    >
      <div>Create Sabha</div>
    </LayoutWrapper>
  );
}

export default createEvent;
