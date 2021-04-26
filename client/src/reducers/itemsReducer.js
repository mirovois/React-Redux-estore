export  default  (state={loading:false,items:[]} , action) =>{
    switch (action.type) {
        // case 'FETCH_REQUEST':
        //     return {loading:true,items: action.payload}
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading:false,
                items: action.payload}
        case 'TOTAL_DECREASE':
            const itemDecrease = state.items.find(item =>item.item === action.payload)
            return {
                loading:false,
                items:state.items.map(item =>item.item === itemDecrease.item ?
                    {...item,quantity:item.quantity+1} : item
                    )
            }
        case 'SORT_ITEMS':
            return {
                ...state,
                loading:false,
                sort:action.payload.sort,
                items: action.payload.items
            }
        default:
            return state   
} } 