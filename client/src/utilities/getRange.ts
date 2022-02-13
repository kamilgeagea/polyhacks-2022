import { Point } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (points: Point[]) => {
  let min = 100000000000;
  let max = 0;

  for (let i = 0; i < points.length; i++) {
    const power = points[i].power;

    if (power < min) min = power;
    if (power > max) max = power;
  }

  const range = max - min;

  return [min + range / 3, min + (2 * range) / 3];
};
