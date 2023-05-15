import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import CryptJS from 'crypto-js';
import { FaCheck, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { db, secretKey } from '../../../../services/firebase';
import { useAuthContext } from '../../../../utils/AuthProvider';
import { Container, ButtonTodoCheck, ButtonTodoEdit, TextTodo } from './styled';
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
  const $buttonEditTodo = useRef<HTMLButtonElement>(null);
  const $currentTextTodo = useRef<HTMLParagraphElement>(null);
  const $buttonCheckTodo = useRef<HTMLButtonElement>(null);
  const [indexState, setIndexState] = useState<number>(0);
  const { user } = useAuthContext();
  const usersCollection = collection(db, '/', 'users');
  const usersDoc = doc(usersCollection, user?.uid);

  const handleCheckTodo = async (): Promise<void> => {
    todosDB.splice(index, 1);
    setTodosDB([...todosDB]);
    await updateDoc(usersDoc, {
      todos: CryptJS.AES.encrypt(JSON.stringify(todosDB), secretKey).toString()
    });
  };

  const handleUpdateTodo = async (): Promise<void> => {
    if (
      $currentTextTodo.current &&
      $currentTextTodo.current.textContent !== null
    ) {
      if ($currentTextTodo.current.contentEditable === 'inherit') {
        setIndexState(index);
        $currentTextTodo.current.contentEditable = 'true';
        $currentTextTodo.current.focus();
      } else {
        if (isWhiteSpace($currentTextTodo.current.textContent.trim())) {
          toast.error('New todo is empty!!');
          $currentTextTodo.current.textContent = '';
          $currentTextTodo.current.focus();
          return;
        }
        $currentTextTodo.current.contentEditable = 'inherit';
        todosDB.splice(indexState, 1, $currentTextTodo.current.innerText);
        setTodosDB([...todosDB]);
        await updateDoc(usersDoc, {
          todos: CryptJS.AES.encrypt(
            JSON.stringify(todosDB),
            secretKey
          ).toString()
        });
      }
    }
  };

  return (
    <Container>
      <TextTodo
        onKeyDown={(e) => {
          if ((e.code === 'Enter' || e.code === 'NumpadEnter') && !e.shiftKey)
            handleUpdateTodo();
        }}
        ref={$currentTextTodo}
        title={todo}
      >
        {todo}
      </TextTodo>

      <ButtonTodoCheck
        type="button"
        onClick={handleCheckTodo}
        ref={$buttonCheckTodo}
        title="Click Here to mark the TODO done!"
      >
        <FaCheck />
      </ButtonTodoCheck>

      <ButtonTodoEdit
        ref={$buttonEditTodo}
        type="button"
        onClick={handleUpdateTodo}
        title="Click Here to edit the TODO!"
      >
        <FaEdit />
      </ButtonTodoEdit>
    </Container>
  );
}
