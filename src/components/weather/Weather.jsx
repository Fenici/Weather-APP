import React from "react";
import { Grid } from "semantic-ui-react";
import Forecast from "./Forecast";
import "semantic-ui-css/semantic.min.css";
import Axios from "axios";
import { Timeline, Hashtag } from 'react-twitter-widgets'


const DEFAULT_QUERY = "paris";
const PATH_BASE = "https://api.apixu.com/v1/forecast.json";
const PARAM_KEY = "key=";
const PARAM_SEARCH = "q=";
const PARAM_DAYS = "days=";

const COUNT_DAYS = "5";
const SECRET_KEY = "5d052e4b4a62413091d90527191601";


class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      value: DEFAULT_QUERY, isLoading: false,

    };
  }

  handleChange = event => {  
    this.setState({ value: event.target.value });
  };

  getData = value => {
    const url = `${PATH_BASE}?${PARAM_KEY}${SECRET_KEY}&${PARAM_SEARCH}${this.state.value}&${PARAM_DAYS}${COUNT_DAYS}`;

    // Axios.get(url).then(res=>{
    //   const data = res.data

    //   this.setState=({data})
    // })

    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data);
        this.setState({ data });
      });
    });
  };

  handleSubmit=(event)=>{
    console.log(this.state.value);
    const { value } = this.state
    this.getData(value);
    event.preventDefault();
  }

  componentDidMount() {
    const { value } = this.state;
    this.getData(value);
  }

  render() {
    const { data } = this.state;

    const forecastList = data;

    console.log(forecastList);

    if (!data) {
      return null;
    }

    return (
      <Grid container stackable className="App-Wrapper">
        <Grid.Row>
          <Grid.Column>
            {/* <Select
              placeholder="Select your country"
              options={countryOptions}
              value={this.state.value}
              onChange={this.handleChange}
            />
            {this.countryOptions=(city)=>{
             return  <div key={city.key}>
                {city.text}
             </div>
            }} */}
            <form onSubmit={this.handleSubmit} className="ui selection dropdown">
              <label>
                Pick your favorite City:
                <br></br>
                <br></br>

                <select value={this.state.value} onChange={this.handleChange} >
                  <option value="paris">Paris</option>
                  <option value="sydney">Sydney</option>
                  <option value="beijing">Beijing</option>
                  <option value="London">London</option>
                </select>
              </label>
              <input type="submit" value="Submit" />

            </form>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} padded="horizontally" className="top">
          <Grid.Column>
            <div className="temperature">
              {data.current.temp_c}
              <span className="celsius">°</span>
            </div>
            <div className="condition_text">{data.current.condition.text}</div>
            <div className="condition">
              <div className="humi">
                Humidity <br />
                {data.current.humidity}%
              </div>
              <div className="wind">
                Wind
                <br />
                {data.current.wind_mph} mph
              </div>
            </div>
          </Grid.Column>

          <Grid.Column style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 className="country">{data.location.name}</h2>
            <div className="divider" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={6} className="feed">
            <div className="feed-header">
              <img
                src="https://i.imgur.com/0JB7D2b.png"
                alt="tw"
                className="twitter-image"
              />
              <span className="twitter-title">Twitter Feed </span>
              <span className="twitter-location">
                <Hashtag hashtag={data.location.name}/>
                              </span>
              <Timeline
                dataSource={
                  {
                  sourceType: 'profile',
                  screenName: data.location.name,
                }
              
              
              }
                options={{
                  username: 'Axios',
                  height: '200',
                  width:'400',
                  chrome: "noheader",
                  linkColor: "#fe5018",
                  borderColor: "#fe5018"
                }}
                onLoad={() => console.log('Timeline is loaded!')}
              />
          
            </div>
            <div />

            {/* <div className="function-divider"></div> */}
          </Grid.Column>
          <Grid.Column width={10} className="detail">
            {/* <span className="weather-title">Weather Detail</span> */}
            <Forecast forecastList={forecastList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Weather;
