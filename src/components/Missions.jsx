import React from 'react';
import Title from './Title';
import m from '../data/missions';
import Mi from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {m.map((e, i) => (<Mi
          key={ i }
          name={ e.name }
          year={ e.year }
          country={ e.country }
          destination={ e.destination }
        />
        ))}
      </div>
    );
  }
}

export default Missions;
