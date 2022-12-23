const Summary = ({ percentageData, valuesData }) => {
  return (
    <section>
      <h2>Summary</h2>
      <ul>
        {percentageData.map((apr, idx) => {
          return (
            <li key={idx}>
              <p>{apr.name}</p>
              <div>
                <p>{apr.in}</p>
                <img src="" alt="" />
                <p>{apr.out}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <ul>
        {valuesData.map((value, idx) => {
          return (
            <li key={idx}>
              <p>{value.name}</p>
              <div>
                <p>{value.value}</p>
                <p>{value.coin}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Summary;
