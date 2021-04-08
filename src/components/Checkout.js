import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {savePersonalDetails} from '../actions/basketActions'
import {BiChevronsLeft} from 'react-icons/bi'

const Checkout = ({history}) => {
    const dispatch = useDispatch()
    const basketContent = useSelector(state => state.basket)

    const{basket, personalDetails} = basketContent


    
    const[firstName,setFirstName] = useState(personalDetails.firstName)
    const[lastName,setLastName] = useState(personalDetails.lastName)
    const[email,setEmail] = useState(personalDetails.email)
    const[address,setAddress] = useState(personalDetails.address)
    const[postal,setPostal] = useState(personalDetails.postal)
    const[city,setCity] = useState(personalDetails.city)
    const[country,setCountry] = useState(personalDetails.country)
    
    // const[form,setForm] = useState({})
    // const handleChange = (e) =>{
    //     const{name,value} = e.currentTarget
    //     setForm({...form, [name]:value})
    //         if(!!errors[name]) setErrors({
    //         ...errors,
    //         [name]: null
    //     }) }

    const[errors, setErrors] = useState({})

    const findFormErrors = () =>{
        // const {firstName,lastName,postal,address,email,card,expiration,code} = form
        const newErrors = {}
        if(!firstName) {newErrors.firstName = 'Enter your first name!'
        }
        if(!lastName) {newErrors.lastName = 'Enter your last name!'
        }
        if(!email) {newErrors.email = 'Enter your e-mail!' }
        else{
            if(!/[^@]+@[^\.]+\..+/.test(email)){
                newErrors.email = 'E-mail is invalid!'
            }
        }
        if(!address) {newErrors.address = 'Enter your current address!'}
        if(!postal) {newErrors.postal = 'Postal code is not valid!' }
        else{
            if(!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postal)){
                newErrors.postal = 'Postal code is invalid!'
            }
        }
        return newErrors
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        const newErrors = findFormErrors()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            console.log('Error is:',newErrors)
        } else{
            const personal = {
                firstName,
                lastName,
                email,
                address,
                postal,
                city,
                country
            }
            dispatch(savePersonalDetails(personal))
            console.log('Submitted!!!',personal)
            history.push('/payment')
        //     setForm({
        //         firstName:'',
        //         lastName:'',
        //         address:'',
        //         postal:'',
        //         email:'',
        // })            
        }
    }
    
    return (
        <div className='container '>
            <div className='row mt-4'>

            <form  className='col-sm-12 col-md-8 col-lg-6 bg-light m-auto' onSubmit={handleSubmit}>
            <div class="row mb-1 px-4">
                <h3 className='mb-4'>Personal details</h3>
                {/* FIRST NAME */}
                <label class="col-sm-4 col-md-4 col-lg-4 col-form-label-lg">First name * :</label>          
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <input type="text" 
                       autoFocus
                       className="form-control"
                       name='firstName'
                       value={firstName}  
                       onChange= {(e)=>setFirstName(e.target.value)} 
                       />
                {errors.firstName && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.firstName}</small>
                }
                </div>
             </div>
                {/* LAST NAME */}
             <div class="row mb-3 px-4">
                <label class="col-sm-4 col-md-4 col-lg-4 col-form-label-lg">Last name * :</label>          
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <input type="text" 
                       className="form-control"
                       name='lastName'
                       value={lastName}  
                       onChange= {(e)=>setLastName(e.target.value)} 
                       />
                {errors.lastName && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.lastName}</small>
                }
                </div>
             </div>
                {/* EMAIL */}
             <div class="row mb-3 px-4">
                <label class="col-sm-4 col-md-4 col-lg-4 col-form-label-lg">Email * :</label>          
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <input type="text" 
                       className="form-control"
                       name='email'
                       value={email}  
                       onChange= {(e)=>setEmail(e.target.value)}
                       />
                {errors.email && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.email}</small>
                }
                </div>
             </div>

             <div class="row mb-3 px-4">
             <h3 className='mb-3'>Shipping</h3>
                {/* ADDRESS */}
                <label class="col-sm-4 col-md-4 col-lg-4 col-form-label-lg">Address * :</label>          
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <input type="text" 
                       className="form-control"
                       name='address'
                       value={address}  
                       onChange= {(e)=>setAddress(e.target.value)}
                       />
                {errors.address && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.address}</small>
                }
                </div>
             </div>

             <div class="row mb-3 px-4">
                <label class="col-sm-4 col-md-4 col-lg-4 col-form-label-lg">City * :</label>          
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <input type="text" 
                       className="form-control"
                       name='city'
                       value={city}  
                       onChange= {(e)=>setCity(e.target.value)} 
                       />
                {errors.postal && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.city}</small>
                }
                </div>
             </div>

             <div class="row mb-3 px-4">
                <label class="col-sm-4 col-md-4 col-lg-4 col-form-label-lg">Country * :</label>          
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <input type="text" 
                       className="form-control"
                       name='country'
                       value={country}  
                       onChange= {(e)=>setCountry(e.target.value)} 
                       />
                {errors.country && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.country}</small>
                }
                </div>
             </div>
                {/* POSTAL CODE */}
             <div class="row mb-3 px-4">
                <label class="col-sm-4 col-md-4 col-lg-4 col-form-label-lg">Postal Code * :</label>          
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <input type="text" 
                       className="form-control"
                       name='postal'
                       value={postal}  
                       onChange= {(e)=>setPostal(e.target.value)} 
                       />
                {errors.postal && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.postal}</small>
                }
                </div>
             </div>

             <div class="col-auto mt-4 mb-4">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
                <label class="form-check-label" for="autoSizingCheck">
                    Subscribe
                </label>
                </div>
            </div>

           
            <div class="col-10 d-flex justify-content-between mb-4">
                <button onClick={() => history.push('/basket')} className='btn btn-primary'> 
                    <BiChevronsLeft size={20}/>Back to cart
                 </button>
                <button class="btn btn-primary" type="submit">Payment</button>
            </div>

            </form>
                
        <div class="col-md-1"> </div>
        <div class="col-md-4">
            <div class="bg-pay p-3"> <h4 class="font-weight-bold">Order Recap</h4>
                {basket.map(item =>(
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">{item.name} X {item.inBasket}</span> <span>${item.price*item.inBasket}</span> </div>
                ))}
                <hr/>
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Total </span> <span class="text-success">${basket.reduce((acc, item) => acc + item.price*item.inBasket, 0).toFixed(2)}</span> </div>
            </div>
        </div>
             


            </div>
        </div>
    )
}

export default Checkout
