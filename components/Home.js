import HighchartsReact from "highcharts-react-official";
import Highcharts, { charts } from "highcharts";

const options = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: "My chart",
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
      text: "Fruit units",
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
      data: [1, 2, 3],
    },
  ],
};

export const Home = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
