/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import {
  Container,
  ButtonTodoCheck,
  InputEditTodo,
  ButtonTodoEditCheck,
  ButtonTodoEdit,
  TextTodo,
  FormEditTodo,
} from './styled';

export interface ITodo {
  index: number;
  todo: string;
  indexState: number;
  setTodos: (todosArray: string[]) => void;
  setIndexState: (currentIndex: number) => void;
}
export default function Todos({
  index,
  todo,
  setTodos,
  indexState,
  setIndexState,
}: ITodo): JSX.Element {
  const $inputEditTodo = useRef<HTMLInputElement>(null);
  const $formEditTodo = useRef<HTMLFormElement>(null);
  const $buttonEditTodoCheck = useRef<HTMLButtonElement>(null);
  const $buttonEditTodo = useRef<HTMLButtonElement>(null);
  const $currentTextTodo = useRef<HTMLParagraphElement>(null);
  const $buttonCheckTodo = useRef<HTMLButtonElement>(null);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const todosLocal: string[] = JSON.parse(
    localStorage.getItem('todosLocal') || '[]',
  );

  const handleClickCheck = (): void => {
    todosLocal.splice(index, 1);
    setTodos(todosLocal);
  };

  const handleSubmitNewTodo = (event?: React.FormEvent): void => {
    event?.preventDefault();
    if (newTodoText === '' || newTodoText === ' ') {
      $buttonEditTodoCheck.current!.style.display = 'none';
      $formEditTodo.current!.style.display = 'none';
      $inputEditTodo.current!.style.display = 'none';
      $buttonEditTodo.current!.style.display = 'flex';
      $currentTextTodo.current!.style.display = 'flex';
      $buttonCheckTodo.current!.style.display = 'flex';
    } else {
      todosLocal.splice(indexState, 1, newTodoText);
      setNewTodoText('');
      setTodos(todosLocal);

      $buttonEditTodoCheck.current!.style.display = 'none';
      $inputEditTodo.current!.style.display = 'none';
      $formEditTodo.current!.style.display = 'none';
      $buttonEditTodo.current!.style.display = 'flex';
      $currentTextTodo.current!.style.display = 'flex';
      $buttonCheckTodo.current!.style.display = 'flex';
    }
  };

  const handleClickEdit = (): void => {
    setIndexState(index);
    $buttonEditTodoCheck.current!.style.display = 'flex';
    $formEditTodo.current!.style.display = 'flex';
    $inputEditTodo.current!.style.display = 'flex';
    $inputEditTodo.current!.value = todo;
    $inputEditTodo.current?.focus();
    $inputEditTodo.current!.selectionStart =
      $inputEditTodo.current!.value.length;
    $inputEditTodo.current!.selectionEnd = $inputEditTodo.current!.value.length;
    $buttonEditTodo.current!.style.display = 'none';
    $currentTextTodo.current!.style.display = 'none';
    $buttonCheckTodo.current!.style.display = 'none';
  };

  return (
    <Container>
      <TextTodo ref={$currentTextTodo}>{todo}</TextTodo>
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

      <FormEditTodo
        style={{ display: 'none' }}
        ref={$formEditTodo}
        onSubmit={(e) => handleSubmitNewTodo(e)}
      >
        <InputEditTodo
          ref={$inputEditTodo}
          type="text"
          style={{ display: 'none' }}
          // value={}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter')
              handleSubmitNewTodo();
          }}
          required
        />
        <ButtonTodoEditCheck
          ref={$buttonEditTodoCheck}
          style={{ display: 'none' }}
          type="submit"
          onClick={handleSubmitNewTodo}
        >
          <FaEdit />
        </ButtonTodoEditCheck>
      </FormEditTodo>
    </Container>
  );
}
