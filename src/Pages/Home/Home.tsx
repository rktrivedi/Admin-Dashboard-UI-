import ChartBox from "../../Components/ChartBox/ChartBox";
import Topbox from "../../Components/TopBox/Topbox";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <ChartBox />
      </div>
      <div className="box box4">
        <ChartBox />
      </div>
      <div className="box box5">
        <ChartBox />
      </div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  );
};

export default Home;
