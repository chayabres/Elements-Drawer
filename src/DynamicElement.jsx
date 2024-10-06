import React, { useState } from 'react';

const DynamicElement = ({line,column, type, label, userValue }) => {
  const [value, setValue] = useState('');


  const gridColumn = parseInt(column)
  const gridRow = parseInt(line)

return (
        <div key={`${line}-${column}`}  style={{
              gridColumn,
              gridRow,
            }}>
              
          <label>
            {label}
            {type === 'SELECT' ? (
              <select value={value} >
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
                onChange={(e) => setValue(e.target.value)}
                placeholder={`Enter ${label}`}
              />
            )}
          </label>
        </div>
  );

};

export default DynamicElement;