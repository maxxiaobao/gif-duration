import React from 'react';
import './index.scss';

export default ({ list }) => {
  return (
    <div className="list">
      {list.map(gif => {
        return (
          <div className="item" key={gif.name}>
            <img src={gif.src} alt={gif.name} />
            <div className="item-info">
              <div>Width: {gif.width}</div>
              <div>Height: {gif.height}</div>
              <div>Duration: {gif.duration} ms</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
