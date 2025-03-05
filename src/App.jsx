import React from 'react';
import shortid from 'shortid';
import Icon from './assets/components/Icon/Icon';

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

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  addTodo = (text) => {
    console.log(text);

    const todo = { id: shortid.generate(), text, completed: false };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
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

  componentDidMount() {
    console.log(' componentDidMount');

    const todos = localStorage.getItem('todos');
    const parseTodos = JSON.parse(todos);

    if (parseTodos) {
      this.setState({ todos: parseTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Layout>
          {/* <IconBtn /> */}
          <IconButton>
            <Icon color={'black'} />
            {/* <svg className="Icon" width="100" height="100" fill="#40E0D0">
              <use href={IconBtn}></use>
            </svg> */}
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
        </Layout>
      </>
    );
  }
}

export default App;
