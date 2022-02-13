import { Point } from "../types";

import pointsToDistance from "./pointsToDistance";

// eslint-disable-next-line import/no-anonymous-default-export
export default (points: Point[]) => {
  let sum = 0;

  for (let i = 1; i < points.length; i++) {
    const lastPoint = points[i - 1];
    const point = points[i];

    sum += pointsToDistance(lastPoint.lat, lastPoint.lng, point.lat, point.lng);
  }

  return sum;
};
