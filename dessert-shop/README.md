# Frontend Mentor - Dessert Shop

This is a complete, interactive dessert shop website built as a solution to a Frontend Mentor challenge. It features a full shopping cart experience, including adding, incrementing, decrementing, and removing items, all managed with React state.

## 📸 Screenshot

![A desktop screenshot of the dessert shop app, showing the product list on the left and the filled cart on the right](./design-files/desktop-design-selected.jpg)
*(This uses the design file as a placeholder. You should replace this with a screenshot of your final, completed project!)*

## ✨ Features

* View a list of dessert items loaded from a local `data.json` file.
* **Full Cart Functionality:**
    * Add items to the shopping cart.
    * Adjust item quantity (increment/decrement) directly from the product list.
    * The cart and product list are always in sync.
* **Responsive Cart:**
    * View all items in your cart.
    * Remove items from the cart.
    * View a "cart empty" state.
* **Order Confirmation:**
    * Receive an order confirmation modal with a complete order summary.
    * Start a new order, which resets the cart.
* **Pixel-Perfect & Responsive:**
    * Fully responsive design for mobile, tablet, and desktop.
    * Hover and active states for all interactive elements.

## 🚀 Technologies Used

* **React:** For building the user interface and managing component state.
* **Vite:** As the fast, modern build tool.
* **Tailwind CSS (v4.1):** For all styling, using a utility-first approach and a custom theme.
* **pnpm:** As the package manager.

## 🧠 Key Learnings

This project was a deep dive into React state management. The key challenge was **"lifting state up"** to the main `App.jsx` component. This allowed both the `ProductList` (which adds items) and the `Cart` (which displays items) to share and modify the same data, ensuring the UI was always in sync.

* Managing a complex state object (the `cart` array) with `useState`.
* Passing state and functions as **props** (prop-drilling) down to child components.
* **Conditional rendering** for multiple UI states:
    * Empty Cart vs. Filled Cart
    * "Add to Cart" button vs. the Quantity Selector
    * Showing/hiding the Confirmation Modal
* Creating pixel-perfect, responsive layouts with Tailwind CSS, including mobile-first design and `sm:`/`lg:` breakpoints.
* **Inlining SVGs** directly into JSX to allow their `fill` color to be dynamically changed with Tailwind's `text-color` and `hover:` classes.

## 🏁 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/en) (which includes npm) and [pnpm](https://pnpm.io/installation) installed.

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/gbollybambam/dessert-shop.git](https://github.com/gbollybambam/dessert-shop.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd dessert-shop
    ```
3.  Install dependencies:
    ```sh
    pnpm install
    ```
4.  Run the development server:
    ```sh
    pnpm run dev
    ```
5.  Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in your browser.

## 🙏 Acknowledgments

* **Frontend Mentor:** For providing the challenge, design assets, and style guide.