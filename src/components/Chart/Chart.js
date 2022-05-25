import React, { Fragment } from "react";

import {
  minX,
  pathOfSunLine,
  pathOfTideLine,
  chartData,
  nightTime,
} from "../../datas/chartData";

import "./Chart.scss";

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart__svg">
        <svg height={(window.innerHeight * 40) / 100} width={12 * minX}>
          <g>
            <path fill="#c1e5f7" stroke="none" d={pathOfTideLine} />
          </g>
          <g>
            <path fill="none" stroke="orange" d={pathOfSunLine} />
          </g>
          <g transform="translate(-70,0)">
            {chartData.map((point) => {
              return point.hour.includes("6:00") ? (
                <Fragment key={point.hour}>
                  <rect
                    width={140}
                    height={80}
                    opacity="0.4"
                    x={point.x}
                    y={50}
                  />
                  <text x={point.x + 20} y={95}>
                    {point.hour}
                  </text>
                </Fragment>
              ) : (
                <Fragment key={point.hour}>
                  <rect
                    width={140}
                    height={80}
                    opacity="0.4"
                    x={point.x}
                    y={130}
                  />
                  <text x={point.x + 20} y={175}>
                    {point.hour}
                  </text>
                </Fragment>
              );
            })}
          </g>
          <g>
            {nightTime.map((rect) => {
              return (
                <rect
                  x={rect.x}
                  y={0}
                  width={rect.w}
                  height={rect.h}
                  opacity="0.4"
                  key={rect.x}
                />
              );
            })}
          </g>
        </svg>
      </div>
      <div className="chart__title">
        <span className="chart__title--tide">Tide</span>
        <span className="chart__title--sunset">Sunrise & Sunset</span>
      </div>
    </div>
  );
};

export default Chart;
