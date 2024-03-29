import React, {useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import {useSelector } from 'react-redux';
import { useAdd } from './hooks/useAdd';
import { useDelete } from './hooks/useDelete';
import { useComplete } from './hooks/useComplete';
import { useDeleteCompleted } from './hooks/useDeleteCompleted';
import Test from './test';
function App() {
	const [newTitle,setNewTitle, newDescription,setNewDescription,handleAddTodo,allTodos]=useAdd();
	const [handleComplete]=useComplete();
	const [handleDeleteTodo]=useDelete();
	const [handleDeleteCompletedTodo]=useDeleteCompleted();
	const [isCompleteScreen,setIsCompleteScreen]=useState('');
	const completedTodos=useSelector(state=>state.completedtodos)

  	return (
    	<div className="App">
      		<h1>WHAT TO DO?</h1>
      		<div  className='todo-wrapper'>
        		<div className='todo-input'>
					<form>
						<div className='input-item'>
							<input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} required="required"/>
							<p>Title</p>
						</div>
						<div className='input-item'>
							<input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} required="required"/>
							<p>Description</p>
						</div>
            			<button type='submit' onClick={handleAddTodo} className='primaryBtn'>Add Task</button>
					</form>
        		</div>
				<Test/>
				{/* <div className='tab-area'>
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
				</div> */}
      		</div>
    	</div>
  	);
}

export default App;
