import React from 'react'

const Order = () => {
    return (
        // <div class="jumbotron bg-light">
            <div class="container  mt-4">
                <h1 class="display-4">Order</h1>
                <p class="lead">You can change quantity of any product by adding or removing a certain item.</p>
                <hr/>
                <div class="container">
                    <table class="table  table-striped table-bordered table-hover">
                        <thead class="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>qty</th>
                            <th>price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>Multigrain</td>
                            <td>1</td>
                            <td>$4.99</td>
                        </tr>
                        <tr>
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
                        </tr>
                        </tbody>
                    </table>
                </div>
         </div>
    )
}

export default Order
