import React from 'react';
import Title from './Title';
import p from '../data/planets';
import Pla from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="title">
          <div className="bordaPlan"><Title headline="Planetas" /></div>
        </div>
        <div className="solar">
          {p.map((e, i) => (<Pla
            key={ i }
            planetName={ e.name }
            planetImage={ e.image }
          />))}
        </div>
      </div>
    );
  }
}
export default SolarSystem;
