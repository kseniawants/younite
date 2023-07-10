import React, { useState } from 'react';

function RangeInput() {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor='customRange1' className='form-label'>
        Example range
      </label>
      <input
        type='range'
        className='form-range'
        id='customRange1'
        value={rangeValue}
        onChange={handleRangeChange}
      />
      <p>Selected value: {rangeValue}</p>
    </div>
  );
}

export default RangeInput;
