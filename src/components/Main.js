import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
      });
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
    })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-img" src={userAvatar} alt="Жак-Ив Кусто"/>
          <button type="button" onClick={props.onEditAvatar} area-label="Изменить аватар" className="profile__avatar-button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button type="button" onClick={props.onEditProfile} aria-label="Редактировать данные" className="profile__info-button"></button>
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
        <button type="button" onClick={props.onAddPlace} aria-label="Добавить новую фотографию" className="profile__add-button"></button>
      </section>
      <section className="cards">
        <ul className="cards__grid">
          {cards.map((card) => {
            return <Card 
              key={card._id} 
              card={card}
              
              onCardClick={props.onCardClick}
            />
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;