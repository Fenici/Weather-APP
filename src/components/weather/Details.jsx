import React, { Component } from 'react';
import { Grid } from "semantic-ui-react";

class Details extends Component {
   
    render() { 
        const {temp_c,
                 text,
             humidity,
              wind_mph} = this.props
        return <Grid.Column>
            <div className="temperature">
                {temp_c}
                <span className="celsius">°</span>
            </div>
            <div className="condition_text">{text}</div>
            <div className="condition">
                <div className="humi">
                    Humidity <br />
                    {humidity}%
              </div>
                <div className="wind">
                    Wind
                <br />
                    {wind_mph} mph
              </div>
            </div>
        </Grid.Column>
       
    }
}
 
export default Details;