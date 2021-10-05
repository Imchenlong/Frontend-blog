/*
 * @Author: chenlong
 * @LastEditors: chenlong
 * @Date: 2021-10-05 21:09:57
 * @LastEditTime: 2021-10-05 21:17:24
 * @FilePath: /Frontend-blog/React/react-flux-todo/src/components/List/index.js
 */
import React,{memo,useState} from "react";
import './index.css'
import Item from '../Item'
import todoStore from '../../stores/todoStore'
function List(){
  const todosArr = useState(todoStore.getList)
  const todos = todosArr[0]
  const todoItems = todos.map( todo =>{
    return <Item key={todo.id} {...todo}/>
  })
  return (
    <ul className="todo-main">
    {
      todoItems
    }
  </ul>
  )
}
export default memo(List)