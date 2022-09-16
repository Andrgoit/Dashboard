import React from 'react';

export default function Statistics({ state, total, positivePercentage }) {
  console.log(state);
  return (
    <div>
      <p>Good:{state.good}</p>
      <p>Neutral:{state.neutral}</p>
      <p>Bad:{state.bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage}</p>
    </div>
  );
}
