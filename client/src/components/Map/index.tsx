import './Map.scss';

import { FC } from 'react';
import { Map, GoogleApiWrapper, IProvidedProps, Marker, Polyline } from 'google-maps-react';

import { Point } from '../../types';
import getRange from '../../utilities/getRange';

interface MapContainerProps {
  points: Point[];
}

const LoadingContainer: FC = () => {
  return (
    <div />
  );
};

const MapContainer: FC<IProvidedProps & MapContainerProps> = ({ points, google }) => {
  const i = Math.round(points.length / 2);
  const [low, high] = getRange(points);
  console.log(low, high)

  const getColor = (power: number) => {
    if (power <= low) return "#68F7B7";
    if (power <= high) return "#204AF0";
    return "#FBA542";
  };

  return (
    <div className="map">
      <Map
        google={google}
        initialCenter={{
          lat: points[i].lat,
          lng: points[i].lng
        }}
        // @ts-ignore
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        keyboardShortcuts={false}
        zoom={16}
      >
        {points.map((point, index) => index > 0 ? (
          <Polyline
            key={index}
            strokeColor={getColor(point.power)}
            strokeWeight={5}
            path={[
              { lat: points[index].lat, lng: points[index].lng },
              { lat: points[index-1].lat, lng: points[index-1].lng }
            ]}
          />
        ) : <></>)}
        <Marker
          // @ts-ignore
          position={{ lng: points[0].lng, lat: points[0].lat }}
        />
        <Marker
          // @ts-ignore
          position={{ lng: points[points.length - 1].lng, lat: points[points.length - 1].lat }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper(props => ({
  apiKey: process.env.REACT_APP_API_KEY,
  LoadingContainer: LoadingContainer,
  ...props
}))(MapContainer);