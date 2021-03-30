import React from 'react'
import { Card } from './Card'
import {bread} from '../assets/bread';

const Grid = () => {
    return (
        <div class='container px-4'>
            <div class = 'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                {bread.map(item =>
                    <Card 
                    key={item.id}
                    image={item.image}
                    />
                )}
            </div>
        </div>
    )
}

export default Grid
