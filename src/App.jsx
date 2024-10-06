import TextElements from './Text.jsx';
import DynamicElement from './DynamicElement.jsx';

function App() {
  function CallBack(text){
    return (
      <div style={{ display: 'grid' }}>
        {text.split('\n').map((item, index) => {
          const fields = item.split(';'); 
  
          if (fields.length >= 5) {
            return (
              <DynamicElement 
                key={index} 
                line={fields[0]}
                column={fields[1]}
                type={fields[3]} 
                label={fields[2]} 
                userValue={fields[4]} 
              />
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
