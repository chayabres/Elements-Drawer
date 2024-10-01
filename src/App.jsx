import { useState } from 'react'
import TextElements from './Text.jsx';
import DynamicElement from './DynamicElement.jsx';

function App() {


  
  function CallBack(text){


    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', gridTemplateRows: 'repeat(2, auto)', gap: '10px' }}>
        {text.split('\n').map((item, index) => {
          const fields = item.split(';'); 
  
          if (fields.length >= 5) {
            return (
              <div style={{ margin: '10px 0' }} key={index}>
              <DynamicElement 
                key={index} 
                line={fields[0]}
                column={fields[1]}
                type={fields[3]} 
                label={fields[2]} 
                userValue={fields[4]} 
              />
              </div>
            );
          }
  
          return null;
        })}
      </div>
    );


  }


  return (
    <TextElements handleCallback = {CallBack} /> 
  )
}

export default App
