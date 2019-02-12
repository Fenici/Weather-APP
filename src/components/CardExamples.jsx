import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class CardExamples extends React.Component {
  state = {};
  render() {
    return (
      <Card>
        <Image src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=1400" />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.date}</span>
          </Card.Meta>
          <Card.Description />
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
        </Card.Content>
      </Card>
    );
  }
}


export default CardExamples;