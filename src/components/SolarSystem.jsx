import React from 'react';
import Title from './Title';
import p from '../data/planets';
import Pla from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {p.map((e, i) => <Pla key={ i } planetName={ e.name } planetImage={ e.image } />)}
      </div>
    );
  }
}
export default SolarSystem;
