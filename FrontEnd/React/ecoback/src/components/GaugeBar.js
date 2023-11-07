import React from 'react';

const GaugeBar = ({ value }) => {
  const percent = (value / 200000) * 100;

  const imagePosition = { marginLeft: `${percent}%` };

  return (
    <div className="gauge-bar">
      <div className="gauge-bar-fill" style={{ width: `${percent}%` }}>
        <div className="gauge-bar-image" style={imagePosition}>
          <img style={{margin:0, width:'30vw'}}src={require('../image/free-icon-turtle.png')} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default GaugeBar;
