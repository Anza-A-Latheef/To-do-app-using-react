import {useEffect} from "react";
import {useDispatch} from 'react-redux';
import { completeTodo} from '../redux/actions';

function useComplete() {
    const dispatch=useDispatch();
    
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

    const handleComplete=(index)=>{
		let now=new Date();
		let dd=now.getDate();
		let mm=now.getMonth();
		let yyyy=now.getFullYear();
		let h=now.getHours();
		let m=now.getMinutes();
		let s=now.getSeconds();
		let completedOn = dd + '/' + mm + '/' + yyyy + ' at' + h +':' + m +':' + s;
		dispatch(completeTodo(index,completedOn));
		};
    return [handleComplete]

}

export {useComplete}
