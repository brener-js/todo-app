import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import Tasks from './components/Tasks';

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem('todo:savedTasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: TaskProps[]) {
    setTasks(newTasks);
    localStorage.setItem('todo:savedTasks', JSON.stringify(newTasks));
  }

  function addTask(titleContent: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: titleContent,
        isComplete: false,
      },
    ]);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasksAndSave(newTasks);
  }

  function completeTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onComplete={completeTask}
      />
    </>
  );
}

export default App;
