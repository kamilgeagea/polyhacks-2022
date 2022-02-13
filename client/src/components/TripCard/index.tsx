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
  maxDistance: number;
  maxPower: number;
  maxCalories: number;
  maxSpeed: number;
}

const TripCard: FC<TripCardProps> = ({
  name,
  date,
  distance,
  power,
  calories,
  speed,
  maxDistance,
  maxCalories,
  maxPower,
  maxSpeed
}) => {
  return (
    <div className="trip-card">
      <div className="trip-card__title">{name}</div>
      <div className="trip-card__date">le {date}</div>
      <div className="trip-card__stats">
        <Stat label="Distance" value={distance} unit="km" percentage={distance / maxDistance * 100} />
        <Stat label="Puissance" value={power} unit="W" percentage={power / maxPower * 100} />
        <Stat label="Vitesse" value={speed} unit="km/h" percentage={speed / maxSpeed * 100} />
        <Stat label="Calories" value={calories} unit="kcal" percentage={calories / maxCalories * 100} />
      </div>
    </div>
  );
};

export default TripCard;