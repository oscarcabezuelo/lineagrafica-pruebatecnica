import { useEffect, useState } from 'react'
import './App.css'
import Auth from './services/auth'
import Products from './services/products'
import Product from './components/Product'
import Buttons from './components/Buttons'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const data = await Auth()
        fetchProducts(data.token)
      } catch (err) {
        console.error(err)
      }
      
    }

    const fetchProducts = async (token) => {
      try {
        const products = await Products(token)
        console.log(products.products)
        setProducts(products?.products)
      } catch (err) {
        console.error("Products error: ", err)
      }
    }
    fetchAuth()
    
  }, [])

  return (
    <>
      <Buttons />
      <div id='view' className='list'>
        {products.length > 0 && products.map(product => 
          <Product key={product.id} product={product} />
        )}
      </div>
      
    </>
  )
}

export default App
