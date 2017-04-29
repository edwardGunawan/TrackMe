var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist',() => {
      expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {

    /* create a test data, and then pass the data in, like what the user is doing, so
    do exactly as the flow of the app */
    var todoData = {
      id: 11,
      text: 'test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    /* check whether the completed in todoApp state is really false */
    expect(todoApp.state.todos[0].completed).toBe(false);

    /* toggle it again, and check whether the todoApp really got toggled */
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });

  // test that when toggle from true to false , completedAt get removed
  it('should toggle todos from completed to uncompleted', ()=> {
    var todoData = {
      id: 11,
      text: 'test Features',
      completed: true,
      createdAt: 0,
      completedAt: 2
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    /* check whether the completed in todoApp state is really false */
    expect(todoApp.state.todos[0].completed).toBe(true);

    /* toggle it again, and check whether the todoApp really got toggled */
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist(); // to assert that it is undefined

  });
});