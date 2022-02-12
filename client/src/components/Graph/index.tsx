import { FC, useState, useRef, useEffect } from 'react';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryLine } from 'victory';

const data = [
  { x: "Trajet 1", y: 2 },
  { x: "Trajet 2", y: 5 },
  { x: "Trajet 3", y: 3 },
  { x: "Trajet 4", y: 8 },
  { x: "Trajet 5", y: 6 }
]

const Graph: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  const handeResize = () => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handeResize, false);
    if (ref.current) {
      setDimensions({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight
      });
    }

    return () => {
      window.removeEventListener('resize', handeResize, false);
    }
  }, []);

  return (
    <div ref={ref} style={{ height: '100%', width: '100%' }}>
      <VictoryChart height={300} width={dimensions.width} padding={30}>
        <VictoryAxis
          style={{
            axis: { stroke: '#c1c1c1' },
            tickLabels: { fontWeight: 400, fill: '#c1c1c1' }
          }}
          dependentAxis
        />
        <VictoryAxis
          style={{
            axis: { stroke: '#c1c1c1' },
            tickLabels: { fontWeight: 400, fill: '#c1c1c1' }
          }}
        />
        <VictoryLine
          style={{ data: { stroke: '#68F7B7', strokeWidth: 3 } }}
          data={data}
          animate={{
            onLoad: { duration: 1000 },
          }}
        />
        <VictoryArea
          style={{ data: { fill: '#68F7B74D' } }}
          data={data}
          animate={{
            onLoad: { duration: 1000 }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;