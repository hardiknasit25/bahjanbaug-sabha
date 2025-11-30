import EventForm from "~/components/forms/EventForm";
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
      <EventForm />
    </LayoutWrapper>
  );
}

export default createEvent;
