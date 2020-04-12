import React from 'react';
import './Style.css';
import './App.css';

 class Form extends React.Component{
     render(){
        return (
        <div className="wrapper"> 
            <div className="form-div" id="form-div">
                <form className="form">
                    <input type="text" placeholder="Set Time"/>
                    <select type="drop-down">
                    <option>--Time zone--</option>
                    <option>GMT-12:00</option>
                    </select>
                    <input type="date" placeholder="Pic"/>
                </form>
            </div>

            <div className="world-clock">
                <div className="Negative-time-zone">
                    <p>Negative time zone div</p>
                </div>

                <div className="gmt">
                    GMT
                </div>

                <div className="Positive-time-zone">
                    <p>Positive time zone div</p>
                </div>
            </div>
        </div> 
          );
     }
     }

export default Form;
