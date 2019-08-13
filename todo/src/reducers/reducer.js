export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const reducer = (state, action)=>{
    switch(action.type){

        case "TOGGLE": 
            return {
                ...state,  
                completed: !state.completed
            };
        
        
    }

}

