import './Track.scss';

import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

import { Graph, Map, Stat } from '../../components';

import { Point } from '../../types';

const Track: FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // @ts-ignore
  const { name, distance, power, calories, speed, maxDistance, maxCalories, maxPower, maxSpeed, points
  } = state;

  const data = points.map((point: Point, index: number) => ({ x: index + 1, y: point.power }));

  return (
    <div className="track">
      <div className="track__container">
        <div className="track__container__header">
          <div className="track__container__header__icon" onClick={() => navigate(-1)}>
            <IoMdArrowBack
              color="#204af0"
              size={32}
            />
          </div>
          <div className="track__container__header__title">{name}</div>
        </div>
        <div className="track__container__content">
          <div className="track__container__content__map">
            <div className="track__container__content__map__title">Carte 🌍</div>
            <div className="track__container__content__map__content">
              <Map points={points} />
            </div>
          </div>
          <div className="track__container__content__stats">
            <div className="track__container__content__stats__title">Stats 📈</div>
            <div className="track__container__content__stats__content">
              <div className="track__container__content__stats__content__graph">
                <Graph data={data} />
              </div>
              <div className="track__container__content__stats__content__stats">
                <div className="track__container__content__stats__content__stats__item">
                  <Stat label="Distance Totale" value={distance} unit="km" percentage={distance / maxDistance * 100} />
                </div>
                <div className="track__container__content__stats__content__stats__item">
                  <Stat label="Puissance Totale" value={power} unit="W" percentage={power / maxPower * 100} />
                </div>
                <div className="track__container__content__stats__content__stats__item">
                  <Stat label="Vitesse Totale" value={speed} unit="km/h" percentage={speed / maxSpeed * 100} />
                </div>
                <div className="track__container__content__stats__content__stats__item">
                  <Stat label="Calories Totales" value={calories} unit="kcal" percentage={calories / maxCalories * 100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;