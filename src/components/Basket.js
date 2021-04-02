import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BsXCircleFill} from 'react-icons/bs'

const Basket = ({match}) => {

    const itemId = match.params.id
    
    const basketContent = useSelector(state => state.basket)
    const{basket} = basketContent

    // console.log('Basket component', basket)
    // const[article,setArticle] = useState(basket)
        // const[bask, setBask]= useState(basket)
    

    // useEffect(() =>{
    //     const fetchData =() =>{
    //         setBask(basket)
    //     }
    //     fetchData()
    //     console.log('Basket component', bask)
       
    // },[] )


    // console.log('Basket component:', basket)
    return (
        <div class="container  mt-4">
                <h1 class="display-4">Order</h1>
                <p class="lead">You can change quantity of any product by adding or removing a certain item.</p>
                <hr/>
                <div class="w-50">
                    <table class="table table-striped table-bordered table-hover">
                        <thead class="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Bread</th>
                            <th>qty</th>
                            <th>price</th>
                        </tr>
                        </thead>
                        <tbody>
                       {basket.map((item,i) =>
                        (<tr key={i}>
                            <th>{i+1}</th>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            {/* <button className="btn btn-primary">delete</button> */}
                            <BsXCircleFill class='mx-2' color='primary' style={{height:'40',width:'40',backgroundColor:'transparent'}}/>
                        </tr>
                        
                        )
                       )}
                       
                        {/* <tr>
                            <th>2</th>
                            <td>Whole Wheat</td>
                            <td>3</td>
                            <td>$4.259</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Rye Bread</td>
                            <td>6</td>
                            <td>$3.99</td>
                        </tr> */}
                        </tbody>
                    </table>
                </div>
         </div>
    )
}

export default Basket
