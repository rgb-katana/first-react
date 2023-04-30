import { Component } from 'react';
import './card-list.styles.css';
import '../card-component/card.component';
import CardComponent from '../card-component/card.component';

class CardList extends Component {
  render() {
    console.log('render');
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map(monster => (
          <CardComponent monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
