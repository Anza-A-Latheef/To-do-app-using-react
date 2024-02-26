const initialState={
    todos:[],
    completedtodos:[],
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        case 'DELETE_TODO':
            return{
                ...state,
                todos:state.todos.filter((_,index)=>index!==action.payload)
            };
        case 'COMPLETE_TODO':
            const { index, completedOn } = action.payload;
            const completedTodo = state.todos[index];
            const updatedTodos = state.todos.filter((_,i) => i !== index);
            return {
              ...state,
              todos: updatedTodos,
              completedtodos: [...state.completedtodos, { ...completedTodo, completedOn }]
            };
        case 'DELETE_COMPLETED_TODO':
            return{
                ...state,
                completedtodos:state.completedtodos.filter((_,index)=>index!==action.payload)
            }
        default:
            return state;
    }
}
export default rootReducer;






// define initial state
//rootReducer =(state=initialState,action)=>{
    // switch(action.type){
    //     case 'type':
    //         return{
    //             ...state,
    //             function
    //         };
    //     case 'type':
    //         return{
    //             ...state,
    //             function
    //         };
        // default:
        //     return state
    // }

// }
// export rootreducer