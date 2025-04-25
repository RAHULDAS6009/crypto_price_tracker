import React from 'react';

interface MiniChartProps {
  data: number[];
  trend: number;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, trend }) => {
  if (!data || data.length === 0) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1; 
  
  // Calculate points for SVG path
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const isPositive = trend >= 0;
  const lineColor = isPositive ? 'stroke-green-500' : 'stroke-red-500';

  return (
    <div className="w-20 h-12 md:w-32 md:h-16">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          className={`${lineColor} stroke-2`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MiniChart;