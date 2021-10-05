/*
 * @Author: chenlong
 * @LastEditors: chenlong
 * @Date: 2021-10-05 20:52:32
 * @LastEditTime: 2021-10-05 22:20:15
 * @FilePath: /Frontend-blog/React/react-flux-todo/src/components/Item/index.js
 */
import React,{memo,useState} from "react"
import './index.css'
function Item(props) {
  const [mouse,setMouse] = useState(false)
  const handleMouse = (isMouse) => {return ()=>{
    setMouse(isMouse)
  }}
  /**
   * 删除一个todo的回调
   * @param {任务id}} id
   */
  // const handleDelete = (id)=>{
	// 	if(window.confirm('确定删除吗？')){
			
	// 	}
	// }
  /**
   * 
   * @param {任务id} id 
   * @returns 
   */
  const handleCheck = (id) => {
    return (event) =>{
      console.log(event.target.checked)
    }
  }
  const {id,name,done} = props
  return (
    <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
				<label>
					<input type="checkbox" checked={done} />
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
		</li>
  )
}

export default memo(Item)