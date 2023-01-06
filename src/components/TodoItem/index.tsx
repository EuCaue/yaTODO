import React, { FormEvent, useEffect, useRef } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import {
  TodoItemStyle,
  ButtonTodoCheck,
  InputEditTodo,
  ButtonTodoEdit,
  TextTodo,
  FormNewTodo,
} from './styled';

export interface ITodo {
  index: number;
  text: string;
  setTodos: (todosArray: string[]) => void;
  newTodoText: string;
  setNewTodoText: (newTodoString: string) => void;
  setIndexState: (currentIndex: number) => void;
  indexState: number;
}
export default function TodoItem({
  index,
  text,
  setTodos,
  setNewTodoText,
  newTodoText,
  indexState,
  setIndexState,
}: ITodo): JSX.Element {
  const $inputEditTodo = useRef<HTMLInputElement>(null);
  const $buttonEditTodoCheck = useRef<HTMLButtonElement>(null);
  const $buttonEditTodo = useRef<HTMLButtonElement>(null);
  const $currentTextTodo = useRef<HTMLParagraphElement>(null);

  const todosLocal: string[] = JSON.parse(
    localStorage.getItem('todosss') || '[]',
  );

  const handleClickCheck = (): void => {
    todosLocal.splice(index, 1);
    localStorage.setItem('todosss', JSON.stringify(todosLocal));
    setTodos(todosLocal);
  };

  const handleClickEditCheck = (): void => {
    todosLocal.splice(indexState, 1, newTodoText);
    localStorage.setItem('todosss', JSON.stringify(todosLocal));
    setTodos(todosLocal);
    if (
      $buttonEditTodo.current !== null &&
      $buttonEditTodoCheck.current !== null &&
      $inputEditTodo.current !== null &&
      $currentTextTodo.current !== null
    ) {
      $buttonEditTodoCheck.current.style.display = 'none';
      $inputEditTodo.current.style.display = 'none';
      $buttonEditTodo.current.style.display = 'flex';
      $currentTextTodo.current.style.display = 'flex';
    }
  };

  const handleClickEdit = () => {
    if (
      $buttonEditTodo.current !== null &&
      $buttonEditTodoCheck.current !== null &&
      $inputEditTodo.current !== null &&
      $currentTextTodo.current !== null
    ) {
      setIndexState(index);
      $buttonEditTodoCheck.current.style.display = 'flex';
      $inputEditTodo.current.style.display = 'flex';
      $inputEditTodo.current.focus();
      $buttonEditTodo.current.style.display = 'none';
      $currentTextTodo.current.style.display = 'none';
    }
  };

  const handleEnter = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.keyCode === 13) handleClickEditCheck();
  };

  return (
    <TodoItemStyle>
      <TextTodo ref={$currentTextTodo}>{text}</TextTodo>
      <InputEditTodo
        style={{ display: 'none' }}
        ref={$inputEditTodo}
        defaultValue={text}
        type="text"
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyUp={(e) => handleEnter(e)}
        required
      />
      <ButtonTodoEdit
        ref={$buttonEditTodoCheck}
        style={{ display: 'none' }}
        type="button"
        onClick={handleClickEditCheck}
      >
        <FaEdit />
      </ButtonTodoEdit>

      <ButtonTodoCheck type="button" onClick={handleClickCheck}>
        <FaCheck />
      </ButtonTodoCheck>

      <ButtonTodoEdit
        ref={$buttonEditTodo}
        type="button"
        onClick={handleClickEdit}
      >
        <FaEdit />
      </ButtonTodoEdit>
    </TodoItemStyle>
  );
}
