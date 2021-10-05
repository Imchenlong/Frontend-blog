/*
 * @Author: chenlong
 * @LastEditors: chenlong
 * @Date: 2021-10-05 20:34:44
 * @LastEditTime: 2021-10-05 21:10:20
 * @FilePath: /Frontend-blog/React/react-flux-todo/src/App.js
 */
import Header from './components/Header'
import List  from './components/List'
import './App.css';

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <List></List>
      </div>
    </div>
  );
}

export default App;
