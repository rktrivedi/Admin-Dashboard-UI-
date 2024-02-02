import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./StackedAreaChart.scss";

const data = [
  {
    date: "2022-01-01",
    leads: 150,
    opportunities: 50,
    deals: 30,
  },
  {
    date: "2022-01-02",
    leads: 180,
    opportunities: 60,
    deals: 35,
  },
  {
    date: "2022-01-03",
    leads: 200,
    opportunities: 70,
    deals: 40,
  },
  {
    date: "2022-01-04",
    leads: 220,
    opportunities: 80,
    deals: 45,
  },
  {
    date: "2022-01-05",
    leads: 250,
    opportunities: 90,
    deals: 50,
  },
  {
    date: "2022-01-06",
    leads: 280,
    opportunities: 100,
    deals: 55,
  },
  {
    date: "2022-01-07",
    leads: 300,
    opportunities: 110,
    deals: 60,
  },
];

const StackedAreaChart = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="date"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="leads"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="opportunities"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Area
              type="monotone"
              dataKey="deals"
              stackId="1"
              stroke="#FF6069"
              fill="#FF6069"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedAreaChart;
