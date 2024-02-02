import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./PieChart.scss";

const data = [
  { name: "JustDial", Value: 300, color: "#0088fe" },
  { name: "Google", Value: 450, color: "#00c49f" },
  { name: "Facebook", Value: 500, color: "#FFBB28" },
  { name: "Instagram", Value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChart">
      <h1>Leads By Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "White", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="Value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ background: item.color }}></div>
              <span>{item.name}</span>
            </div>
            <span>{item.Value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
