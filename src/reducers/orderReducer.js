export default (state ={}, action) =>{
    switch(action.type){
        case 'ORDER_ADD_REQUEST':
            return{
                loading:true,
            }
        case 'ORDER_ADD_SUCCESS':
            return{
                loading:false,
                order:action.payload
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