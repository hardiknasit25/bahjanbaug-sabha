function EventCard() {
  return (
    <div className="flex items-center justify-between bg-eventCardColor rounded-lg shadow-sm overflow-hidden">
      {/* Left Blue Border / Accent */}
      <div className="w-2.5 h-full bg-eventCardBorderColor rounded-l-xl"></div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1 ml-2 py-2">
        <h2 className="font-semibold text-base text-textColor">
          Yuva Sabha 134
        </h2>
        <p className="text-sm text-textLightColor">09:00 PM to 10:30 PM</p>
      </div>

      {/* Start Button */}
      <button className="px-4 py-1 text-sm bg-submitButtonColor text-white rounded-full mr-2">
        Start
      </button>
    </div>
  );
}

export default EventCard;
