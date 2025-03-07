import React from 'react';
// import { NavLink } from 'react-router';

import Icon from './assets/components/Icon/Icon';
import todosApi from './assets/fetchTodos/FetchTodos';

// import { useState } from 'react';
import reactLogo from './assets/react.svg?react';
import viteLogo from '/vite.svg';
import './App.css';

// import { AiFillApple } from 'react-icons/ai';
// import IconBtn from '/icon.svg';

// import initialTodos from './todos.json';

import Painting from './assets/components/Painting/Painting';
import Details from './assets/Details';
import Panel from './assets/Panel';
import ColorPicker from './assets/components/ColorPicker/ColorPicker';
import Counter from './assets/components/Counter/Counter';
import Dropdown from './assets/components/Dropdown/Dropdown';
import Todolist from './assets/components/Todolist/Todolist';
import Form from './assets/components/Form/Form';
import TodoEditor from './assets/components/TodoEditor/TodoEditor';
import Filter from './assets/components/Filter/Filter';
import Layout from './assets/components/layout/Layout';

import Modal from './assets/components/Modal/Modal';
import IconButton from './assets/components/IconButton/IconButton';

import ArticlesView from './assets/components/ArticlesView/ArticlesView';

const title = 'Першій досвід';

const colorPickerOptions = [
  { label: 'red', color: '#DE3163' },
  { label: 'blue', color: '#6495ED' },
  { label: 'green', color: '#9FE2BF' },
  { label: 'yellow', color: '#DFFF00' },
];

const styles = {
  container: { width: '1200px', marginleft: 'auto', marginright: 'auto' },
};

const number = [1, 2, 3, 4, 5];

class App extends React.Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidMount() {
    todosApi
      .fetchTodos()
      .then((todos) => this.setState({ todos }))
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  addTodo = (text) => {
    const todoData = { text, completed: false };

    todosApi
      .addTodo(todoData)
      .then((todo) => {
        this.setState(({ todos }) => ({ todos: [...todos, todo] }));
      })
      .catch((error) => console.log(error));
  };

  deleteTodo = (todoId) => {
    todosApi
      .deleteTodo(todoId)
      .then(() => {
        this.setState(({ todos }) => ({
          todos: todos.filter(({ id }) => id !== todoId),
        }));
      })
      .catch((error) => error);
  };

  toggleCompleted = (todoId) => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = {
      completed: !completed,
    };

    todosApi
      .updateTodo(todoId, update)
      .then((updateTodo) => {
        this.setState(({ todos }) => ({
          todos: todos.map((todo) =>
            todo.id === updateTodo.id ? updateTodo : todo
          ),
        }));
      })
      .catch((error) => console.log(error));
  };

  formSubmitData = (data) => {
    console.log(data);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <ul>
          <li>
            <NavLink to="/">App</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink></NavLink>
          </li>
        </ul> */}
        <Layout>
          <IconButton>
            <Icon color={'black'} />
          </IconButton>
          <button type="button" onClick={this.toggleModal}>
            Открыть модалку
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <h1>Привет</h1>
              <p>Hello</p>
              <button type="button" onClick={this.toggleModal}>
                Закрыть
              </button>
            </Modal>
          )}
          <div style={styles.container}>
            <ColorPicker options={colorPickerOptions} />
            <Panel title="Хорошие новости">
              <p>Привет</p>
            </Panel>
            <Panel>
              <p>Пока</p>
              <p>fdfdfdfdfdfdfdf</p>
            </Panel>
            <ul>
              {number.map((num) => (
                <li key={num}>
                  <h2>{num}</h2>
                </li>
              ))}
            </ul>

            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              {/* <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button> */}
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>

            <Painting />
            <Details title={title} />
          </div>
          <Counter initialValue={10} />
          <Dropdown />
          <div>
            <p>Общее количество туду: {totalTodoCount} </p>
            <p>Количество выполенных:{completedTodoCount}</p>
          </div>
          <TodoEditor onSubmitText={this.addTodo} />

          <Filter value={filter} onChange={this.changeFilter} />

          <Todolist
            // todos={todos}
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          <Form onSubmit={this.formSubmitData} />
          <ArticlesView />
        </Layout>
      </>
    );
  }
}

export default App;
