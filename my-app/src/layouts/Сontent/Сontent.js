import CoinsIndicators from '../../components/CoinsIndicators';
import Calculator from '../../components/Сalculator';
import { coinsData } from '../../api/coinsData';

const Сontent = () => {
  return (
    <main>
      <CoinsIndicators coinsData={coinsData} />
      <div>
        <Calculator />
      </div>
    </main>
  );
};

export default Сontent;
