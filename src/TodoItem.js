import React, { Component } from 'react';
import './TodoItem.css'
export default class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        <input type="checkbox" checked={this.props.todo.status === 'completed'}
          onChange={this.toggle.bind(this)} />
        <span className="title">{this.props.todo.title}</span>
        <button onClick={this.delete.bind(this)}>删除</button>
      </div>
    )
  }

  //设置待办完成 未完成
  toggle(e) {
    this.props.onToggle(e, this.props.todo)
  }

  //删除待办
  delete(e) {
    this.props.onDelete(e, this.props.todo)
  }
}