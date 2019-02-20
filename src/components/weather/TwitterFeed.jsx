import React, { Component } from 'react';
import { Timeline, Hashtag } from 'react-twitter-widgets'

// Using React twitter lib 
class TwitterFeed extends Component {

  render() {
    const {name} = this.props
    return (
      <div className="feed-header">
        <img
          src="https://i.imgur.com/0JB7D2b.png"
          alt="tw"
          className="twitter-image"
        />
        <span className="twitter-title">Twitter Feed </span>
        <span className="twitter-location">
          <Hashtag hashtag={name} />
        </span>
        <Timeline
          dataSource={
            {
              sourceType: 'profile',
              screenName: name,
            }

          }
          options={{
            username: 'Axios',
            height: '200',
            width: '400',
            linkColor: "#fe5018",
            borderColor: "#fe5018"
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />

      </div>


    )
  }
}

export default TwitterFeed;