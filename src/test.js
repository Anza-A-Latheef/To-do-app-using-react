import React, {useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import {useSelector } from 'react-redux';
import { useAdd} from './hooks/useAdd';
import { useDelete } from './hooks/useDelete';
import { useComplete } from './hooks/useComplete';
import { useDeleteCompleted } from './hooks/useDeleteCompleted';


const Test = () => {
    const [allTodos]=useAdd();
	const [handleComplete]=useComplete();
	const [handleDeleteTodo]=useDelete();
	const [handleDeleteCompletedTodo]=useDeleteCompleted();
	const [isCompleteScreen,setIsCompleteScreen]=useState('');
	const completedTodos=useSelector(state=>state.completedtodos)

  return (
      		<>
				<div className='tab-area'>
					<button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>To be Done</button>
					<button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`}  onClick={()=>setIsCompleteScreen(true)}>Already Done</button>
				</div>
				<div className='todo-list'>
					{isCompleteScreen===false && allTodos.map((item,index)=>{
						return(
							<div className='list-item' key={index}>
								<div>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
								<div>
									<MdDelete className='icon' title="Delete?" onClick={()=>handleDeleteTodo(index)}/>
									<GiCheckMark className='check-icon' title='Completed?' onClick={()=>handleComplete(index)}/>
								</div>
							</div>
						)
					})}
					{isCompleteScreen===true && completedTodos.map((item,index)=>{
						return(
							<div className='list-item' key={index}>
								<div>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<p><small>Completed on: {item.completedOn}</small></p>
								</div>
								<div>
									<MdDelete className='icon' title="Delete?" onClick={()=>handleDeleteCompletedTodo(index)}/>
								</div>
							</div>
						)
					})}
				</div>
      		</>
  )
}

export default Test
