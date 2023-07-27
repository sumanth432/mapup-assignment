import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loadRegion } from '../actions/MapActions';
import './FormInput.css'


const FormInput = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const dispatch = useDispatch();

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleLoadMap = () => {
    // Dispatch the selected region to Redux store
    dispatch(loadRegion(selectedRegion));
  };

  return (
    <div className="form-input">
      <Select
        placeholder="Select a region"
        value={selectedRegion}
        onChange={handleRegionChange}
      >
        <Select.Option value="us">United States</Select.Option>
        <Select.Option value="in">India</Select.Option>
        <Select.Option value="uk">United Kingdom</Select.Option>
      </Select>
      <Button type="primary" className="load-btn" onClick={handleLoadMap}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
