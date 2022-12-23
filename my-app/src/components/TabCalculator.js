import React from 'react';

const TabCalculator = ({
  isActiveTab,
  setIsActiveTab,
  dataTabs,
  classAdditional,
}) => {
  const activeStyles = (name) => {
    return isActiveTab === name && 'tab_сalculator__active';
  };

  return (
    <div className={`tab_сalculator ${classAdditional}`}>
      {dataTabs.map((tab, idx) => {
        return (
          <button
            key={idx}
            className={`tab_сalculator__button ${activeStyles(tab.name)}`}
            onClick={() => {
              setIsActiveTab(tab.name);
            }}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default TabCalculator;
