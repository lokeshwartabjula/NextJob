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
    chart: {
      type: "line" | "bar" | "donut" | "pie" | undefined;
    };
  }