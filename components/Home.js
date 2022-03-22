import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { getData, getTotalData } from "../services/UserService";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState([]);

  useEffect(
    () => {
      getData().then((res) => {
        setData(res);
      });
      getTotalData().then((res) => {
        setTotalData(res);
      });
    },
    [data],
    [totalData]
  );

  const options = {
    chart: {
      type: "areaspline",
    },
    title: {
      text: "Today's Number of Join",
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
    },
    xAxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      plotBands: [
        {
          // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: "rgba(68, 170, 213, .2)",
        },
      ],
    },
    yAxis: {
      title: {
        text: "Person units",
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: " units",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
    },
    series: [
      {
        data: [data, totalData],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Home;
