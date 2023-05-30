import React from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

 
 // const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]); 

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
  } 

  return (
    <PopupWithForm 
      isOpen={isOpen}
      onClose={onClose}  
      name="add-card" 
      title="Новое место" 
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input type="text" className="popup__form-item popup__form-item_type_name" name="name" minLength="2" maxLength="30"value={name} onChange={handleNameChange} placeholder="Название" required />
        <span className="popup__form-error"></span>
      </label>
      <label className="popup__form-field">
        <input type="url" className="popup__form-item popup__form-item_type_link" name="link" value={link} onChange={handleLinkChange} placeholder="Ссылка на картинку" required />
        <span className="popup__form-error"></span>
      </label>
    </PopupWithForm>
  )
}
  
  export default AddPlacePopup;