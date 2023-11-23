import { useEffect, useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

function App() {
	const [isCompleteScreen,setIsCompleteScreen]=useState(false);
	const [allTodos,setTodos]=useState([]);
	const [newTitle,setNewTitle]=useState("");
	const [newDescription,setNewDescription]=useState("");
	const [completedTodos,setCompletedTodos]=useState([]);
	const handleAddTodo=(event)=>{
		event.preventDefault();
		let newTodoItem={
			title:newTitle,
			description:newDescription
		}
		let updatedTodoArr=[...allTodos];
		updatedTodoArr.push(newTodoItem);
		setTodos(updatedTodoArr);
		localStorage.setItem('todolist',JSON.stringify(updatedTodoArr));
		setNewTitle('');
		setNewDescription('');
	};
	const handleDeleteTodo=(index)=>{
		let reducedTodo=[...allTodos];
		reducedTodo.splice(index,1);
		localStorage.setItem('todolist',JSON.stringify(reducedTodo));
		setTodos(reducedTodo);
	};
	const handleComplete=(index)=>{
		let now=new Date();
		let dd=now.getDate();
		let mm=now.getMonth();
		let yyyy=now.getFullYear();
		let h=now.getHours();
		let m=now.getMinutes();
		let s=now.getSeconds();
		let completedOn = dd + '/' + mm + '/' + yyyy + ' at' + h +':' + m +':' + s;
		let filteredItem ={
			...allTodos[index],
			completedOn:completedOn
		};

		let updatedCompletedArr =[...completedTodos];
		updatedCompletedArr.push(filteredItem);
		setCompletedTodos(updatedCompletedArr);
		handleDeleteTodo(index);
		localStorage.setItem('completedTodos',JSON.stringify(updatedCompletedArr));
	};

	const handleDeleteCompletedTodo = (index)=>{
		let reducedTodo=[...completedTodos];
		reducedTodo.splice(index,1);
		localStorage.setItem('completedTodos',JSON.stringify(reducedTodo));
		setCompletedTodos(reducedTodo);
	};

	useEffect(()=>{
		let savedTodo=JSON.parse(localStorage.getItem('todolist'));
		let savedCompletedTodo=JSON.parse(localStorage.getItem('completedTodo'));
		if(savedTodo){
			setTodos(savedTodo);
		}
		if(savedCompletedTodo){
			setCompletedTodos(savedCompletedTodo);
		}
	},[]);

  	return (
    	<div className="App">
      		<h1>What TO DO?</h1>
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
      		</div>
    	</div>
  	);
}

export default App;
