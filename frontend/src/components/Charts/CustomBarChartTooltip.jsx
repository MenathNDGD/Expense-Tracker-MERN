import React from "react";

const CustomBarChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-purple-800 mb-1 capitalize">
          {payload[0].payload.category}
        </p>
        <p className="text-sm text-gray-600">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900">
            USD {payload[0].payload.amount}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomBarChartTooltip;
