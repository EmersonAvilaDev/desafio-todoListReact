import "./index.scss";
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Home = ({ data }) => {
  const [tasks, setTasks] = useState(data);

  const addTask = (title, description) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        description,
        completed: false,
      },
    ];

    setTasks(newTasks);
    toast.success("Tarefa Adicionada", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const editTask = (id, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, title: newTitle, description: newDescription }
        : task
    );

    setTasks(updatedTasks);
    toast.success("Tarefa Editada com sucesso!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const removeTask = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((task) =>
      task.id !== id ? task : null
    );

    setTasks(filteredTasks);
    toast.success("Tarefa Deletada", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="container">
        <Header />

        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

        <TaskList
          data={tasks}
          addTask={addTask}
          editTask={editTask}
          removeTask={removeTask}
        />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Home;
