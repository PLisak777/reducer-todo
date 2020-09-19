export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';

export const todos = [ // This is my initialState
	{
		item: 'Learn about reducers',
		completed: false,
		id: 3892987589,
	},
];

export const todoReducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO: {
			return [  // return same structure as whatever we're mutating
				...state,  // we copy the initialState...
				{ item: action.payload, id: new Date(), completed: false },  // and return a new object with params
			];
		}

		case TOGGLE_TODO: {
			return state.map((item) => {  // we map over the initialState...
				if (item.id === action.payload) {  // if the item.id returned matches the id of the item created...
					return { ...item, completed: !item.completed }; // copy the array and add the completed state
				}
				return item;
			});
		}
		case CLEAR_TODO: {
			return state.filter((item) => !item.completed); 
		} // .filter() moves the TRUE values into their own array, thereby removing them from render
		default:
			return state;
	}
};
