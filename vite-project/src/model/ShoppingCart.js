import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    static #allCarts = [];
    #cartItems = [];

    constructor() {
        this.id = getId();
        ShoppingCart.#allCarts.push(this);
    }

    static listAll() {
        return [...ShoppingCart.#allCarts];
    }

    static findBy(id) {
        return ShoppingCart.#allCarts.find((cart) => cart.id === id);
    }

    createItem(name, price) {
        const newItem = new CartItem(name, price);
        this.#cartItems.push(newItem)
        return newItem;
    }

    getItems() {
        return [...this.#cartItems]
    }

    getTotal() {
        return this.#cartItems.reduce((total, item) => item.price + total, 0);
    }

    removeItem(id) {
        const itemToRemove = this.#cartItems.findIndex((item) => item.id === id)
        if (itemToRemove === -1) return;
        this.#cartItems.splice(itemToRemove, 1);
    }
}

export default ShoppingCart;