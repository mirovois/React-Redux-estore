import React from 'react'

export const Card = ({image}) => {
    return (
        <div class='col p-2'>
            <div class="card" style={{width: '18rem'}}>
                    <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body border bg-light">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class='d-flex justify-content-between '>
                        <button class="btn btn-md btn-primary">Add to basket</button>
                        <button class="btn btn-md btn-primary">Remove</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
