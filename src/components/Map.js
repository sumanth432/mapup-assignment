import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { point } from '@turf/helpers';
import { getCoords } from '@turf/invariant';
import { centroid } from '@turf/turf';
import m from './Map.css'; // Import the CSS file

const Map = () => {
  const selectedRegion = useSelector((state) => state.region);

  // Function to get the centroid of the selected region
  const getRegionCentroid = () => {
    // Replace this with actual geojson data for the selected regions
    switch (selectedRegion) {
      case 'us':
        return { type: 'Point', coordinates: [-95.7129, 37.0902] };
      case 'in':
        return { type: 'Point', coordinates: [78.9629, 20.5937] };
      case 'uk':
        return { type: 'Point', coordinates: [-3.4359, 55.3781] };
      default:
        return null;
    }
  };

  // Calculate the centroid only if the region data is available
  const regionCentroid = selectedRegion ? getRegionCentroid() : null;
  const centroidCoords = regionCentroid ? getCoords(regionCentroid) : null;
  const mapCenter = centroidCoords ? centroidCoords.reverse() : [0, 0];

  // Center the map when the selectedRegion changes
  useEffect(() => {
    if (mapCenter && mapRef.current) {
      mapRef.current.setView(mapCenter, 3); // Change the zoom level to adjust the map size
    }
  }, [selectedRegion, mapCenter]);

  // Use a ref to access the map instance
  const mapRef = React.createRef();

  return (
    <div className="map-container">
      <MapContainer ref={mapRef} center={mapCenter} zoom={3} style={{ flex: 1 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Load the selected region as GeoJSON if available */}
        {regionCentroid && (
          <GeoJSON data={regionCentroid} key={selectedRegion} />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
