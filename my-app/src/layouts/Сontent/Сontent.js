import { useState } from 'react';
import CoinsIndicators from '../../components/CoinsIndicators';
import Calculator from '../../components/Сalculator';
import Summary from '../../components/Summary';

import { coinsData } from '../../api/coinsData';
import { percentageData, valuesData } from '../../helpers/dataSummary';

const Сontent = () => {
  const [isActiveTab, setIsActiveTab] = useState('Add Collateral');
  const [deposit, setDeposit] = useState('');
  const [borrow, setBorrow] = useState('');
  const [inputValue, setInputValue] = useState(0);

  return (
    <main>
      <CoinsIndicators coinsData={coinsData} />
      <div>
        <Calculator
          isActiveTab={isActiveTab}
          setIsActiveTab={setIsActiveTab}
          setDeposit={setDeposit}
          setBorrow={setBorrow}
          inputValue={inputValue}
          setInputValue={setInputValue}
          deposit={deposit}
          borrow={borrow}
        />
        <Summary percentageData={percentageData} valuesData={valuesData} />
      </div>
    </main>
  );
};

export default Сontent;
