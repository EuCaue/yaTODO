import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import {
  TodoItemStyle,
  ButtonTodoCheck,
  ButtonTodoEdit,
  InputEditTodo,
  TextTodo,
} from './styled';

export interface ITodo {
  text: string;
  index: number;
  setTodos: (todosArray: string[]) => void;
  showEdit: boolean;
  setShowEdit: (show: boolean) => void;
}
export default function TodoItem({
  text,
  index,
  setTodos,
  showEdit,
  setShowEdit,
}: ITodo): JSX.Element {
  const todosLocal = JSON.parse(localStorage.getItem('todosss') || '[]');
  const [newTodoText, setNewTodoText] = useState<string>();
  const TodoTextRef = useRef<HTMLParagraphElement>(null);
  const InputNewTodoRef = useRef<HTMLInputElement>(null);

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
      {showEdit ? (
        <InputEditTodo
          ref={InputNewTodoRef}
          type="text"
          onChange={(e) => setNewTodoText(e.target.value)}
        />
      ) : (
        <TextTodo ref={TodoTextRef}>{text}</TextTodo>
      )}
      <ButtonTodoCheck type="button" onClick={handleClickCheck}>
        <FaCheck />
      </ButtonTodoCheck>

      <ButtonTodoEdit type="button" onClick={handleClickEdit}>
        <FaEdit />
      </ButtonTodoEdit>
    </TodoItemStyle>
  );
}
