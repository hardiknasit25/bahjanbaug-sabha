function CircularProgress({ value = 75, size = 70, strokeWidth = 7 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="#22c55e33"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Progress Circle (rotated to start from top) */}
        <circle
          stroke="#22c55e"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-all duration-300"
        />
      </svg>

      {/* Center Percentage */}
      <span className="absolute text-greenTextColor font-semibold text-sm">
        {value}%
      </span>
    </div>
  );
}

export default CircularProgress;
