import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Dot,
} from "recharts";

const data = [
  { name: "Day 1", value: 12 },
  { name: "Day 2", value: 18 },
  { name: "Day 3", value: 14 },
  { name: "Day 4", value: 25 },
  { name: "Day 5", value: 10 },
  { name: "Day 6", value: 20 },
  { name: "Day 7", value: 28 },
];

const CustomDot = (props) => {
  const { cx, cy, index } = props;
  if (index === 3) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="#6C5DD3"
        stroke="white"
        strokeWidth={2}
      />
    );
  }
  return null;
};

export default function VisitorsCard() {
  return (
    <div className="p-4 rounded-lg border border-border bg-bg">
      <div className="flex justify-between items-center">
        <div className="text-sm font-bold text-text">Visitors</div>
        <div className="text-2xl font-bold text-text">345,678</div>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6C5DD3" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#6C5DD3" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" hide />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6C5DD3"
            strokeWidth={2}
            fill="url(#visitorsGradient)"
            dot={<CustomDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
