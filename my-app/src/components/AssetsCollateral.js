import { useState } from 'react';
import TabCalculator from './TabCalculator';

import { assetsTabs } from '../helpers/datasCalculator';

const AssetsCollateral = ({ inputValue, setInputValue }) => {
  const [isActiveTab, setIsActiveTab] = useState('');

  const handleChange = (event) => {
    const value = event.target.value.replace(/\+|-/gi, '');
    setInputValue(value);
  };

  return (
    <div>
      <p>Assets Collateral</p>
      <input type="number" value={inputValue} onChange={handleChange} />
      <TabCalculator
        isActiveTab={isActiveTab}
        setIsActiveTab={setIsActiveTab}
        dataTabs={assetsTabs}
        classAdditional={''}
      />
    </div>
  );
};

export default AssetsCollateral;
