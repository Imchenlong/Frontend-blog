/*
 * @Author: chenlong
 * @LastEditors: chenlong
 * @Date: 2021-10-05 21:06:22
 * @LastEditTime: 2021-10-05 21:06:22
 * @FilePath: /Frontend-blog/React/react-flux-todo/src/stores/todoStore.js
 */
import {EventEmitter} from 'events'
const _store = {
  todos: [
    {id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
  ]
}
const todoStore = Object.assign({},EventEmitter.prototype,{
  getList: function(){
    return _store.todos
  }
})

export default todoStore