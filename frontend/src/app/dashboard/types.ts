// Author: Aayush Dakwala
// Banner: B00945308
// Email:  ay383119@dal.ca

import { ApexOptions } from "apexcharts";

export interface ICountry {
  name: string;
  isoCode: string;
}

export interface IState extends ICountry {
  isoCountryCode: string;
}

export interface ICity {
  name: string;
  isoStateCode: string;
  isoCountryCode: string;
}

export interface ApexOptionsModified extends ApexOptions {
    chart: ApexChartCustom;
  }

interface ApexChartCustom extends ApexChart{
  type: "line" | "bar" | "donut" | "pie" | undefined;
}

export type GraphType = "line" | "bar" | "donut" | "pie";