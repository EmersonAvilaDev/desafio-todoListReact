import "./index.scss";
import checkboxAbled from "../../assets/checkboxAbled.svg";
import checkboxDisabled from "../../assets/checkboxDisabled.svg";
import edit from "../../assets/edit.svg";
import deleted from "../../assets/trash.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalDelete from "../../view/ModalDelete/ModalDelete";
import ModalViewTask from "../../view/ModalViewTask/ModalViewTask";
import ModalEdit from "../../view/ModalEdit/ModalEdit";

const CardTasks = ({ data, editTask ,removeTask }) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isViewTaskModal, setIsViewTaskModal] = useState(false);
  const [isEditTaskModal, setIsEditModal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(data.completed);

  const openViewTaskModal = () => {
    setIsViewTaskModal(true);
  };

  const closeViewTaskModal = () => {
    setIsViewTaskModal(false);
  };

  const openDeleteModal = () => {
    setIsModalDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const openEditModal = () => {
    setIsEditModal(true);
  };

  const closeEditModal = () => {
    setIsEditModal(false);
  };

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <li className="task__card">
        <p onClick={openViewTaskModal}>{data.title}</p>

        <button className="btn-check" onClick={toggleCompletion}>
          {isCompleted ? (
            <img src={checkboxAbled} alt="" />
          ) : (
            <img src={checkboxDisabled} alt="" />
          )}
        </button>

        <div className="btn__container">
          <button onClick={openEditModal}>
            <img src={edit} alt="" />
          </button>
          <button onClick={openDeleteModal}>
            <img src={deleted} alt="" />
          </button>
        </div>
      </li>

      <ModalViewTask
        data={data}
        isOpen={isViewTaskModal}
        onClose={closeViewTaskModal}
      />

      <ModalEdit
        data={data}
        isOpen={isEditTaskModal}
        onClose={closeEditModal}
        editTask={editTask}
      />

      <ModalDelete
        data={data}
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        removeTask={removeTask}
      />
    </>
  );
};

export default CardTasks;
