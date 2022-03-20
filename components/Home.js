import HighchartsReact from "highcharts-react-official";
import Highcharts, { charts } from "highcharts";
import { getData } from "../services/UserService";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  });

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
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
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
        data: [{ data }, { data }, { data }],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Home;
