import React from "react";
import { Grid, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Details from "./Details";
import Selector from "./selector";
import Locations from "./Locations";
import TwitterFeed from "./TwitterFeed";
import Forecast from "./Forecast";

const DEFAULT_QUERY = "paris";
const PATH_BASE = "https://api.apixu.com/v1/forecast.json";
const PARAM_KEY = "key=";
const PARAM_SEARCH = "q=";
const PARAM_DAYS = "days=";

const COUNT_DAYS = "5";
const SECRET_KEY = "b231215f185d4a86a90103251191602";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      value: DEFAULT_QUERY,
      isLoading: false
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  getData = value => {
    this.setState({ isLoading: true });
    const url = `${PATH_BASE}?${PARAM_KEY}${SECRET_KEY}&${PARAM_SEARCH}${
      this.state.value
    }&${PARAM_DAYS}${COUNT_DAYS}`;
    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data);
        this.setState({ data, isLoading: false });
      });
    });
  };

  handleSubmit = event => {
    console.log(this.state.value);
    const { value } = this.state;
    this.getData(value);
    event.preventDefault();
  };

  componentDidMount() {
    const { value } = this.state;
    this.getData(value);
  }

  render() {
    const { data, isLoading } = this.state;

    const forecastList = data;

    console.log(forecastList);

    if (!data) {
      return null;
    }

    return (
      <Grid container stackable className="App-Wrapper">
        <Grid.Row>
          <Grid.Column width={3}>
            {isLoading ? (
              <Loader active inline="centered" />
            ) : (
              <Selector
                handleSubmit={this.handleSubmit}
                value={this.state.value}
                handleChange={this.handleChange}
              />
            )}
          </Grid.Column>

          <Loader />
        </Grid.Row>

        <Grid.Row columns={2} padded="horizontally" className="top">
          <Grid.Column>
            <Details
              temp_c={data.current.temp_c}
              text={data.current.condition.text}
              humidity={data.current.humidity}
              wind={data.current.wind_mph}
            />
          </Grid.Column>
          <Locations name={data.location.name} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={6} className="feed">
            <TwitterFeed name={data.location.name} />
          </Grid.Column>
          <Grid.Column width={10} className="detail">
            <Forecast forecastList={forecastList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Weather;
