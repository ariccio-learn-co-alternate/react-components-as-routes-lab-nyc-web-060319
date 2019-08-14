import React from 'react';
import { directors } from '../data';

const Directors = () => {
  function renderDirectors() {
    return directors.map(director => {
      return (
        <div>
          {director.name}
          <ul>
            {director.movies.map(movie => {
              return (
                <li>
                  {movie}
                </li>
              );
            })}
          </ul>
        </div>
      );
    })
  }
  return (
    <div>
      <h1>
        Directors Page
        {/*{code here}*/}
      </h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
