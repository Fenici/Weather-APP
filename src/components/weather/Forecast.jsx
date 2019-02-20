import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import moment from "moment";

class Forecast extends Component {
  render() {
    const { forecastList } = this.props;

    const list = forecastList.forecast.forecastday;

    return (
      <Grid centered stackable>
        <Grid.Row>
          {list.map(forecast => (
            <Grid.Column
              width={3}
              key={forecast.date_epoch}
              style={{ textAlign: "center", marginTop: "45px" }}
            >
              <div className="time_stamp">
                {moment.unix(forecast.date_epoch).format("dddd")}
              </div>
              <img src={forecast.day.condition.icon} alt="" />
              <div className="temp">{forecast.day.avgtemp_c} °C</div>
              <div className="forecast-condition">{forecast.day.condition.text}</div>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Forecast;
