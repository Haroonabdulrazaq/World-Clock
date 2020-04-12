import React from 'react';
import './Style.css';
 
import './App.css';

 class Form extends React.Component{
     render(){
        return (
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

          );
     }
     }

export default Form;
