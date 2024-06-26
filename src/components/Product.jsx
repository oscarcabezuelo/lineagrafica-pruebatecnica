export default function Product({product}) {
    return (
        <div className='product' key={product.id}>
            <img className='productImg' src={product.picture} />
            <h3 className='title'>{product.name}</h3>
            <p className="price">
                Precio:  
                <span className='oldPrice'>{product.priceWithoutDiscount}</span>
                <span className='newPrice'>{product.price}</span>
            </p>
        </div>
    )
}