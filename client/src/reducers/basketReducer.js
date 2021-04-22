export  default  (state={ basketItems: [], personalDetails:{} } , action) =>{
    switch (action.type) {
        case 'ADD_TO_BASKET': 
            const newItem = action.payload         
            const itemInBasket = state.basketItems.find(item => item.item === newItem.item)

            if (itemInBasket) {
            return {
                    ...state,
                    basketItems:state.basketItems.map(item =>item.item === itemInBasket.item 
                        ? {...newItem, inBasket:item.inBasket + 1}  
                        : item)
                }
            } else {
                return {
                    ...state,
                    basketItems: [...state.basketItems, {...newItem,inBasket:1}]
                    }
            }
            case 'DECREASE_ITEM_NUMBER':         
            const itemStillInBasket = state.basketItems.find(item => item.item === action.payload)
            if (itemStillInBasket.inBasket === 1) {
            return {
                ...state
                }
            } else {

            return {
                    ...state,
                    basketItems:state.basketItems.map(item =>item.item === action.payload
                        ? {...item, inBasket:item.inBasket - 1} 
                        : item)
                    }
                }
        case "REMOVE_FROM_BASKET":
            return{
                ...state,
                basketItems:state.basketItems.filter((item) =>item.item !== action.payload)
                } 
        case "EMPTY_BASKET":
            return{
                ...state,
                basketItems:[]
                 }
        case "RESET_PERSONAL_DETAILS":
            return{
                ...state,
                personalDetails:{}
                 }
        
        case "SAVE_PERSONAL_DETAILS":
            return{
                ...state,
                personalDetails:action.payload
                 }                
        default:
            return state   
} } 