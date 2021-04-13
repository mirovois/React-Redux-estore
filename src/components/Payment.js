import React, {useState} from 'react'
import visa from '../assets/visa.svg.png'
import mastercard from'../assets/mastercard.svg'
import {useDispatch, useSelector} from 'react-redux'
import {BiChevronsLeft} from 'react-icons/bi'
import {addOrder} from  '../actions/orderActions'
import {emptyBasket} from '../actions/basketActions'
import {resetPersonalDetails} from '../actions/basketActions'
import Modal from './Modal'
// import Modal from './Modal'

const Payment = ({history}) => {
    const dispatch = useDispatch()
    const basketContent = useSelector(state => state.basket)

    const{basket,personalDetails} = basketContent
        
    const [showModal, setShowModal] = useState(false)
    
    const[form,setForm] = useState({})
    
    const[errors, setErrors] = useState({})

    const findFormErrors = () =>{
        const {owner, cvv, cardNumber} = form
        const newErrors = {}
        if(!owner) {newErrors.owner = 'Enter cardholder\'s name!'
        }
        if(!cvv) {newErrors.cdd = 'Enter valid CVV!'
        }
        if(!cardNumber) {newErrors.cardNumber = 'Card is not valid!' }
        // else{
        //     if(!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(cardNumber)){
        //         newErrors.cardNumber = 'Card number is invalid!'
        //     }
        // }
        return newErrors
    }
    
    const setField = (field,value) =>{
        setForm({...form, [field]:value})
            if(!!errors[field]) setErrors({
            ...errors,
            [field]: null
        }) }
    
    const totalPrice = basket.reduce((acc, item) => acc + item.price*item.inBasket, 0).toFixed(2)
        
    const handlePlaceOrder =(e) =>{
            e.preventDefault()
            const newErrors = findFormErrors()
    
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors)
                console.log('Error is:',newErrors)
            } else{
                const personal = {
                    owner:form.owner,
                    cvv:form.cvv,
                    cardNumber:form.cardNumber
                }
                console.log('Submitted!!!',personal)
                const order = {
                    orderItems:basket,
                    personalDetails:personalDetails,
                    totalPrice:Number(totalPrice)
                }
                dispatch(addOrder({
                    orderItems:basket,
                    personalDetails:personalDetails,
                    totalPrice:Number(totalPrice)
                }))
                setShowModal(true)
                dispatch(emptyBasket())
                dispatch(resetPersonalDetails())
                // history.push('/')
                console.log('Created order:',order)      
            }
        }

    return (
        <div className='container mt-3 mb-3 mr-4'>

            <div className="row">

    {/* CREDIT CARD FORM */}
                <div className='col-md-6 creditCardForm'>
                    <div class="heading">
                        <h1>Confirm Purchase</h1>
                    </div>
                    <div class="payment">
                        
                        <form onSubmit={handlePlaceOrder}>
                            <div class="form-group owner">
                                <label for="owner">Owner</label>
                                <input type="text"  class="form-control" id="owner" onChange={e => setField('owner', e.target.value)}/>
                            </div>

                            <div class="form-group CVV">
                                <label for="cvv">CVV</label>
                                <input type="text" class="form-control" id="cvv" onChange={e => setField('cvv', e.target.value)}/>
                            </div>

                            <div class="form-group" id="card-number-field">
                                <label for="cardNumber">Card Number</label>
                                <input type="text" class="form-control" id="cardNumber" onChange={e => setField('cardNumber', e.target.value)}/>
                            </div>

                            <div class="form-group" id="expiration-date">
                                <label>Expiration Date</label>
                                <select>
                                    <option value="01">January</option>
                                    <option value="02">February </option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select>
                                    <option value="21"> 2021</option>
                                    <option value="22"> 2022</option>
                                    <option value="23"> 2023</option>
                                    <option value="24"> 2024</option>
                                    <option value="25"> 2025</option>
                                    <option value="26"> 2026</option>
                                </select>
                            </div>

                            <div class="form-group" id="credit_cards">
                                <img src={visa} id="visa" style={{height:'40px',width:'80px'}}/>
                                <img src={mastercard} id="mastercard" style={{height:'50px',width:'100px'}}/>
                            </div>

                            {/* <div class="form-group" id="pay-now">
                                <button type="submit" class="btn btn-primary" id="confirm-purchase">Confirm</button>
                            </div> */}
                            <div class="col-12 d-flex justify-content-between mb-4 mt-4">
                                <button onClick={() => history.push('/checkout')} className='btn btn-primary'>  
                                <BiChevronsLeft size={28}/>
                                Back to checkout
                                </button>
                                <button class="btn btn-primary" type="submit">Confirm</button>
                            </div>
                        </form>    
                    </div>
                </div>


                {/* MODAL */}
                {showModal && (
            <Modal showModal={showModal} setShowModal={setShowModal} history={history}/>            
                )}

{/* Shipping recap */}
<div class="col-md-1"> </div>
        <div class="col-md-4 mt-4 pt-4">
            <div class="bg-pay p-3"> <h3 class="font-weight-bold">Order Recap</h3>
                <h5 class="font-weight-bold">Receiver:</h5>
                <p>{personalDetails.firstName} {personalDetails.lastName}</p>
                <h5 class="font-weight-bold">Shipping address</h5>
                <p>{personalDetails.address}, {personalDetails.postal}
                <br/> {personalDetails.city}, {personalDetails.country}</p>
                <h5 class="font-weight-bold">Items({basket?.length})</h5>
                {basket.map(item =>(
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">{item.name} X {item.inBasket}</span> <span>${item.price*item.inBasket}</span> </div>
                ))}
                <hr/>
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Total </span> <span class="text-success">${totalPrice}</span> </div>
                <hr/>
            </div>
        </div>
            </div>
        </div>

    )
}

export default Payment
