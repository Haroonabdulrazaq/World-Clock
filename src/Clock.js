import React from 'react'
import "./Clock.css";
// import { setInterval, clearImmediate, clearInterval } from 'timers';
 
 

class Clock extends React.Component {
 constructor(props){
     super(props);

     this.state={
         time: new Date().toUTCString()
     }
 
 }
//    tick =()=>{
//     this.setState({
//         time: new Date().toUTCString() 
//     })
// }
    // componentDidMount(){
    //     this.intervalID = setInterval(
    //         () => this.tick(),
    //         1000)
    // }
    // componentWillUnmount(){
    //     clearInterval(this.intervalID);
    // }


    render() {    
        return (
            <div className="world-clock">
                <div className="Negative-time-zone">
                    <p>Negative time zone div</p>
                </div>

                <div className="gmt">
                    <div className="gmt-clock">
                        <p>GMT Time</p>
                        <p>{this.state.time}</p> 
                        <span>Date:</span>
                    </div>
                </div>

                <div className="Positive-time-zone">
                    <p>Positive time zone div</p>
                </div>
            </div>
        )
    }
}

export default Clock;
