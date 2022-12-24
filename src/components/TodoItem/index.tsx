import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { TodoItemStyle, ButtonTodo } from './styled';

export interface ITodo {
  text: string;
  index: number;
  setTodos: (todosArray: string[]) => void;
}
export default function TodoItem({
  text,
  index,
  setTodos,
}: ITodo): JSX.Element {
  const todosLocal = JSON.parse(localStorage.getItem('todosss') || '[]');

  const handleClick = (
  ): void => {
    todosLocal.splice(index, 1);
    localStorage.setItem('todosss', JSON.stringify(todosLocal));
    setTodos(todosLocal);
  };

  return (
    <TodoItemStyle>
      <p>{text}</p>
      <ButtonTodo type="button" onClick={handleClick}>
        <FaCheck />
      </ButtonTodo>
    </TodoItemStyle>
  );
}
