import './card-list.styles.css';
import CardComponent from '../card-component/card.component';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <CardComponent key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
