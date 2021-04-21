export default (state ={orders:[]}, action) =>{
    switch(action.type){
        case 'FETCH_ORDERS':
            return{
                ...state,
                orders:action.payload
            }
        // case 'ORDER_ADD_REQUEST':
        //     return{
        //         loading:true,
        //     }
        case 'ORDER_ADD_SUCCESS':
            return{
                // loading:false,
                // order:action.payload
                ...state,
                orders:[...state.orders,action.payload ]

            }
        // case 'ORDER_ADD_FAIL':
        //     return {
        //         loading:false,
        //         error: action.payload
        //     }
        default:
            return state
    }
}