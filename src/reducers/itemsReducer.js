export  default  (state={} , action) =>{
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {loading:true,items: action.payload}
        case 'FETCH_SUCCESS':
            return {loading:false,items: action.payload}
        // case 'MODIFY_QUANTITY':
        //     return{
        //         ...state,
        //         items:state.items.map(item => item.item ===)
        //     }
        default:
            return state   
} } 