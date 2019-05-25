//step 1 - import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';



//step 2 -  cRrate a react component
const App = () =>
{
    function getTime()
    {
        return (new Date()).toLocaleTimeString();
    }

    const buttonText = 'Click me - by Text !';

    function GetButtonText()
    {
        return "Click me - by Func ";
    }

    const buttonTextJson =  { 'text-value':'click me by json val'};


    const myStyle= {backgroundColor:'blue', color:'white'};

    return (    
            <div>
                <b>{getTime()}</b>
                <div>
                    <ul>
                        <li>hi there</li>
                        <li>bye there</li>
                    </ul>
                </div>                
                <div style={{backgroundColor:'lightBlue', color:'black', padding:'15px 5px 15px 5px'}}>aaa</div> 
                <br />                        
                <div>
                    <label className="label" htmlFor="name">
                        enter name
                    </label>
                    <input id="name" type="text"></input>
                    <br/><br/>
                    <button style={myStyle}>{buttonText}</button><br/>                    
                    <button style={{backgroundColor:'blue', color:'white'}}>{GetButtonText()}</button><br/>
                    <button style={{backgroundColor:'blue', color:'white'}}>{buttonTextJson["text-value"]}</button><br/>
                </div>
            </div>
            );
} 

//step 3 - Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));

