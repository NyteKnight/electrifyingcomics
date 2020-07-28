import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/normalize-and-reset.css";
import "@/assets/css/global.css";
import store, { CART_STORAGE_KEY} from "./store";
Vue.config.productionTip = false;
import Vuelidate from "vuelidate";
import TreeView from "vue-json-tree-view";

Vue.use(Vuelidate);
Vue.use(TreeView);

new Vue({
  router,
  store, // every component will reference the store now
  render: function(h) {
    return h(App);
  },
  created() {
    const cartString = localStorage.getItem(CART_STORAGE_KEY);
    if (cartString) {
      const shoppingCart = JSON.parse(cartString);
      this.$store.commit("SET_CART", shoppingCart);
    }
  }
}).$mount("#app");
