import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FaPlus, FaRegTrashAlt, FaExchangeAlt } from 'react-icons/fa';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import CryptJS from 'crypto-js';

import { toast } from 'react-toastify';
import {
  Container,
  DeleteButton,
  Form,
  InputTodo,
  SubmitBtn,
  TodoFlexWrapper,
  ButtonReverse
} from './styled';
import Todo from '../Todo';
import { db, secretKey } from '../../../../services/firebase';
import { useAuthContext } from '../../../../utils/AuthProvider';
import Loading from '../../../../components/Loading';
import { isWhiteSpace } from '../../../../utils/utils';
import PopUp from '../../../../components/PopUp';

type TodosDB = string[];

export default function Todos(): JSX.Element {
  const { user } = useAuthContext();
  const usersCollection = collection(db, '/', 'users');
  const usersDoc = doc(usersCollection, user?.uid);
  const [todosDB, setTodosDB] = useState<TodosDB>([]);
  const [todo, setTodo] = useState<string>('');
  const [, updateState] = React.useState<unknown>();
  const [reversedList, setReversedList] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const forceUpdate = useCallback(() => updateState({}), []);
  const $inputTodo = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    if (isWhiteSpace(todo)) {
      toast.error('Todo Input is empty!');
      $inputTodo.current!.value = '';
      return;
    }

    todosDB.push(todo.trim());
    forceUpdate();
    if ($inputTodo.current) {
      $inputTodo.current!.value = '';
      $inputTodo.current?.focus();
    }
    await updateDoc(usersDoc, {
      todos: CryptJS.AES.encrypt(JSON.stringify(todosDB), secretKey).toString()
    });
  }

  const handleClickDeleteConfirm = async (): Promise<void> => {
    setLoading(true);
    todosDB.splice(0, todosDB.length);
    await updateDoc(usersDoc, { todos: todosDB });
    setShowPopUp(!showPopUp);
    setLoading(false);
  };

  useEffect(() => {
    if (!hasRun) {
      const getTodos = async () => {
        const response = await getDoc(usersDoc);
        const todosResponse = JSON.parse(
          CryptJS.AES.decrypt(response.data()?.todos, secretKey).toString(
            CryptJS.enc.Utf8
          )
        );
        setTodosDB(todosResponse);
      };
      getTodos();
      setHasRun(true);
    }
  }, [todosDB.length, usersDoc, hasRun]);

  const todosMap: JSX.Element[] = todosDB.map(
    (todoText: string, index: number): JSX.Element => {
      return (
        <Todo
          todo={todoText}
          index={index}
          key={CryptJS.lib.WordArray.random(4).words[0]}
          setTodosDB={setTodosDB}
          todosDB={todosDB}
        />
      );
    }
  );

  return (
    <Container>
      <Form
        onSubmit={(e) => handleSubmit(e)}
        id="formTodo"
      >
        <DeleteButton
          type="button"
          title="Delete all todos"
          onClick={() => setShowPopUp(!showPopUp)}
        >
          <FaRegTrashAlt size={34} />
        </DeleteButton>
        <InputTodo
          placeholder='"Pet the cat"'
          title="Type a todo here"
          autoFocus
          required
          form="formTodo"
          onChange={(e) => setTodo(e.target.value)}
          ref={$inputTodo}
        />
        <SubmitBtn type="submit">
          <FaPlus size={34} />
        </SubmitBtn>
      </Form>

      <PopUp
        setShowPopUp={setShowPopUp}
        showPopUp={showPopUp}
        handleConfirm={handleClickDeleteConfirm}
        arrayText={['Do you want to delete all todos?']}
      />

      <TodoFlexWrapper reversedList={reversedList}>{todosMap}</TodoFlexWrapper>

      <ButtonReverse
        type="button"
        onClick={() => setReversedList(!reversedList)}
        title="Reverse the todos order?"
        reversedList={reversedList}
      >
        <FaExchangeAlt size={34} />
      </ButtonReverse>
      <Loading isLoading={loading} />
    </Container>
  );
}
