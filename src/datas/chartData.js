import { line, curveBasis, area, curveCardinal } from "d3";

export const minX = window.innerWidth / 2;

export const height = (window.innerHeight * 40) / 100;

export const chartData = [
  {
    tide: 0.8,
    hour: "Mon 12:00 pm",
    sun: 0,
    x: 0,
  },
  {
    tide: 2.1,
    hour: "Mon 6:00 am",
    sun: 0.001,
    x: minX,
  },
  {
    tide: 0.7,
    hour: "Mon 12:00 am",
    sun: 2,
    x: minX * 2,
  },
  {
    tide: 1.9,
    hour: "Mon 6:00 pm",
    sun: 0,
    x: minX * 3,
  },
  {
    tide: 0.9,
    hour: "Tue 12:00 pm",
    sun: 0,
    x: minX * 4,
  },
  {
    tide: 2.1,
    hour: "Tue 6:00 am",
    sun: 0.001,
    x: minX * 5,
  },
  {
    tide: 0.6,
    hour: "Tue 12:00 am",
    sun: 2,
    x: minX * 6,
  },
  {
    tide: 2.1,
    hour: "Tue 6:00 pm",
    sun: 0,
    x: minX * 7,
  },
  {
    tide: 0.8,
    hour: "Wed 12:00 pm",
    sun: 0,
    x: minX * 8,
  },
  {
    tide: 2.3,
    hour: "Wed 6:00 am",
    sun: 0.001,
    x: minX * 9,
  },
  {
    tide: 0.8,
    hour: "Wed 12:00 am",
    sun: 2,
    x: minX * 10,
  },
  {
    tide: 2.2,
    hour: "Wed 6:00 pm",
    sun: 0,
    x: minX * 11,
  },
  {
    tide: 0.8,
    hour: "Thur 12:00 pm",
    sun: 0,
    x: minX * 12,
  },
];

export const nightTime = [
  {
    x: 0,
    h: height,
    w: minX,
  },
  {
    x: minX * 3,
    h: height,
    w: minX * 2,
  },
  {
    x: minX * 7,
    h: height,
    w: minX * 2,
  },
  {
    x: minX * 11,
    h: height,
    w: minX,
  },
];

export const xData = [
  0,
  minX,
  minX * 2,
  minX * 3,
  minX * 4,
  minX * 5,
  minX * 6,
  minX * 7,
  minX * 8,
  minX * 9,
  minX * 10,
  minX * 11,
  minX * 12,
];

export const yDataSun = chartData.map((item) => item.sun);

const sunPoints = xData.map((x, i) => {
  return {
    xpoint: x,
    ypoint: height - yDataSun[i] * 150,
  };
});

const sunGen = line()
  .x((p) => p.xpoint)
  .y((p) => p.ypoint)
  .curve(curveCardinal);

export const pathOfSunLine = sunGen(sunPoints);

const tidePoints = xData.map((x, i) => {
  return {
    xpoint: x,
    ypoint: height - chartData[i].tide * 100,
  };
});

const tideGen = area()
  .x((p) => p.xpoint)
  .y1((p) => p.ypoint)
  .y0(height)
  .curve(curveBasis);

export const pathOfTideLine = tideGen(tidePoints);
