import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { BasketContext } from '../../Context/BasketContext';

function Products() {
  const [apiData, setApiData] = useState([])

  // Context Basket
  const {basket, addToBasket} = useContext(BasketContext);

  useEffect(() => {
    getData()
  }, [])
  
  async function getData() {
    const res = await fetch("http://localhost:3900/")
    const data = await res.json()
    setApiData(data)
  }

  return (
    <section className="productsWrapper">
      
      {apiData.map((x)=>(
        <div className="productsCard"><ul key={x._id}>
        <li>{x.name}</li>
        <li>{x.price} $</li>
        <li>{x.category} $</li>
      </ul>
      <button onClick={()=>addToBasket(x)}>Add To Basket</button>
      {console.log(basket)}
      </div>
        
      ))}
      
    </section>
  )
}

export default Products