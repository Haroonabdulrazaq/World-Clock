import React from 'react'
import "./Clock.css";
import NegativeTime from './NegativeTime'
 

class Clock extends React.Component {
 constructor(props){
     super(props);

     this.state={
        hours: new Date().getUTCHours(),
        min: new Date().getUTCMinutes(),
        sec: new Date().getUTCSeconds(),
         
     }
 
 }
   tick =()=>{
    this.setState({
        hours: new Date().getUTCHours(),
        min: new Date().getUTCMinutes(),
        sec: new Date().getUTCSeconds() 
    })
}
    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(),
            1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
 


    render() {    
       const padTime =(timeUnit)=>{
           let stringSec= String(timeUnit);
        return stringSec.length<2? '0'+timeUnit: timeUnit
        }
       
     
        return (
            <div className="world-clock">
                
                <NegativeTime hours={this.state.hours} min= {this.state.min} sec= {this.state.sec}/>

                <div className="gmt">

                    <div className="gmt-clock">
                        <h3>GMT Time</h3>      
                       <p className="gmt-display-time"> {padTime(this.state.hours) }:  {padTime(this.state.min) }:  {padTime(this.state.sec) } </p> 
                    </div>
                    <div className="off-set">
                        <div className="off-set first">
                            <p> OFF set 1</p>
                        </div>                    
                        <div className="off-set second">
                            <p>OFF set 2</p>
                        </div>
                        <div className="off-set third">
                            <p>OFF set 3</p>
                        </div>                     
                        <div className="off-set fourth">
                            <p> OFF set 4</p>
                        </div>                       
                        <div className="off-set fifth">
                            <p>OFF set 5</p>
                        </div>
                        <div className="off-set sixth">
                            <p>OFF set 6</p>
                        </div>
                       <div className="off-set seventh">
                            <p> OFF set 7</p>
                        </div>                       
                        <div className="off-set eight">
                            <p>OFF set 8</p>
                        </div>
                        <div className="off-set nine">
                            <p>OFF set 9</p>
                        </div>
                    </div>
                </div>
{/*Positive time zone */}
                <div className="positive-time-zone">
                    <p>Positive time zone</p>
                </div>
            </div>
        )
    }
}

export default Clock;
