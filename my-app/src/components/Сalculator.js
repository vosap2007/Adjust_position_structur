import TabCalculator from './TabCalculator';
import ChoiceDepositOrBorrow from './ChoiceDepositOrBorrow';
import AssetsCollateral from './AssetsCollateral';
import Button from './Button';

import { dataTabs } from '../helpers/datasCalculator';
import { coinsMetadata } from '../api/coinsData';

const Сalculator = ({
  isActiveTab,
  setIsActiveTab,
  setDeposit,
  setBorrow,
  inputValue,
  setInputValue,
  deposit,
  borrow,
}) => {
  const handleClickFarm = () => {
    const farmObj = {
      deposit: deposit,
      borrow: borrow,
      value: inputValue,
    };

    console.log('farmObj', farmObj);
  };

  return (
    <section>
      <h2>How would you like to adjust position</h2>
      <TabCalculator
        isActiveTab={isActiveTab}
        setIsActiveTab={setIsActiveTab}
        dataTabs={dataTabs}
        classAdditional={''}
      />
      <ChoiceDepositOrBorrow
        coinsMetadata={coinsMetadata}
        setDeposit={setDeposit}
        setBorrow={setBorrow}
      />
      <AssetsCollateral inputValue={inputValue} setInputValue={setInputValue} />
      <div>
        <img src="" alt="" />
        <p>
          Please keep in mind that with the level of leverage, the risk of
          liquidation rises. Choose the assets wisely and read carefully about
          the risks beforehand.
        </p>
      </div>

      <Button
        text={'Farm'}
        className={''}
        disabled={false}
        onClick={handleClickFarm}
      />
    </section>
  );
};

export default Сalculator;
