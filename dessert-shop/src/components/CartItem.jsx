function CartItem({ item, onRemove }) {
    const itemTotal = item.price * item.quantity;

    return (
        <li className="flex justify-between items-center border-b border-rose-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-rose-900">{item.name}</h3>
                <div className="flex gap-2 text-sm font-semibold">
                    <p className="text-red">{item.quantity}x</p>
                    <p className="text-rose-300">@{item.price.toFixed(2)}</p>
                    <p className="text-rose-400">${itemTotal.toFixed(2)}</p>
                </div>
            </div>

            <button onClick={() => onRemove(item.id)} className="w-5 h-5 flex items-center justify-center rounded-full border border-rose-300 text-rose-400 hover:border-rose-900 hover:text-rose-900 transition-colors">
                <svg
                    className="w-2.5 h-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                >
                    <path
                        fill="currentColor" 
                        d="M8.375 9.375 5 6 1.625 9.375.625 8.375 4 5 .625 1.625 1.625.625 5 4 8.375.625 9.375 1.625 6 5l3.375 3.375-.625.625Z"
                    />
                </svg>
            </button>
        </li>
    );
};

export default CartItem;