import React, { Fragment, useEffect, useRef } from "react";

import {
  minX,
  pathOfMorningLine,
  pathOfTideLine,
  chartData,
  nightTime,
  height,
} from "../../datas/chartData";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Chart.scss";

const Chart = () => {
  const circleRef = useRef();
  const pathRef = useRef();
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  useEffect(() => {
    positionSunHandler();
    document
      .querySelector(".chart__svg")
      .addEventListener("scroll", positionSunHandler);
    return document
      .querySelector(".chart__svg")
      .removeEventListener("scroll", () => {});
  }, []);
  const positionSunHandler = () => {
    let scrollPercentage =
      (document.querySelector(".chart__svg").scrollLeft +
        document.querySelector(".chart__svg").scrollLeft) /
      (document.querySelector(".chart__svg").scrollWidth -
        document.querySelector(".chart__svg").clientWidth);
    let path = document.getElementById("motionPath");
    let pathLength = path.getTotalLength();
    let pt = path.getPointAtLength(scrollPercentage * pathLength);
    console.log(scrollPercentage);
    let circle = document.getElementById("circle");
    circle.setAttribute("transform", `translate(${pt.x},${pt.y})`);
  };
  return (
    <div className="chart">
      <div className="chart__svg">
        <svg height={height} width={12 * minX}>
          <g>
            <path fill="#c1e5f7" stroke="none" d={pathOfTideLine} />
          </g>
          <g>
            <circle ref={circleRef} id="circle" fill="orange" r={10}></circle>
          </g>
          <g>
            <path
              ref={pathRef}
              fill="none"
              stroke="orange"
              id="motionPath"
              d={pathOfMorningLine}
            />
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
