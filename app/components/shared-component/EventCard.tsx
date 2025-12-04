import { Link } from "react-router";
import { cn } from "~/lib/utils";
import type { SabhaData } from "~/types/sabha.interface";

function EventCard({ sabha }: { sabha: SabhaData }) {
  const status = sabha?.status;
  return (
    <div
      className={cn(
        "flex items-center justify-between bg-eventCardColor rounded-xl shadow-sm overflow-hidden border-l-8 px-4",
        status === "upcoming" && "bg-blue-500/10 border-l-blue-500",
        status === "completed" && "bg-green-500/10 border-l-green-500",
        status === "running" && "bg-orange-500/10 border-l-orange-500"
      )}
    >
      {/* Content */}
      <div className="flex flex-col flex-1 py-3">
        <h2 className="font-semibold text-lg text-textColor font-poppins capitalize">
          {sabha?.title}
        </h2>
        <p className="text-sm text-textLightColor">{sabha?.sabha_date}</p>
      </div>

      {/* Start Button */}
      <Link
        to={"/sabha/attendance/10"}
        className={cn(
          "block px-5 py-2 text-sm text-white font-medium rounded-full",
          status === "upcoming" && "bg-blue-500",
          status === "completed" && "bg-green-500 cursor-not-allowed",
          status === "running" && "bg-orange-500"
        )}
      >
        {status === "upcoming"
          ? "Start"
          : status === "running"
            ? "Join"
            : "Completed"}
      </Link>
    </div>
  );
}

export default EventCard;
