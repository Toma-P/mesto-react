function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" onClick={props.onClose} aria-label="Закрыть" className="popup__close-button"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          {props.children}
          <button type="submit" className="popup__form-submit" disabled>{props.buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;