function ConfirmationModal({ cart, onStartNewOrder }) {
    const orderTotal = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    return (
        <div className="fixed inset-0 bg-black/50 z-50 ">
            <section role="dialog" aria-modal="true" aria-labelledby="confirmation-heading" className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[85vh] overflow-y-auto p-6
                   md:w-full md:max-w-md md:rounded-xl md:px-8 md:py-4
                md:top-1/2 md:left-1/2 md:bottom-auto md:right-auto md:-translate-x-1/2 md:-translate-y-1/2
                   md:max-h-none md:overflow-y-visible">
                <img src="images/icon-order-confirmed.svg" alt="check mark" className="mb-4" />

                <h2 id="confirmation-heading" className="font-bold text-3xl md:text-4xl text-rose-900 leading-tight mb-3 max-w-min md:max-w-none">Order Confirmed</h2>
                <p className="text-base text-rose-500 mb-5">we hope you enjoy your meal</p>

                <ul className="flex flex-col divide-y divide-rose-100 border-t border-b border-rose-100 py-4 bg-rose-50 rounded-lg md:max-h-56 md:overflow-y-auto">
                    {cart.map((item) => (
                        <li key={item.id} className="flex items-center py-3 px-5">
                            <img src={item.image.thumbnail} alt={item.name} className="w-12 h-12 rounded-md" />
                            <div className="ml-4 flex-1">
                                <h3 className="font-bold text-sm text-rose-900">{item.name}</h3>
                                <p>
                                    <span className="font-bold text-sm text-red">{item.quantity}x</span>
                                    <span className="text-sm text-rose-500 ml-3">@ ${ item.price.toFixed(2) }</span>
                                </p>
                            </div>

                            <p className="font-bold text-base text-rose-900 ml-auto">${ (item.price * item.quantity).toFixed(2) }</p>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between my-4">
                    <p className="text-base text-rose-900">Order Total</p>
                    <p className="font-bold text-3xl text-rose-900">${ orderTotal.toFixed(2) }</p>
                </div>

                <button type="button" onClick={onStartNewOrder} className="w-full bg-red py-3 rounded-full hover:bg-red-600 transition-colors">
                    <span className="font-bold text-base text-white">
                        Start New Order
                    </span>
                </button>
            </section>
        </div>
    )
}

export default ConfirmationModal;