/*
 * @Author: chenlong
 * @LastEditors: chenlong
 * @Date: 2021-10-05 20:28:20
 * @LastEditTime: 2021-10-05 20:37:00
 * @FilePath: /Frontend-blog/React/react-flux-todo/src/components/Header/index.js
 */
import './index.css'

import React ,{ memo } from 'react'

function Header() {
  const handleKeyUp = (event) =>{
    const {keyCode,target} = event
    console.log(keyCode,target.value)
  }
  return (
    <div className="todo-header">
				<input onKeyUp={handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
		</div>
  )
}
export default memo(Header)  