import { CirclePlus } from "lucide-react";
import { Link } from "react-router";
import EventCard from "~/components/shared-component/EventCard";
import LayoutWrapper from "~/components/shared-component/LayoutWrapper";

export default function Events() {
  return (
    <LayoutWrapper
      headerConfigs={{
        title: "Events",
        children: (
          <Link to="/events/create-event">
            <CirclePlus />
          </Link>
        ),
      }}
      className="p-4"
    >
      <div className="w-full grid grid-cols-1 gap-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>
    </LayoutWrapper>
  );
}
