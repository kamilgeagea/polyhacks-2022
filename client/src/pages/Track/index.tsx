import './Track.scss';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

import { Graph, Map, Stat } from '../../components';
import { Point } from '../../types';
import totalDistance from '../../utilities/totalDistance';

const points: Point[] = [
  { lat: 45.485892, lng: -73.576080, power: 1 },
  { lat: 45.486539, lng: -73.574953, power: 2 },
  { lat: 45.487368, lng: -73.574670, power: 6 },
  { lat: 45.487947, lng: -73.575564, power: 3 },
  { lat: 45.488630, lng: -73.575338, power: 5 },
  { lat: 45.489430, lng: -73.574791, power: 9 },
  { lat: 45.490152, lng: -73.574113, power: 8 },
  { lat: 45.490552, lng: -73.574825, power: 4 },
];

const data = points.map((point, index) => ({ x: index + 1, y: point.power }));

const Track: FC = () => {
  const navigate = useNavigate();

  const distance = totalDistance(points);
  const power = points.map(point => point.power).reduce((a, b) => a + b);
  const speed = distance / (points.length * 10 / 3600);

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
          <div className="track__container__header__title">Travail - Appartement</div>
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
                  <Stat label="Distance " value={distance} unit="km" percentage={70} />
                </div>
                <div className="track__container__content__stats__content__stats__item">
                  <Stat label="Puissance" value={power} unit="W" percentage={70} />
                </div>
                <div className="track__container__content__stats__content__stats__item">
                  <Stat label="Vitesse" value={speed} unit="km/h" percentage={70} />
                </div>
                <div className="track__container__content__stats__content__stats__item">
                  <Stat label="Calories" value={10000} unit="kcal" percentage={70} />
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