import {useEffect} from "react";
import {useDispatch} from 'react-redux';
import { deleteCompletedTodo} from '../redux/actions';

const useDeleteCompleted = () => {
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

    const handleDeleteCompletedTodo = (index)=>{
		dispatch(deleteCompletedTodo(index));
	};
    return [handleDeleteCompletedTodo]
}

export {useDeleteCompleted}
