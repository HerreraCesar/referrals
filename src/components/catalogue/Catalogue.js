import Item from '../item/Item';
import React from 'react'
import { promotions } from '../../data';

const Catalogue = () => {
  
  return (
    <div id='catalogue'>
      <div className='list'> 
        {promotions.map((promotion) => (
            <Item promotion={promotion} key={promotion.id} />
          ))}
      </div>
    </div>
  )
}

export default Catalogue