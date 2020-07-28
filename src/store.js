import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService";
import { ShoppingCart } from "@/models/ShoppingCart";
Vue.use(Vuex);

export const CART_STORAGE_KEY = "cart";
export default new Vuex.Store({
  state: {
    categories: [],
    selectedCategoryName: "",
    selectedCategoryBooks: [],
    cart: new ShoppingCart()
  },
  mutations: {
    SET_CATEGORIES(state, newCategories) {
      state.categories = newCategories;
    },
    SELECT_CATEGORY(state, categoryName) {
      state.selectedCategoryName = categoryName;
    },
    SET_SELECTED_CATEGORY_BOOKS(state, categoryBooks) {
      state.selectedCategoryBooks = categoryBooks;
    },
    ADD_TO_CART(state, book) {
      state.cart.addItem(book, 1);
    },
    SET_CART(state, shoppingCart) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(shoppingCart));
      let newCart = new ShoppingCart();
      shoppingCart.items.forEach(item => {
        newCart.addItem(item.book, item.quantity);
      });
      state.cart = newCart;
    },
    UPDATE_CART(state, { book, quantity }) {
      state.cart.update(book, quantity);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },

    CLEAR_CART(state) {
      localStorage.removeItem(CART_STORAGE_KEY);
      state.cart.clear();
    }
  },
  actions: {
    fetchCategories(context) {
      ApiService.fetchCategories()
        .then(categories => {
          console.log("Data: " + categories);
          context.commit("SET_CATEGORIES", categories);
        })
        .catch(reason => {
          console.log("Error: " + reason);
        });
    },
    selectCategory(context, name) {
      context.commit("SELECT_CATEGORY", name);
    },
    fetchSelectedCategoryBooks(context) {
      ApiService.fetchSelectedCategoryBooks(context.state.selectedCategoryName)
        .then(books => {
          console.log("Data: " + books);
          context.commit("SET_SELECTED_CATEGORY_BOOKS", books);
        })
        .catch(reason => {
          console.log("Error: " + reason);
        });
    },
    addToCart(context, book) {
      context.commit("ADD_TO_CART", book);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    updateCart({ commit }, updateDetails) {
      commit("UPDATE_CART", updateDetails);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    }
  },
  getters: {
    defaultCategoryName() {
      return "Action";
    },
    categoryName(state, getters) {
      return state.selectedCategoryName || getters.defaultCategoryName;
    }
  }
});
