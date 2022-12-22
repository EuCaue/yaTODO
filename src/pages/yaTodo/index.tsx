import React from 'react';
import Header from '../../components/Header';
import Todo from '../../components/Todo';
import { Main } from './styled';

export default function YaTodo() {
  return (
    <>
      <Header />
      <Main>
        <Todo />
      </Main>
    </>
  );
}
