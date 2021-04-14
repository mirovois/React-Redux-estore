import axios from 'axios'
const URL = 'https://miro-estore-app.herokuapp.com'
export const getItems = () =>async (dispatch) => {
        try{
            dispatch({type:'FETCH_REQUEST'})
            const {data} = await axios.get(`${URL}/items`)
              dispatch({
                type: 'FETCH_SUCCESS',
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
