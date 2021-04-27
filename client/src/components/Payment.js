import React, {useState} from 'react'
import visa from '../assets/visa.svg.png'
import mastercard from'../assets/mastercard.svg'
import {useDispatch, useSelector} from 'react-redux'
import {BiChevronsLeft} from 'react-icons/bi'
import {BsArrowRepeat} from 'react-icons/bs'
import {addOrder} from  '../actions/orderActions'
import {emptyBasket} from '../actions/basketActions'
import {resetPersonalDetails} from '../actions/basketActions'
import Modal from './Modal'

const Payment = ({history}) => {
    const dispatch = useDispatch()
    const basketContent = useSelector(state => state.basket)

    const{basketItems,personalDetails} = basketContent
        
    const [showModal, setShowModal] = useState(false)
    const[loading, setLoading] = useState(false)
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
    
    const totalPrice = basketItems.reduce((acc, item) => acc + item.price*item.inBasket, 0).toFixed(2)
        
    const handlePlaceOrder =(e) =>{
            e.preventDefault()
            const newErrors = findFormErrors()
            setLoading(true)
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors)
                setLoading(false)
                console.log('Error is:',newErrors)
            } else{
                setTimeout(() =>{
                    const personal = {
                        owner:form.owner,
                        cvv:form.cvv,
                        cardNumber:form.cardNumber
                    }
                    dispatch(addOrder({
                        orderItems:basketItems,
                        personalDetails:personalDetails,
                        totalPrice:Number(totalPrice)
                    }))
                    setShowModal(true)
                    setLoading(false)
                    dispatch(emptyBasket()) 
                    dispatch(resetPersonalDetails())   
                },2000)
            }
        }

    return (
        <div className='container-fluid bg-dark min-vh-100 p-0 p-md-4'>

            <div className="row">

    {/* CREDIT CARD FORM */}
                <div className='col-sm-7 col-md-6 creditCardForm bg-transparent border rounded-3 text-light order-1 order-md-0 '>
                    <div class="heading">
                        <h1 className='text-lead text-white'>Confirm Purchase</h1>
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

                            <div class="col-12 d-flex justify-content-between my-4">
                                <button onClick={() => history.push('/checkout')} className='btn btn-ctrl btn-transparent border text-light border-3 border-secondary btn-sm p-0 p-lg-3'>  
                                <BiChevronsLeft size={25}/>
                                Back to checkout
                                </button>
                                <button class="btn btn-ctrl btn-transparent border text-light border-3 border-secondary btn-sm btn-sm-lg" type="submit">
                                <BsArrowRepeat size={25} className={loading ? 'loading' : 'hide'}/>    
                                {loading ? 'Verifying...' : 'Confirm'}
                                    </button>
                            </div>
                        </form>    
                    </div>
                </div>


                {/* MODAL */}
                {showModal && (
            <Modal showModal={showModal} setShowModal={setShowModal} history={history}/>            
                )}

                {/* Shipping recap */}

                    <div class="col-10 col-md-4 mx-auto mb-4 pt-4 pt-md-0">
                        <div class="bg-secondary text-light p-3"> <h3 class="font-weight-bold">Order Recap</h3>
                        <hr/>
                            <h5 class="font-weight-bold">Receiver:</h5>
                            <p>{personalDetails.firstName} {personalDetails.lastName}</p>
                            <h5 class="font-weight-bold">Shipping address</h5>
                            <p>{personalDetails.address}, {personalDetails.postal}
                            <br/> {personalDetails.city}, {personalDetails.country}</p>
                            <h5 class="font-weight-bold">Items({basketItems?.length})</h5>
                            {basketItems.map(item =>(
                            <div class="d-flex justify-content-between mt-2"> <span class="fw-500">{item.name} X {item.inBasket}</span> <span>${item.price*item.inBasket}</span> </div>
                            ))}
                            <hr/>
                            <div class="d-flex justify-content-between mt-2"> <span class="fw-500 text-lead">Total </span> <span class="text-lead">${totalPrice}</span> </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Payment
