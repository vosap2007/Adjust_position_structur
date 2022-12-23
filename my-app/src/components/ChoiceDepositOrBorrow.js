import { useState } from 'react';
import TabCalculator from './TabCalculator';

import { choiceCoinTabs } from '../helpers/datasCalculator';

const ChoiceDepositOrBorrow = ({ coinsMetadata, setDeposit, setBorrow }) => {
  const [isActiveTab, setIsActiveTab] = useState('Wallet');
  const { deposit, borrow } = coinsMetadata;

  const handleClickDeposit = () => {
    setDeposit('curentDeposit');
  };

  const handleClickBorrow = () => {
    setBorrow('curentBorrow');
  };

  return (
    <div>
      <div>
        <p>Which asset would you like to deposit?</p>
        <div onClick={handleClickDeposit}>
          <img src="" alt="" />
          <p>{deposit.name}</p>
          <img src="" alt="" />
        </div>

        <TabCalculator
          isActiveTab={isActiveTab}
          setIsActiveTab={setIsActiveTab}
          dataTabs={choiceCoinTabs}
          classAdditional={''}
        />

        <div>
          <img src="" alt="" />
          {`Balance: ${deposit.balance} ${deposit.name}`}
        </div>
      </div>

      <div>
        <p>Which asset would you like to borrow?</p>
        <div onClick={handleClickBorrow}>
          <img src="" alt="" />
          <p>{borrow.name}</p>
          <img src="" alt="" />
        </div>

        <div>
          <img src="" alt="" />
          {`Available supply: ${borrow.balance} ${borrow.name}`}
        </div>
      </div>
    </div>
  );
};

export default ChoiceDepositOrBorrow;
