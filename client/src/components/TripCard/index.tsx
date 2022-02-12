import './TripCard.scss';

import { FC } from 'react';

import Stat from '../Stat';

interface TripCardProps {
  name: string;
  date: string;
  distance: number;
  power: number;
  calories: number;
  speed: number;
}

const TripCard: FC<TripCardProps> = ({ name, date, distance, power, calories, speed }) => {
  return (
    <div className="trip-card">
      <div className="trip-card__title">{name}</div>
      <div className="trip-card__date">le {date}</div>
      <div className="trip-card__stats">
        <Stat label="Distance" value={distance} unit="km" percentage={70} />
        <Stat label="Puissance" value={power} unit="W" percentage={70} />
        <Stat label="Calories" value={calories} unit="kcal" percentage={70} />
        <Stat label="Vitesse" value={speed} unit="km/h" percentage={70} />
      </div>
    </div>
  );
};

export default TripCard;