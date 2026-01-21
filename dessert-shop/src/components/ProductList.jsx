import data from '../data.json';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart, cart, onIncrement, onDecrement }) {
    return (
        <section>
            <h1 className='text-4xl font-bold text-rose-900 mb-8'>Desserts</h1>

            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14'>
                {data.map((item) => (
                    <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} cartItem={cart.find(cartItem => cartItem.id === item.id)} onIncrement={onIncrement} onDecrement={onDecrement} />
                ))}
            </ul>
        </section>
    )
};

export default ProductList;