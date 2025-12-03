import { Link } from "react-router";

function EventCard() {
  return (
    <div className="flex items-center justify-between bg-eventCardColor rounded-xl shadow-sm overflow-hidden">
      {/* Left Blue Border / Accent */}
      <div className="w-2.5 h-full bg-eventCardBorderColor rounded-l-xl"></div>

      {/* Content */}
      <div className="flex flex-col flex-1 ml-4 py-3">
        <h2 className="font-semibold text-lg text-textColor font-poppins">
          Yuva Sabha 134
        </h2>
        <p className="text-sm text-textLightColor">09:00 PM to 10:30 PM</p>
      </div>

      {/* Start Button */}
      <Link
        to={"/sabha/attendance/10"}
        className="block px-5 py-2 text-sm bg-blue-500 text-white font-medium rounded-full mr-4"
      >
        Start
      </Link>
    </div>
  );
}

export default EventCard;
