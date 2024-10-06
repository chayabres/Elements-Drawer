import { useState } from 'react';
// import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


function TextElements (props) {

    var defaultText = "2;1;gender;SELECT;Male,Female \n1;1;First Name;TEXT_INPUT;Enter your first name \n2;2;marital status;SELECT;Single,Maried,Divorced \n1;2;Last Name;TEXT_INPUT;Enter your last name "
    const [textElements, setTextElements] = useState(defaultText);
    const styleObj = {
        marginRight: '20px',
        width: '500px',
        height: '250px',
    }
    const handleChange = (event) => {
        setInputText(event.target.value);
      };

    return (
        <>
        <textarea 
        rows={10}
        style={styleObj}
        type = "text"
        value = {textElements}
        onChange = {(e) => setTextElements(e.target.value)}
        />
        
        {props.handleCallback(textElements)}
        
        </>
        
    )

}

export default TextElements