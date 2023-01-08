import React, { useRef } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import {
  TodoItemStyle,
  ButtonTodoCheck,
  InputEditTodo,
  ButtonTodoEditCheck,
  ButtonTodoEdit,
  TextTodo,
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
  const $buttonCheckTodo = useRef<HTMLButtonElement>(null);
  const todosLocal: string[] = JSON.parse(
    localStorage.getItem('todosss') || '[]',
  );

  const handleClickCheck = (): void => {
    todosLocal.splice(index, 1);
    localStorage.setItem('todosss', JSON.stringify(todosLocal));
    setTodos(todosLocal);
  };

  const handleClickEditCheck = (): void | boolean => {
    // TODO: verify it's a new value is empty or not
    if (newTodoText === '') {
      if (
        $buttonEditTodo.current !== null &&
        $buttonEditTodoCheck.current !== null &&
        $inputEditTodo.current !== null &&
        $currentTextTodo.current !== null &&
        $buttonCheckTodo.current !== null
      ) {
        $buttonEditTodoCheck.current.style.display = 'none';
        $inputEditTodo.current.style.display = 'none';
        $buttonEditTodo.current.style.display = 'flex';
        $currentTextTodo.current.style.display = 'flex';
        $buttonCheckTodo.current.style.display = 'flex';
        $inputEditTodo.current.value = text;
      }
      return false;
    }
    todosLocal.splice(indexState, 1, newTodoText);
    localStorage.setItem('todosss', JSON.stringify(todosLocal));
    setTodos(todosLocal);
    if (
      $buttonEditTodo.current !== null &&
      $buttonEditTodoCheck.current !== null &&
      $inputEditTodo.current !== null &&
      $currentTextTodo.current !== null &&
      $buttonCheckTodo.current !== null
    ) {
      $buttonEditTodoCheck.current.style.display = 'none';
      $inputEditTodo.current.style.display = 'none';
      $buttonEditTodo.current.style.display = 'flex';
      $currentTextTodo.current.style.display = 'flex';
      $buttonCheckTodo.current.style.display = 'flex';
    }
    return true;
  };

  const handleClickEdit = () => {
    if (
      $buttonEditTodo.current !== null &&
      $buttonEditTodoCheck.current !== null &&
      $inputEditTodo.current !== null &&
      $currentTextTodo.current !== null &&
      $buttonCheckTodo.current !== null
    ) {
      setIndexState(index);
      setNewTodoText('');
      $buttonEditTodoCheck.current.style.display = 'flex';
      $inputEditTodo.current.style.display = 'flex';
      $inputEditTodo.current.focus();
      $buttonEditTodo.current.style.display = 'none';
      $currentTextTodo.current.style.display = 'none';
      $buttonCheckTodo.current.style.display = 'none';
    }
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
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
      <ButtonTodoEditCheck
        ref={$buttonEditTodoCheck}
        style={{ display: 'none' }}
        type="button"
        onClick={handleClickEditCheck}
      >
        <FaEdit />
      </ButtonTodoEditCheck>
      <ButtonTodoCheck
        type="button"
        onClick={handleClickCheck}
        ref={$buttonCheckTodo}
      >
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
