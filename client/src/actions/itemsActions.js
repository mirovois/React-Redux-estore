import axios from 'axios'

export const getItems = () =>async (dispatch) => {
        try{
            dispatch({type:'FETCH_REQUEST'})
            const {data} = await axios.get('/items')
              dispatch({
                type: 'FETCH_SUCCESS',
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    export const decreaseTotal = (id) =>async (dispatch) => {
        try{
            dispatch({type:'TOTAL_DECREASE'})
            const {data} = await axios.get('/items/id')
              dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    item:data._id
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    export const sortItems = (items, sort) => async(dispatch) =>{
        
        const sortedItems = items.slice()

        if(sort ===''){
            sortItems.sort((a,b) => (a.item) > b.item ? 1 : -1)
        }
         else {
            sortedItems.sort((a,b) => sort ==='price' ? a.price > b.price ? 1 : -1 :a.name > b.name ? 1 :-1
            )
        }
            console.log('Sorted items', sortedItems)
            dispatch({
                type:'SORT_ITEMS',
                payload:{
                    sort:sort,
                    items:sortedItems
                }
            })
        
        
    }
