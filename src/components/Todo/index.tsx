import React, {
  FormEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { FaPlus, FaRegTrashAlt, FaExchangeAlt } from 'react-icons/fa';

import {
  Container,
  DeleteButton,
  Form,
  InputTodo,
  SubmitBtn,
  TodoFlexWrapper,
  ButtonExchange,
  PopUpContainer,
  TextPopUp,
  ButtonDeleteCancel,
  ButtonDeleteConfirm,
  SpanPopUp,
} from './styled';
import TodoItem from '../TodoItem';

export default function Todo(): JSX.Element {
  const todosLocal = JSON.parse(localStorage.getItem('todosLocal') || '[]');
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>(todosLocal || []);
  const [, updateState] = React.useState<unknown>();
  const forceUpdate = useCallback(() => updateState({}), []);
  const inputTodo = useRef<HTMLInputElement>(null);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const [indexState, setIndexState] = useState<number>(0);
  const [reversedList, setReversedList] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);


  function handleSubmit(event?: FormEvent): void {
    event?.preventDefault();
    setTodos([...todos, todo]);
    if (inputTodo.current !== null) {
      inputTodo.current.value = '';
      inputTodo.current.focus();
    }
  }

  function handleClickDeleteConfirm(): void {
    todosLocal.splice(0, todosLocal.length);
    setTodos(todosLocal);
    setShowPopUp(!showPopUp)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTodo(event.target.value);
  }

  function handleKeypress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.code === '13')
      handleSubmit();
  }

  useEffect(() => {
    localStorage.setItem('todosLocal', JSON.stringify(todos));
    forceUpdate();
  }, [forceUpdate, todos]);

  const todosMap: JSX.Element = todosLocal.map(
    (todoText: string, index: number): JSX.Element => {
      return (
        // eslint-disable-next-line react/jsx-key
        <TodoItem
          text={todoText}
          index={index}
          setTodos={setTodos}
          setNewTodoText={setNewTodoText}
          newTodoText={newTodoText}
          setIndexState={setIndexState}
          indexState={indexState}
        />
      );
    },
  );

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)} id="formTodo">
        <DeleteButton type="button" onClick={() => setShowPopUp(!showPopUp)}>
          <small>Delete all tasks</small>
          <FaRegTrashAlt size={34} />
        </DeleteButton>

        <PopUpContainer style={{ display: showPopUp ? "flex" : "none" }}>
          <TextPopUp>
            Do you want to delete all todos?
          </TextPopUp>
          <SpanPopUp>
            <ButtonDeleteConfirm type="button" onClick={() => handleClickDeleteConfirm()}>OK </ButtonDeleteConfirm>
            <ButtonDeleteCancel type="button" onClick={() => setShowPopUp(!showPopUp)}>Cancel</ButtonDeleteCancel>
          </SpanPopUp>

        </PopUpContainer>

        <InputTodo
          placeholder='"Pet the cat"'
          required
          form="formTodo"
          onKeyDown={(e) => handleKeypress(e)}
          onChange={(e) => handleChange(e)}
          ref={inputTodo}
        />
        <SubmitBtn type="submit">
          <FaPlus size={34} />
        </SubmitBtn>
      </Form>
      <TodoFlexWrapper reversedList={reversedList}>{todosMap}</TodoFlexWrapper>
      <ButtonExchange
        type="button"
        onClick={() => setReversedList(!reversedList)}
      >
        <FaExchangeAlt size={34} />
      </ButtonExchange>
    </Container >
  );
}
