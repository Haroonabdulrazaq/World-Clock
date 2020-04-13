import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Clock.css';

export class NegativeTime extends Component {
 constructor(props){
     super(props);

 }
    render() {
        return (
            <div className="negative-time-zone">
                    <h3>Negative time zone</h3>
                    <p>{this.props.firstNeg} </p>
            </div>
        )
    }
}

export default NegativeTime;
