var React = require('react');
var PropTypes = React.PropTypes;
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: "Walk the dog"
        }, {
          id: uuid(),
          text: 'Clean the yard'
        },{
          id: uuid(),
          text: 'Leave mail on porch'
        },{
          id:uuid(),
          text: 'Play Video games'
        }
      ]
    };
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:uuid(), // generate random id, so you don't really need to have to keep track on id
          text:text
        }
      ]
    });
  },

  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo} />
      </div>
    );
  }

});

module.exports = TodoApp;
