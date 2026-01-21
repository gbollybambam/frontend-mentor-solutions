import CartItem from "./CartItem";

function Cart({ cart, onRemove, onConfirmOrder }) {
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    const isCartEmpty = cart.length === 0;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-red">Your Cart ({cart.length})</h2>
            {isCartEmpty ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16">
                    <img src="images/illustration-empty-cart.svg" alt="Empty cart" className="w-32" />
                    <p className="font-semibold text-rose-500 text-center">Your added items will appear here</p>
                </div>
            ) : (
                <>
                    <ul className="flex flex-col gap-4">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} onRemove={onRemove} />
                        ))}
                    </ul>
                    <div className="flex flex-col gap-4 border-t border-rose-100 pt-6">
                        <div className="flex justify-between items-center">
                            <p className="text-rose-950">Order Total</p>
                            <p className="text-2xl font-bold text-rose-900">${total.toFixed(2)}</p>
                        </div>
    
                        <div className="flex justify-center items-center gap-2 bg-rose-50 p-4 rounded-md">
                            <img src="images/icon-carbon-neutral.svg" alt="Carbon neutral" className="w-5" />
                            <p className="whitespace-nowrap">This is a <span className="font-semibold ">carbon-neutral</span> delivery</p>
                        </div>
                    </div>
    
                    <button className="w-full bg-red text-white font-semibold py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" onClick={onConfirmOrder} disabled={isCartEmpty}>
                        Confirm Order
                    </button>
    
                </>
            )}
        </div>
    );
};

export default Cart;