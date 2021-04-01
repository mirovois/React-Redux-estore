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
    
    // catch (error){
    //     dispatch({
    //         type: 'ITEMS_FAIL',
    //         payload: error.message
    //     })
    // }
}