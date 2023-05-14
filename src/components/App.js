import React from 'react';
import Header from "./Header.js";
import Main from './Main.js';
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false); 
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarProfileOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setAvatarProfileOpen(false);
    setProfilePopupOpen(false);
    setSelectedCard(null);
  }
  function handleEditAvatarClick() {
    setAvatarProfileOpen(true);
  };
  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  return (
    <body className="page">
      <Header />
      <Main onCardClick={setSelectedCard} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="edit-profile" title="Редактировать профиль" buttonText="Сохранить">
        <label className="popup__form-field">
          <input type="text" className="popup__form-item popup__form-item_type_username" name="name" minlength="2" maxlength="40" value="" placeholder="Имя пользователя" required />
            <span className="popup__form-error"></span>
          </label>
          <label className="popup__form-field">
            <input type="text" className="popup__form-item popup__form-item_type_about" name="about" minlength="2" maxlength="200" value="" placeholder="Немного о себе" required />
            <span className="popup__form-error"></span>
          </label>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="add-card" title="Новое место" buttonText="Создать">
        <label className="popup__form-field">
          <input type="text" className="popup__form-item popup__form-item_type_name" name="name" minlength="2" maxlength="30" value="" placeholder="Название" required />
            <span className="popup__form-error"></span>
          </label>
          <label className="popup__form-field">
            <input type="url" className="popup__form-item popup__form-item_type_link" name="link" value="" placeholder="Ссылка на картинку" required />
            <span className="popup__form-error"></span>
          </label>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="edit-avatar" title="Обновить аватар" buttonText="Сохранить">
        <label className="popup__form-field">
          <input type="url" className="popup__form-item popup__form-item_type_link" name="link" value="" placeholder="Ссылка на картинку" required />
          <span className="popup__form-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} name="delete" title="Вы уверены?" buttonText="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </body>
  );
}

export default App;
