import {useEffect ,useState} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { addTodo} from '../redux/actions';

function useAdd() {
    const dispatch=useDispatch();
    const [newTitle,setNewTitle]=useState('');
	const [newDescription,setNewDescription]=useState('');
	const allTodos=useSelector(state=>state.todos);

    useEffect(()=>{
		const savedTodo=JSON.parse(localStorage.getItem('todolist'));
		const savedCompletedTodo=JSON.parse(localStorage.getItem('completedTodo'));
		if(savedTodo){
			dispatch({type:'ADD_TODO',payload:savedTodo})
		}
		if(savedCompletedTodo){
			dispatch({type:'COMPLETE_TODO',payload:savedCompletedTodo})
		}
	},[dispatch]);

    const handleAddTodo=(event)=>{
		event.preventDefault();
		if (newTitle.trim() === '' || newDescription.trim() === '') {
			alert('Please provide both a title and a description for the todo.');
			return;
		}
		let newTodoItem={
			title:newTitle,
			description:newDescription
		}
		dispatch(addTodo(newTodoItem));
		const updatedTodos = [...allTodos, newTodoItem];
		localStorage.setItem('todolist',JSON.stringify(updatedTodos));
		setNewTitle('');
		setNewDescription('');
	};
    return [newTitle,setNewTitle, newDescription,setNewDescription,handleAddTodo,allTodos]

}

export {useAdd}
