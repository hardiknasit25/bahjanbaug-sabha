import { CirclePlus } from "lucide-react";
import { Link } from "react-router";
import LayoutWrapper from "~/components/shared-component/LayoutWrapper";

export default function Events() {
  return (
    <LayoutWrapper
      headerConfigs={{
        title: "Events",
        iconName: "Calendar",
        children: (
          <Link to="/events/create-event">
            <CirclePlus size={20} />
          </Link>
        ),
      }}
    >
      <div>Events</div>
    </LayoutWrapper>
  );
}
