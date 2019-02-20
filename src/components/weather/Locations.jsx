import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

// Resuable Location Card
class Locations extends Component {
  render() {
    const { name } = this.props;
    return (
      <Grid.Column style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 className="country">{name}</h2>
        <div className="divider" />
      </Grid.Column>
    );
  }
}

export default Locations;
