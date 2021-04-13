export  default  (state={basket:[], personalDetails:{}} , action) =>{
    switch (action.type) {
        case 'ADD_TO_BASKET':         
            const itemInBasket = state.basket.find(item => item.item === action.payload.item)

            if (itemInBasket) {
            return {
                    ...state,
                    basket:state.basket.map(item =>item.item === itemInBasket.item 
                        ? {...action.payload, inBasket:item.inBasket + 1} 
                        : item)
                }
            } else {
                return {
                    ...state,
                    basket: [...state.basket, {...action.payload, inBasket:1}]
                    }
            }
            case 'DECREASE_ITEM_NUMBER':         
            const itemStillInBasket = state.basket.find(item => item.item === action.payload)
            if (itemStillInBasket.inBasket === 1) {
            return {
                ...state
                }
            } else {

            return {
                    ...state,
                    basket:state.basket.map(item =>item.item === action.payload
                        ? {...item, inBasket:item.inBasket - 1} 
                        : item)
                    }
                }
        case "REMOVE_FROM_BASKET":
            return{
                ...state,
                basket:state.basket.filter((item) =>item.item !== action.payload)
                } 
        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[]
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