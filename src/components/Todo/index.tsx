import React, { FormEvent, useState, useCallback, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  Form,
  TextAreaTodo,
  SubmitBtn,
  TodoFlexWrapper,
} from './styled';
import TodoItem from '../TodoItem';

export default function Todo(): JSX.Element {
  const todosLocal = JSON.parse(localStorage.getItem('todosss') || '[]');
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>(todosLocal || []);
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    setTodos([todo, ...todos]);
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setTodo(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem('todosss', JSON.stringify(todos));
    forceUpdate();
  }, [forceUpdate, todos]);

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)} id="formTodo">
        <TextAreaTodo
          placeholder='"Pet the cat"'
          required
          form="formTodo"
          onChange={(e) => handleChange(e)}
        />
        <SubmitBtn type="submit">
          <FaPlus size={40} />
        </SubmitBtn>
      </Form>
      <TodoFlexWrapper>
        {todosLocal.map((todoText: string, index: number): JSX.Element => {
          return (
            <div key={uuidv4()}>
              <TodoItem text={todoText} index={index} setTodos={setTodos} />
            </div>
          );
        })}
      </TodoFlexWrapper>
    </Container>
  );
}
