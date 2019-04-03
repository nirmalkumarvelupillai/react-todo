import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddTodo from '../containers/AddTodo'
import { Container } from 'reactstrap';
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
library.add(faTrash);

const App = () => (
  <Container>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
)

export default App;
