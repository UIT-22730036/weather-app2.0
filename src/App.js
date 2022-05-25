import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = () => {
  return (
    <div>
      <Header />
      <WeatherInfo />
      <Chart />
    </div>
  );
};

export default App;
