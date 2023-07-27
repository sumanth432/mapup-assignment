import React from 'react';
import { useSelector } from 'react-redux';
import './RegionInfo.css'; // Import the CSS file

const RegionInfo = () => {
  const selectedRegion = useSelector((state) => state.region);

  // Function to get region information based on selectedRegion
  const getRegionInfo = () => {
    // Replace this with actual data or API calls to get region info based on selectedRegion
    switch (selectedRegion) {
      case 'us':
        return {
          currency: 'USD',
          speedUnit: 'mph',
          distanceUnit: 'miles',
          volumeUnit: 'gallons',
          timezone: 'America/New_York',
        };
      case 'in':
        return {
          currency: 'INR',
          speedUnit: 'kmph',
          distanceUnit: 'kilometers',
          volumeUnit: 'liters',
          timezone: 'Asia/Kolkata',
        };
      case 'uk':
        return {
          currency: 'GBP',
          speedUnit: 'mph',
          distanceUnit: 'miles',
          volumeUnit: 'liters',
          timezone: 'Europe/London',
        };
      default:
        return null;
    }
  };

  const regionInfo = selectedRegion ? getRegionInfo() : null;

  return (
    <div className="region-info">
      {regionInfo ? (
        <div>
          <h3>Region Information</h3>
          <p>Currency: {regionInfo.currency}</p>
          <p>Speed Unit: {regionInfo.speedUnit}</p>
          <p>Distance Unit: {regionInfo.distanceUnit}</p>
          <p>Volume Unit: {regionInfo.volumeUnit}</p>
          <p>Timezone: {regionInfo.timezone}</p>
        </div>
      ) : (
        <p>No region selected.</p>
      )}
    </div>
  );
};

export default RegionInfo;
