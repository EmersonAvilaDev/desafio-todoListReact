import "./index.scss"

const ModalViewTask = ({ data, isOpen, onClose }) => {

  if(!isOpen) return null;
  return (
    <div className="view__modal__container">
    <div className="view__modal">

      <h2 className="viewTask__title">Tarefa: {data.title}</h2>

      <p>Descrição: {data.description}</p>

      <div className="view__modal_div_btn">
        <button onClick={onClose} className="modal__btn__cancel">fechar</button>
      </div>
    </div>
  </div>
  )
}

export default ModalViewTask