import './Stat.scss';

import { FC } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

interface StatProps {
  label: string;
  value: number;
  unit: string;
  percentage: number;
}

const Stat: FC<StatProps> = ({ label, value, unit, percentage }) => {
  return (
    <div className="stat">
      <div className="stat__label">{label}</div>
          <div className="stat__value">
            <div className="stat__value__chart">
              <CircularProgressbar
                value={percentage}
                strokeWidth={15}
                styles={{
                  path: { strokeLinecap: 'round' }
                }}
              />
            </div>
            <div className="stat__value__number">{value.toLocaleString(undefined, { maximumFractionDigits: 2 })} 
            <span className="stat__value__number__unit">{unit}</span></div>
          </div>
    </div>
  );
};

export default Stat;