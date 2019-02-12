import React, { Component } from 'react';
import { Flag } from "semantic-ui-react";



class City extends Component {

    render() { 
        const city = 'Paris'

        return <div className="ui header changes">
            <h1 className="content city">
              {city}
            </h1>
          </div>;
    }
}
 
export default City;