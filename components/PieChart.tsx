import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { DEFAULT_GRAPH_WIDTH } from "./Constants";

export default function PieChart({
  options,
  title,
  labels,
  data,
  width,
}: {
  options: ApexOptions;
  title: string;
  labels: string[];
  data: number[];
  width?: number;
}) {
  width = width || DEFAULT_GRAPH_WIDTH;
  options = {
    ...options,
    labels
  };
  const series = data;
  return <Chart options={options} series={series} type={"pie"} height={width*0.75} width={width}/>;
}
