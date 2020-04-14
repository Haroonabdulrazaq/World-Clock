import React, { Component } from 'react';
import "./Negative.css"
import './Clock.css';

export class NegativeTime extends Component {
 
    render() {
        const padTime =(timeUnit)=>{
            let stringSec= String(timeUnit);
         return stringSec.length<2? '0'+timeUnit: timeUnit
         }
        return (     
           
            <div className="negative-time-zone">
                <h3 className="heading negative-time">Negative time zone</h3>
                <div className="below-gmt">
                        <div className="below byOne">
                            <p>{padTime(this.props.hours - 1)}: {padTime(this.props.min)}:{padTime(this.props.sec)} </p>
                        </div>
                        <div className="below byTwo">
                            <p>{padTime(this.props.hours - 2)}: {padTime(this.props.min)}: {padTime(this.props.sec)} </p>
                        </div>
                        <div className="below byThree">
                            <p>{padTime(this.props.hours - 3)}: {padTime(this.props.min)}: {padTime(this.props.sec)} </p>
                        </div>
                        <div className="below byFour">
                            <p>{padTime(this.props.hours - 4)}: {padTime(this.props.min)}: {padTime(this.props.sec)} </p>
                        </div>
                        <div className="below byFive">
                            <p>{padTime(this.props.hours - 5)}: {padTime(this.props.min)}:{padTime(this.props.sec)} </p>
                        </div>
                        <div className="below bySix">
                            <p>{padTime(this.props.hours - 6)}: {padTime(this.props.min)}: {padTime(this.props.sec)} </p>
                        </div>
                        <div className="below bySeven">
                            <p>{padTime(this.props.hours - 7)}: {padTime(this.props.min)}: {padTime(this.props.sec)} </p>
                        </div>
                        <div className="below byEight">
                            <p>{padTime(this.props.hours - 8)}: {padTime(this.props.min)}: {padTime(this.props.sec)} </p>
                        </div>
                        <div className="below byNine">
                            <p>{padTime(this.props.hours - 11)}: {padTime(this.props.min)}: {padTime(this.props.sec)} </p>
                        </div>   
                           
                </div>
            </div>
        )
    }
}

export default NegativeTime;
