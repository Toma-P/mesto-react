function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
      }
  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__likes">
        <button type="button" aria-label="Нравится" className="card__like-button"></button>
        <p className="card__like-count">{props.card.likes.length}</p>
      </div>
      <button type="submit" aria-label="Удалить" className="card__delete-button"></button>
    </li>
  )
}

export default Card;