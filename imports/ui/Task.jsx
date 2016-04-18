import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from './actions';
import store from './store';

// Task component - represents a single todo item
export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      text: props.task.text,
    }
    this.submit = this.submit.bind(this)
  }

  clickHandle() {
    this.setState({edit: !this.state.edit})
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  deleteTask() {
    deleteTask(this.props.task);
  }

  submit() {
    console.log('updating Task');
    // this.props.updateTask({
    //   _id: this.props.task._id,
    //   text: this.state.text,
    // });

    store.dispatch(updateTask({
      _id: this.props.task._id,
      text: this.state.text,
    }));

  }

  render() {
    return (
      <li>
        <button onClick={this.deleteTask.bind(this)} >delete</button>
        <div onClick={this.clickHandle.bind(this)}>{this.props.task.text}</div>
        {
          this.state.edit && <div>
            <input ref="text" defaultValue={this.props.task.text} onChange={this.handleChange.bind(this)} />
            {this.state.text}
            <button onClick={this.submit}>Save</button>
          </div>
        }
      </li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};

const mapDispatchToProps = (state) => {
  // console.log('mapDispatchToProps@Task', state);
  return {
    updateTask: updateTask,
  };
};

export default connect(null, mapDispatchToProps)(Task);
