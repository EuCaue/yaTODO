import React, {
  FormEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  Form,
  InputTodo,
  SubmitBtn,
  TodoFlexWrapper,
} from './styled';
import TodoItem from '../TodoItem';

export default function Todo(): JSX.Element {
  const todosLocal = JSON.parse(localStorage.getItem('todosss') || '[]');
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>(todosLocal || []);
  const [, updateState] = React.useState<unknown>();
  const forceUpdate = useCallback(() => updateState({}), []);
  const inputTodo = useRef<HTMLInputElement>(null);

  function handleSubmit(event?: FormEvent): void {
    event?.preventDefault();
    setTodos([todo, ...todos]);
    if (inputTodo.current !== null) {
      inputTodo.current.value = '';
      inputTodo.current.focus();
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTodo(event.target.value);
  }
  const handleKeypress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.code === '13') handleSubmit();
  };
  useEffect(() => {
    localStorage.setItem('todosss', JSON.stringify(todos));
    forceUpdate();
  }, [forceUpdate, todos]);

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)} id="formTodo">
        <InputTodo
          placeholder='"Pet the cat"'
          required
          form="formTodo"
          onKeyDown={(e) => handleKeypress(e)}
          onChange={(e) => handleChange(e)}
          ref={inputTodo}
        />
        <SubmitBtn type="submit">
          <FaPlus size={40} />
        </SubmitBtn>
      </Form>
      <TodoFlexWrapper>
        {todosLocal.map((todoText: string, index: number): JSX.Element => {
          return (
            <TodoItem
              text={todoText}
              index={index}
              setTodos={setTodos}
              key={uuidv4()}
            />
          );
        })}
      </TodoFlexWrapper>
    </Container>
  );
}
