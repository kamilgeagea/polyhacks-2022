import './Profile.scss';

import { FC } from 'react';
import { Button, Graph, TripCard, Stat } from '../../components';

interface Trip {
  id: number,
  name: string;
  date: string;
  distance: number;
  power: number;
  calories: number;
  speed: number;
}

const trips: Trip[] = [
  {
    id: 1,
    name: 'Travail - Appartement',
    date: '25 janvier 2022',
    distance: 6.8,
    power: 23000,
    calories: 754,
    speed: 12
  },
  {
    id: 2,
    name: 'Travail - Appartement',
    date: '25 janvier 2022',
    distance: 6.8,
    power: 23000,
    calories: 754,
    speed: 12
  },
  {
    id: 3,
    name: 'Travail - Appartement',
    date: '25 janvier 2022',
    distance: 6.8,
    power: 23000,
    calories: 754,
    speed: 12
  },
  {
    id: 4,
    name: 'Travail - Appartement',
    date: '25 janvier 2022',
    distance: 6.8,
    power: 23000,
    calories: 754,
    speed: 12
  },
];

const Profile: FC = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__container__header">
          <div className="profile__container__header__title">
            Bonjour, <span className='profile__container__header__title__name'>\\username\\</span> 👋
          </div>
          <Button title='Se déconnecter' onClick={() => {}} />
        </div>
        <div className="profile__container__content">
          <div className="profile__container__content__trips">
            <div className="profile__container__content__trips__title">Mes trajets 🚴</div>
            <div className="profile__container__content__trips__grid">
              {trips.map(({ id, name, date, distance, power, calories, speed }) => (
                <TripCard
                  key={id}
                  name={name}
                  date={date}
                  distance={distance}
                  power={power}
                  calories={calories}
                  speed={speed}
                />
              ))}
            </div>
          </div>
          <div className="profile__container__content__stats">
            <div className="profile__container__content__stats__title">Mes stats 📈</div>
            <div className="profile__container__content__stats__content">
              <div className="profile__container__content__stats__content__graph">
                <Graph />
              </div>
              <div className="profile__container__content__stats__content__stats">
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat label="Distance moyenne" value={6.8} unit="km" percentage={70} />
                </div>
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat label="Puissance moyenne" value={23000} unit="W" percentage={70} />
                </div>
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat label="Vitesse moyenne" value={12} unit="km/h" percentage={70} />
                </div>
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat label="Calories moyenne" value={750} unit="kcal" percentage={70} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;