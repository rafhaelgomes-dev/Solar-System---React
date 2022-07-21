import React from 'react';
import Title from './Title';
import m from '../data/missions';
import Mi from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div className="titleMissoes">
          <section className="borderMission"><Title headline="Missões" /></section>
        </div>
        <div className="divCards">
          {m.map((e, i) => (<Mi
            key={ i }
            name={ e.name }
            year={ e.year }
            country={ e.country }
            destination={ e.destination }
          />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
