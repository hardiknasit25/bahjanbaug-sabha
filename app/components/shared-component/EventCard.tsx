import { Link } from "react-router";
import { cn } from "~/lib/utils";
import type { SabhaData } from "~/types/sabha.interface";
import CircularProgress from "./CircularProgress";

function EventCard({ sabha }: { sabha: SabhaData }) {
  console.log("sabha: ", sabha);
  const status = sabha?.status;
  const totalPresents = sabha?.total_present ?? 0;
  const totalUsers = sabha?.total_users ?? 0;
  const totalAbsents = totalUsers - totalPresents;
  const attendancePercentage =
    totalUsers > 0 ? Math.round((totalPresents / totalUsers) * 100) : 0;
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between bg-eventCardColor rounded-xl shadow-sm overflow-hidden border-l-8 px-4",
        status === "upcoming" && "bg-blue-400/10 border-l-blue-500",
        status === "completed" && "bg-green-400/10 border-l-green-500",
        status === "running" && "bg-orange-400/10 border-l-orange-500"
      )}
    >
      <div className="w-full flex items-center justify-between">
        {/* Content */}
        <div className="flex flex-col flex-1 py-3">
          <h2 className="font-semibold text-lg text-textColor font-poppins capitalize">
            {sabha?.title}
          </h2>
          <p className="text-sm text-textLightColor">{sabha?.sabha_date}</p>
        </div>

        {/* Start Button */}
        <Link
          to={`/sabha/attendance/${sabha?.id}`}
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

      {status === "completed" && (
        <div className="w-full flex justify-around items-center py-2">
          <div className="flex flex-col justify-center items-center">
            <span className="text-greenTextColor text-2xl">
              {totalPresents}
            </span>
            <span className="text-greenTextColor text-sm">Presents</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className="text-redTextColor text-2xl">{totalAbsents}</span>
            <span className="text-redTextColor text-sm">Absents</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <CircularProgress
              size={50}
              strokeWidth={4}
              value={attendancePercentage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCard;
