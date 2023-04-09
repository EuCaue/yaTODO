/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import CryptJS from 'crypto-js';
import { FaCheck, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { db, secretKey } from '../../../../services/firebase';
import { useAuthContext } from '../../../../utils/AuthProvider';
import {
  Container,
  ButtonTodoCheck,
  InputEditTodo,
  ButtonTodoEditCheck,
  ButtonTodoEdit,
  TextTodo,
  FormEditTodo
} from './styled';
import { isWhiteSpace } from '../../../../utils/utils';

export interface ITodo {
  index: number;
  todo: string;
  todosDB: string[];
  setTodosDB: (todosArray: string[]) => void;
}
export default function Todos({
  index,
  todo,
  setTodosDB,
  todosDB
}: ITodo): JSX.Element {
  const $inputEditTodo = useRef<HTMLTextAreaElement>(null);
  const $formEditTodo = useRef<HTMLFormElement>(null);
  const $buttonEditTodoCheck = useRef<HTMLButtonElement>(null);
  const $buttonEditTodo = useRef<HTMLButtonElement>(null);
  const $currentTextTodo = useRef<HTMLParagraphElement>(null);
  const $buttonCheckTodo = useRef<HTMLButtonElement>(null);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const [indexState, setIndexState] = useState<number>(0);
  const { user } = useAuthContext();
  const usersCollection = collection(db, '/', 'users');
  const usersDoc = doc(usersCollection, user?.uid);

  const handleClickCheck = async (): Promise<void> => {
    todosDB.splice(index, 1);
    setTodosDB([...todosDB]);
    await updateDoc(usersDoc, {
      todos: CryptJS.AES.encrypt(JSON.stringify(todosDB), secretKey).toString()
    });
  };

  const handleSubmitNewTodo = async (
    event?: React.FormEvent
  ): Promise<void> => {
    event?.preventDefault();
    if (isWhiteSpace(newTodoText)) {
      $buttonEditTodoCheck.current!.style.display = 'none';
      $formEditTodo.current!.style.display = 'none';
      $inputEditTodo.current!.style.display = 'none';
      $buttonEditTodo.current!.style.display = 'flex';
      $currentTextTodo.current!.style.display = 'flex';
      $buttonCheckTodo.current!.style.display = 'flex';
      toast.error('New todo is empty!!');
    } else {
      todosDB.splice(indexState, 1, newTodoText.trim());
      setTodosDB([...todosDB]);
      setNewTodoText('');
      $buttonEditTodoCheck.current!.style.display = 'none';
      $inputEditTodo.current!.style.display = 'none';
      $formEditTodo.current!.style.display = 'none';
      $buttonEditTodo.current!.style.display = 'flex';
      $currentTextTodo.current!.style.display = 'flex';
      $buttonCheckTodo.current!.style.display = 'flex';
      await updateDoc(usersDoc, {
        todos: CryptJS.AES.encrypt(
          JSON.stringify(todosDB),
          secretKey
        ).toString()
      });
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
          style={{ display: 'none' }}
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
