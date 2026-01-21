const RevenueGraph = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-xl mb-2">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Revenue Overview
        </h2>
        <p className="text-sm text-gray-500">
          Last 7 days performance
        </p>
      </div>

      {/* SVG GRAPH */}
      <svg viewBox="0 0 500 200" className="w-full h-48">
        {/* Grid */}
        <line x1="0" y1="160" x2="500" y2="160" stroke="#e5e7eb" />
        <line x1="0" y1="120" x2="500" y2="120" stroke="#f3f4f6" />
        <line x1="0" y1="80" x2="500" y2="80" stroke="#f3f4f6" />

        {/* Line Path */}
        <path
          d="M 0 140
             L 80 110
             L 160 120
             L 240 90
             L 320 100
             L 400 60
             L 480 80"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="3"
        />

        {/* Points */}
        {[0, 80, 160, 240, 320, 400, 480].map((x, i) => {
          const y = [140, 110, 120, 90, 100, 60, 80][i];
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="var(--color-primary)"
            />
          );
        })}
      </svg>

      {/* Labels */}
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
};

export default RevenueGraph;
