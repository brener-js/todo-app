import { Check, CheckCircle, Trash } from 'phosphor-react';
import { TaskProps } from '../../App';
import styles from './task.module.css';

interface Props {
  task: TaskProps;
  onComplete: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export default function Task({ task, onDeleteTask, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkItem} onClick={() => onComplete(task.id)}>
        {task.isComplete ? <Check size={30} weight="bold" /> : <div />}
      </button>
      <p className={task.isComplete ? styles.textCompleted : ''}>
        {task.title}
      </p>
      <button
        className={styles.deleteBtn}
        onClick={() => onDeleteTask(task.id)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
