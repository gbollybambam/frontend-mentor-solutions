function ProductCard({ item, cartItem, onAddToCart, onIncrement, onDecrement }) {
    const { name, category, price, image } = item;

    const isInCart = !!cartItem;

    return (
        <li className="flex flex-col">
            <div className="relative">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={image.desktop} />
                    <source media="(min-width: 640px)" srcSet={image.tablet} />
                    <img
                        src={image.mobile}
                        alt={name}
                        className={`w-full rounded-lg border-2 ${isInCart ? "border-red" : "border-transparent"}`}
                    />
                </picture>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    {!isInCart ? (
                        <button onClick={() => onAddToCart(item)} className="flex items-center justify-center gap-2 bg-white text-rose-900 text-sm font-semibold py-3 px-5 rounded-full border border-rose-300 hover:text-red transition-colors whitespace-nowrap">
                            <img src="images/icon-add-to-cart.svg" alt="" className="w-4 h-4" />
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex justify-between items-center w-40 bg-red text-white text-sm font-semibold py-3 px-5 rounded-full shadow-md">
                            <button onClick={() => onDecrement(item.id)} className="w-4 h-4 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-red transition-colors">
                                <svg
                                    className="w-3 h-3" // Icon size
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 10 2"
                                    fill="none"
                                >
                                    <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
                                </svg>
                            </button>
                            <span className="w-4 text-center">{cartItem.quantity}</span>
                            <button onClick={() => onIncrement(item.id)} className="w-4 h-4 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-red transition-colors">
                                <svg
                                    className="w-3 h-3" // Icon size
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                    
                </div>

            </div>

            <div className="flex flex-col gap-1 mt-8">
                <p className="text-rose-500 text-sm">{category}</p>
                <h3 className="font-semibold text-rose-900">{name}</h3>
                <p className="font-semibold text-red">${price.toFixed(2)}</p>
            </div>
        </li>
    );
}

export default ProductCard;