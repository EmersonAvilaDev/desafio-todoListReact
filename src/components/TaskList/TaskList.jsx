import "./index.scss";
import CardTasks from "../CardTasks/CardTasks";
import Divisor from "../../assets/divisor.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalCreatedTask from "../../view/ModalCreatedTask/ModalCreatedTask";

const TaskList = ({ data, addTask, editTask, removeTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="indice__list">
        <p>Tarefa</p>
        <p>Status</p>
        <p>Opções</p>
      </div>
      <img src={Divisor} className="divisor" alt="" />

      <ul className="list">
        {data.map((task) => (
          <CardTasks
            key={task.id}
            data={task}
            editTask={editTask}
            removeTask={removeTask}
          />
        ))}

        <li className="cardNewTask">
          <p>Nova Tarefa...</p>

          <button onClick={openModal}>+</button>
        </li>
      </ul>

      <ModalCreatedTask
        isOpen={isModalOpen}
        onClose={closeModal}
        addTask={addTask}
      />
    </>
  );
};

export default TaskList;
