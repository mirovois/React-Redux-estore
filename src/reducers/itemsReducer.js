export  default  (state={} , action) =>{
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {loading:true,items: action.payload}
        case 'FETCH_SUCCESS':
            return {loading:false,items: action.payload}
        default:
            return state   
} } 