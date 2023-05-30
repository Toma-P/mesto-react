import React from "react";

function PopupWithConfirmation({isOpen, onClose, card, onCardDelete, title, buttonText}) {
    const [text, setText] = React.useState(buttonText);   
  
    React.useEffect(() => {
        setText(buttonText);
    }, [isOpen]);
    
    function handleButtonClick() {
    setText('Сохранение...');
    onCardDelete(card._id);
  }
  return (
    <section className={`popup popup_type_delete ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" onClick={onClose} className="popup__close-button"></button>
        <h2 className="popup__title">{title}</h2>
        <button type="button" aria-label="Подтвердить удаление" onClick={handleButtonClick} className="popup__form-submit">{text}</button>
      </div>
    </section>
  )
}
  
export default PopupWithConfirmation;