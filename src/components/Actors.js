import React from 'react';
import { actors } from '../data';

const Actors = () => {
  function renderActors() {
    return actors.map(actor => {
      return (
        <div className="actor">
          {actor.name}
          <ul>
            {actor.movies.map(movie => {
              return(
                <li>
                  {movie}
                </li>
                );
            })}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>
        Actors Page
        {renderActors()}
      </h1>
      
    </div>
  );
};

export default Actors;
