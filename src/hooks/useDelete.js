import {useEffect} from "react";
import {useDispatch} from 'react-redux';
import { deleteTodo,deleteCompletedTodo} from '../redux/actions';

const useDelete = () => {
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

    const handleDeleteTodo=(index,isCompleted)=>{
		if(isCompleted){
			dispatch(deleteCompletedTodo(index));
		}else{
			dispatch(deleteTodo(index));
		}
	};
    return [handleDeleteTodo]
}

export {useDelete}
