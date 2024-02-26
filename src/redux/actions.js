export const addTodo = (todo) =>({
    type:'ADD_TODO',
    payload:todo
});

export const deleteTodo = (index) =>{
  return { 
    type:'DELETE_TODO',
    payload:index
};
};

export const completeTodo = (index, completedOn) => ({
    type: 'COMPLETE_TODO',
    payload: { index, completedOn }
  });

export const deleteCompletedTodo= (index) =>{
    return {
        type:'DELETE_COMPLETED_TODO',
        payload:index
    };
};


// export const fun_name=(param)=>({
//     type:'FUN_NAME',
//     payload:param
// });