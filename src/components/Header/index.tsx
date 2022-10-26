import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import todoLogo from '../../assets/todoLogo.svg';

import styles from './header.module.css';

interface Props {
  onAddTask: (titleContent: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="ToDo Logo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
