import Button from './Button';

const CoinsIndicators = ({ coinsData }) => {
  const handleClickAdjust = () => {
    console.log('this is Adjust');
  };

  const handleClickClose = () => {
    console.log('this is Close');
  };
  return (
    <section>
      <ul>
        {coinsData.map((coin, idx) => {
          return (
            <li key={idx}>
              <div>
                <p>{coin.name}</p>
                <img src="" alt="" />
              </div>
              <p>{coin.value}</p>
              <p>{coin.perspective}</p>
            </li>
          );
        })}
      </ul>

      <div>
        <Button
          text={'Adjust'}
          className={''}
          disabled={false}
          onClick={handleClickAdjust}
        />
        <Button
          text={'Close'}
          className={''}
          disabled={false}
          onClick={handleClickClose}
        />
      </div>
    </section>
  );
};

export default CoinsIndicators;
