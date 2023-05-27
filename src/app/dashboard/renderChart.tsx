import BarChart from "../../../components/BarChart";
import DonutChart from "../../../components/DonutChart";
import LineChart from "../../../components/LineChart";
import PieChart from "../../../components/PieChart";
import { categories, data } from "./constants";
import { ApexOptionsModified } from "./types";

export default function RenderChart({
  options,
}: {
  options: ApexOptionsModified;
}): JSX.Element {
  switch (options.chart?.type) {
    case "line":
      <LineChart
        options={options}
        title="Count"
        labels={categories}
        data={data}
      />;
    case "bar":
      return (
        <BarChart
          options={options}
          title="Count"
          labels={categories}
          data={data}
        />
      );
    case "donut":
      return (
        <DonutChart
          options={options}
          title="Count"
          labels={categories}
          data={data}
        />
      );
    case "pie":
      return (
        <PieChart
          options={options}
          title="Count"
          labels={categories}
          data={data}
        />
      );
    default:
      return (
        <LineChart
          options={options}
          title="Count"
          labels={categories}
          data={data}
        />
      );
  }
}
