import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
  }

  render() {
    var renderItems = this.props.todos.map(todo => 
      <li key={todo.id}>
        <span>{todo.task}</span>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </li>
    );

    return (
      <div>
        <ul>
         {renderItems}
        </ul>
      </div>
   
    )
  }

  onEditClick() {
   this.setState({
    isEditing: true
   })
  }
}


export default List
