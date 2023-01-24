import React, { useRef, useEffect, useCallback, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import {
  Container,
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
  setIndexState: (currentIndex: number) => void;
  indexState: number;
}
export default function TodoItem({
  index,
  text,
  setTodos,
  indexState,
  setIndexState,
}: ITodo): JSX.Element {
  const $inputEditTodo = useRef<HTMLInputElement>(null);
  const $buttonEditTodoCheck = useRef<HTMLButtonElement>(null);
  const $buttonEditTodo = useRef<HTMLButtonElement>(null);
  const $currentTextTodo = useRef<HTMLParagraphElement>(null);
  const $buttonCheckTodo = useRef<HTMLButtonElement>(null);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const todosLocal: string[] = JSON.parse(
    localStorage.getItem('todosLocal') || '[]',
  );
  const [, updateState] = React.useState<unknown>();
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleClickCheck = (): void => {
    todosLocal.splice(index, 1);
    localStorage.setItem('todosLocal', JSON.stringify(todosLocal));
    setTodos(todosLocal);
  };

  const handleClickEditCheck = (): boolean => {
    if (newTodoText === '') {
      $buttonEditTodoCheck.current!.style.display = 'none';
      $inputEditTodo.current!.style.display = 'none';
      $buttonEditTodo.current!.style.display = 'flex';
      $currentTextTodo.current!.style.display = 'flex';
      $buttonCheckTodo.current!.style.display = 'flex';
      return false;
    }
    todosLocal.splice(indexState, 1, newTodoText);
    localStorage.setItem('todosLocal', JSON.stringify(todosLocal));
    setTodos(todosLocal);
    $buttonEditTodoCheck.current!.style.display = 'none';
    $inputEditTodo.current!.style.display = 'none';
    $buttonEditTodo.current!.style.display = 'flex';
    $currentTextTodo.current!.style.display = 'flex';
    $buttonCheckTodo.current!.style.display = 'flex';
    return true;
  };

  const handleClickEdit = (): void => {
    setIndexState(index);
    setNewTodoText('');
    $buttonEditTodoCheck.current!.style.display = 'flex';
    $inputEditTodo.current!.style.display = 'flex';
    $inputEditTodo.current?.focus();
    $buttonEditTodo.current!.style.display = 'none';
    $currentTextTodo.current!.style.display = 'none';
    $buttonCheckTodo.current!.style.display = 'none';

  };

  return (
    <Container>
      <TextTodo ref={$currentTextTodo}>{text}</TextTodo>
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

      <InputEditTodo
        style={{ display: 'none' }}
        ref={$inputEditTodo}
        defaultValue={$currentTextTodo.current?.innerText}
        type="text"
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter' || e.code === 'NumpadEnter')
            handleClickEditCheck();
        }}
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
    </Container>
  );
}
