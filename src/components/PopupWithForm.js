function PopupWithForm({onClose, isOpen, name, title, buttonText, children}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" onClick={onClose} aria-label="Закрыть" className="popup__close-button"></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button type="submit" className="popup__form-submit" disabled>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;