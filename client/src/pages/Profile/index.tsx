import './Profile.scss';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Graph, TripCard, Stat } from '../../components';
import { Point } from '../../types';
import totalDistance from '../../utilities/totalDistance';
import randrange from '../../utilities/randrange';

interface TripData {
  name: string;
  date: string;
  points: Point[];
}

interface Trip extends TripData {
  distance: number;
  power: number;
  calories: number;
  speed: number;
}

const tripData: TripData[] = [
  {
    name: 'Résidence - Université',
    date: '25 janvier 2022',
    points: [
      { lat: 45.505847, lng: -73.616551, power: randrange(1, 10) },
      { lat: 45.505288, lng: -73.617109, power: randrange(1, 10) },
      { lat: 45.505799, lng: -73.617934, power: randrange(1, 10) },
      { lat: 45.506419, lng: -73.617393, power: randrange(1, 10) },
      { lat: 45.507130, lng: -73.619076, power: randrange(1, 10) },
      { lat: 45.507714, lng: -73.619300, power: randrange(1, 10) },
      { lat: 45.508442, lng: -73.618647, power: randrange(1, 10) },
      { lat: 45.509255, lng: -73.617925, power: randrange(1, 10) },
    ]
  },
  {
    name: 'Promenade parc',
    date: '26 janvier 2022',
    points: [
      { lat: 45.511018, lng: -73.616328, power: randrange(1, 10) },
      { lat: 45.511187, lng: -73.616705, power: randrange(1, 10) },
      { lat: 45.511301, lng: -73.617177, power: randrange(1, 10) },
      { lat: 45.511252, lng: -73.617617, power: randrange(1, 10) },
      { lat: 45.511422, lng: -73.617989, power: randrange(1, 10) },
      { lat: 45.511080, lng: -73.617984, power: randrange(1, 10) },
      { lat: 45.510880, lng: -73.617564, power: randrange(1, 10) },
      { lat: 45.510674, lng: -73.617111, power: randrange(1, 10) },
    ]
  },
  {
    name: 'Promenade campus',
    date: '27 janvier 2022',
    points: [
      { lat: 45.503620, lng: -73.620839, power: randrange(1, 10) },
      { lat: 45.503680, lng: -73.619753, power: randrange(1, 10) },
      { lat: 45.503260, lng: -73.618653, power: randrange(1, 10) },
      { lat: 45.503500, lng: -73.617067, power: randrange(1, 10) },
      { lat: 45.504681, lng: -73.615595, power: randrange(1, 10) },
      { lat: 45.503850, lng: -73.614138, power: randrange(1, 10) },
      { lat: 45.502649, lng: -73.613024, power: randrange(1, 10) },
      { lat: 45.501918, lng: -73.613152, power: randrange(1, 10) },
      { lat: 45.500956, lng: -73.614010, power: randrange(1, 10) },
      { lat: 45.499975, lng: -73.614795, power: randrange(1, 10) },
      { lat: 45.499074, lng: -73.616381, power: randrange(1, 10) },
    ]
  },
  {
    name: 'Courses',
    date: '28 janvier 2022',
    points: [
      { lat: 45.505108, lng: -73.627187, power: randrange(1, 10) },
      { lat: 45.504367, lng: -73.627905, power: randrange(1, 10) },
      { lat: 45.503478, lng: -73.628709, power: randrange(1, 10) },
      { lat: 45.502826, lng: -73.629244, power: randrange(1, 10) },
      { lat: 45.502046, lng: -73.628624, power: randrange(1, 10) },
      { lat: 45.501137, lng: -73.626567, power: randrange(1, 10) },
      { lat: 45.500070, lng: -73.624354, power: randrange(1, 10) },
      { lat: 45.499310, lng: -73.622522, power: randrange(1, 10) },
      { lat: 45.498253, lng: -73.623410, power: randrange(1, 10) },
      { lat: 45.497344, lng: -73.624565, power: randrange(1, 10) },
    ]
  },
];

const trips: Trip[] = tripData.map(trip => {
  const distance = totalDistance(trip.points);
  const power = trip.points.map(point => point.power).reduce((a, b) => a + b);
  const speed = distance / (trip.points.length * 10 / 3600);

  return { ...trip, distance, power, speed, calories: 700 };
});

const maxDistance = Math.max.apply(Math, trips.map(trip => trip.distance));
const maxPower = Math.max.apply(Math, trips.map(trip => trip.power));
const maxSpeed = Math.max.apply(Math, trips.map(trip => trip.speed));
const maxCalories = Math.max.apply(Math, trips.map(trip => trip.calories));

const meanDistance = trips.map(trip => trip.distance).reduce((a, b) => a + b) / trips.length;
const meanPower = trips.map(trip => trip.power).reduce((a, b) => a + b) / trips.length;
const meanSpeed = trips.map(trip => trip.speed).reduce((a, b) => a + b) / trips.length;
const meanCalories = trips.map(trip => trip.calories).reduce((a, b) => a + b) / trips.length;

const Profile: FC = () => {
  const navigate = useNavigate();

  const data = trips.map((trip, index) => ({ x: index + 1, y: trip.power }));

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__container__header">
          <div className="profile__container__header__title">
            Bonjour, <span className='profile__container__header__title__name'>test@test.com</span> 👋
          </div>
          <Button title='Se déconnecter' onClick={() => {
            navigate('/');
            localStorage.setItem('auth', 'false');
          }} />
        </div>
        <div className="profile__container__content">
          <div className="profile__container__content__trips">
            <div className="profile__container__content__trips__title">Mes trajets 🚴</div>
            <div className="profile__container__content__trips__container">
              <div className="profile__container__content__trips__container__gradient" />
              <div className="profile__container__content__trips__container__separator" />
              <div className="profile__container__content__trips__container__grid">
                {trips.map(({ name, date, distance, power, calories, speed, points }) => (
                  <div key={name} onClick={() => navigate('/track', {
                    state: {
                      name, date, distance, power, calories, speed, maxDistance,
                      maxCalories, maxPower, maxSpeed, points
                    }
                  })}>
                    <TripCard
                      name={name}
                      date={date}
                      distance={distance}
                      power={power}
                      calories={calories}
                      speed={speed}
                      maxDistance={maxDistance}
                      maxCalories={maxCalories}
                      maxPower={maxPower}
                      maxSpeed={maxSpeed}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="profile__container__content__stats">
            <div className="profile__container__content__stats__title">Mes stats 📈</div>
            <div className="profile__container__content__stats__content">
              <div className="profile__container__content__stats__content__graph">
                <Graph data={data} />
              </div>
              <div className="profile__container__content__stats__content__stats">
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat
                    label="Distance moyenne"
                    value={meanDistance}
                    unit="km"
                    percentage={meanDistance / maxDistance * 100}
                  />
                </div>
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat
                    label="Puissance moyenne"
                    value={meanPower}
                    unit="W"
                    percentage={meanPower / maxPower * 100}
                  />
                </div>
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat
                    label="Vitesse moyenne"
                    value={meanSpeed}
                    unit="km/h"
                    percentage={meanSpeed / maxSpeed * 100}
                  />
                </div>
                <div className="profile__container__content__stats__content__stats__item">
                  <Stat
                    label="Calories moyenne"
                    value={meanCalories}
                    unit="kcal"
                    percentage={meanCalories / maxCalories * 100}
                  />
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