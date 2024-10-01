import React, { useState } from 'react';

const DynamicElement = ({line,column, type, label, userValue }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', value);
    
  };
  const x = column
  const y = line

return (
      <div style={{ display: 'grid',gridColumn: line, gridRow: column}}>
        <form onSubmit={handleSubmit}>
          <label>
            {label}
            {type === 'SELECT' ? (
              <select value={value} onChange={handleChange}>
                <option value="">{userValue.split(',')[0]}</option>
                {userValue.split(',').map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={`Enter ${label}`}
              />
            )}
          </label>
        </form>
        </div>
  );

};

export default DynamicElement;