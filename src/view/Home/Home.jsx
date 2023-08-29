import "./index.scss";
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";
import { useState } from "react";

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
  };

  const editTask = (id, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, 
          title: newTitle,
          description: newDescription }
        : task
    );

    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((task) =>
      task.id !== id ? task : null
    );
    setTasks(filteredTasks);
  };

  return (
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
  );
};

export default Home;
