import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Single.scss";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    datakeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const SIngle = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button> Update</button>s
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <div className="itemTitle">{item[0]}</div>
                <div className="itemValue">{item[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart?.datakeys.map((datakey) => (
                <Line
                  type="monotone"
                  dataKey={datakey.name}
                  stroke={datakey.color}
                  activeDot={datakey}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SIngle;
