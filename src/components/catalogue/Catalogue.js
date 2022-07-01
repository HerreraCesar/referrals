import Item from '../item/Item';
import React from 'react'

const Catalogue = () => {
  const promotions = [
    {
      id: 'celsius',
      name: "Celsius",
      logo:'./assets/logos/celsius.svg'
    },
    {
      id: 'letsbit',
      name: "Let'sBit",
      logo:'./assets/logos/letsbit.svg'
    },
    {
      id: 'nexo',
      name: "Nexo",
      logo:'./assets/logos/nexo.svg'
    },
    {
      id: 'cryptomkt',
      name: "CryptoMarket",
      logo:'./assets/logos/cmkt.webp'
    },
    {
      id: 'buenbit',
      name: "Buenbit",
      logo:'./assets/logos/buenbit.png'
    }
  ]
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