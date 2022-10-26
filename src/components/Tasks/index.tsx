import { ClipboardText } from 'phosphor-react';
import { TaskProps } from '../../App';
import Task from '../Task';
import styles from './tasks.module.css';

interface TasksProps {
  tasks: TaskProps[];
  onComplete: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export default function Tasks({ tasks, onDeleteTask, onComplete }: TasksProps) {
  const completedTasks = tasks.filter((task) => task.isComplete).length;
  const tasksTotal = tasks.length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{completedTasks}</span>
        </div>

        <div>
          <p className={styles.purpleText}>Concluídas</p>
          <span>
            {completedTasks} de {tasksTotal}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <ClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
