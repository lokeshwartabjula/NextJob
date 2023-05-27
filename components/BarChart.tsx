import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { DEFAULT_GRAPH_WIDTH } from "./Constants";

export default function BarChart ({options, title, labels, data, width}: {options: ApexOptions, title: string, labels: string[], data: number[], width?: number}){
    width = width || DEFAULT_GRAPH_WIDTH;
    options = {...options, xaxis: {categories: labels} };
    const series = [{data: data, name: title}]
    return (
        <Chart options={options} series={series} type={"bar"} height={width*0.75} width={width} />
    )
}