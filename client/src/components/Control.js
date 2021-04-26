import React from 'react'

const Control = () => {
    return (
        <div class='container'>
            <div className='row pt-4'>
                <div className='col-12 col-sm-6 text-center'>
                    <h4 class='d-inline-block text-uppercase text-light mx-4'>Order by</h4>
                    <select className='align-self-center'>
                        <option className='option'>Select</option>
                        <option className='option' value='alphabetic'>Alphabetic</option>
                        <option className='option' value='price'>Price</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Control
