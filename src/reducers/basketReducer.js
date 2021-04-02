export  default  (state={basket:[]} , action) =>{
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]}
        // case 'FETCH_SUCCESS':
        //     return {loading:false,items: action.payload}
        default:
            return state   
} } 