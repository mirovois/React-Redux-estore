import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Checkout = ({history}) => {
    const basketContent = useSelector(state => state.basket)

    const{basket} = basketContent

    const[form,setForm] = useState({})
    
    const handleChange = (e) =>{
        const{name,value} = e.currentTarget
        setForm({...form, [name]:value})
            if(!!errors[name]) setErrors({
            ...errors,
            [name]: null
        })
      
    }

    const[errors, setErrors] = useState({})

    const findFormErrors = () =>{
        const {firstName,lastName,postal,address,email,card,expiration,code} = form
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
            const shippingDetails = form
            console.log('Submitted!!!',shippingDetails)
            history.push('/payment')
            setForm({
                firstName:'',
                lastName:'',
                address:'',
                postal:'',
                email:'',
                // card:'',
                // expiration:'',
                // code:''
        })            
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
                       value={form.firstName}  
                       onChange= {handleChange} 
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
                       value={form.lastName}  
                       onChange= {handleChange} 
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
                       value={form.email}  
                       onChange= {handleChange} 
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
                       value={form.address}  
                       onChange= {handleChange} 
                       />
                {errors.address && 
                <small className='primary' style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{errors.address}</small>
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
                       value={form.postal}  
                       onChange= {handleChange} 
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
                <button onClick={() => history.push('/basket')} className='btn btn-primary'>  Back to cart</button>
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
