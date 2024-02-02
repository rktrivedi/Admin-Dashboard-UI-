import Barchart from "../../Components/BarChart/Barchart";
import ChartBox from "../../Components/ChartBox/ChartBox";
import PieChartBox from "../../Components/PieChart/PieChart";
import StackedAreaChart from "../../Components/StackedAreaChart/StackedAreaChart";

import Topbox from "../../Components/TopBox/Topbox";
import {
  barChartBoxRevenue,
  barChartBoxWalkins,
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxTopProduct,
  chartBoxUser,
} from "../../Data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxTopProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <StackedAreaChart />
      </div>
      <div className="box box8">
        <Barchart {...barChartBoxRevenue} />
      </div>
      <div className="box box9">
        <Barchart {...barChartBoxWalkins} />
      </div>
    </div>
  );
};

export default Home;
