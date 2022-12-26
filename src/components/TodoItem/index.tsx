import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import {
  TodoItemStyle,
  ButtonTodoCheck,
  ButtonTodoEdit,
  TextTodo,
} from './styled';

export interface ITodo {
  text: string;
  index: number;
  setTodos: (todosArray: string[]) => void;
  newTodoText: string;
  showEdit: boolean;
  setShowEdit: (show: boolean) => void;
}
export default function TodoItem({
  text,
  index,
  newTodoText,
  setTodos,
  showEdit,
  setShowEdit,
}: ITodo): JSX.Element {
  const todosLocal = JSON.parse(localStorage.getItem('todosss') || '[]');

  const handleClickCheck = (): void => {
    todosLocal.splice(index, 1);
    localStorage.setItem('todosss', JSON.stringify(todosLocal));
    setTodos(todosLocal);
  };

  const handleClickEdit = (): void => {
    setShowEdit(!showEdit);
    todosLocal.splice(index, 1, newTodoText);
    localStorage.setItem('todosss', JSON.stringify(todosLocal));
    setTodos(todosLocal);
  };

  return (
    <TodoItemStyle>
      <TextTodo>{text}</TextTodo>

      <ButtonTodoCheck type="button" onClick={handleClickCheck}>
        <FaCheck />
      </ButtonTodoCheck>

      <ButtonTodoEdit type="button" onClick={handleClickEdit}>
        <FaEdit />
      </ButtonTodoEdit>
    </TodoItemStyle>
  );
}
