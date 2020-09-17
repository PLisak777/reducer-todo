export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';

export const todos = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                item: action.payload,
                id: new Date(),
                completed: false
            }
        }
        case TOGGLE_TODO: {
            return {
                ...state,
                completed: !state.completed
            }
        }
        case CLEAR_TODO: {
            return {
                
            }
        }
        default:
            return state;
    }
}