<template>
  <div class="flexContainer content fill-height-or-more">
    <article class="flexItem categoryNav">
      <category-nav></category-nav>
    </article>
    <div id="cartArea">
      <div id="cartDescription">
        <ul>
          <li>
            <template v-if="cart.numberOfItems > 1">
              Your shopping cart contains
              {{ cart.numberOfItems }} items.
            </template>
            <template v-else-if="cart.numberOfItems == 1">
              Your shopping cart contains
              {{ cart.numberOfItems }} item.
            </template>
            <template v-else>Your shopping cart is empty.</template>
          </li>
        </ul>
      </div>
      <section id="cartContents" v-if="!cart.empty">
        <CartTable></CartTable>

        <ul id="cartTotals" v-if="!cart.empty">
          <li>
            Cart subtotal:
            <Price :amount="cart.subtotal" />
          </li>
          <li>
            Shipping + Tax:
            <Price :amount="cart.surcharge" />
          </li>
          <li>
            Cart total:
            <b>
              <Price :amount="cart.total" />
            </b>
          </li>
        </ul>
      </section>
      <section class="cartActions">
        <router-link :to="{ name: 'category', params: { name: categoryName } }">
          <button class="normal2xButton">Continue Shopping</button>
        </router-link>
        <router-link
          :to="{ name: 'checkout' }"
          v-if="!cart.empty"
          style="padding-left: 10px;"
        >
          <button class="emphasized2xButton">Proceed to Checkout</button>
        </router-link>
      </section>
      <section class="cartActions">
        <button
          class="normal2xButton"
          v-if="!cart.empty"
          @click.stop.prevent="clearCart"
        >
          Clear Cart
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Price from "@/components/Price";
import CategoryNav from "@/components/CategoryNav";
import CartTable from "@/components/CartTable";
export default {
  name: "Cart.vue",
  components: {
    Price,
    CategoryNav,
    CartTable
  },
  computed: {
    ...mapGetters(["categoryName"]),
    ...mapState(["cart"])
  },
  methods: {
    ...mapActions(["clearCart"])
  }
};
</script>

<style scoped>
.content > .flexItem:first-child {
  /* category navigation */
  width: 15%;
  min-width: 15em;
  padding-right: 2em;
  margin-top: 25px;
  font-family: cursive;
}

.content ul.buttons {
  margin-top: 0;
  text-align: center;
}

.flexContainer {
  display: flex;
  flex-direction: row;
}
#cartArea {
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: flex-start;
  height: 760px;
  padding: 5px 20px 5px 5px;
}
#cartDescription {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#cartContents {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#cartTotals {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid aliceblue;
}

.cartActions {
  margin: 50px 0px 0px 0px;
  display: flex;
  justify-content: center;
}
.fill-height-or-more > div {
  flex: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;
}
.normal2xButton {
  background-color: white;
  color: black;
  border-radius: 5px;
  border-color: #0ab3a3;
  cursor: pointer;
}
.normal2xButton:hover {
  background-color: #0ab3a3;
}
.emphasized2xButton {
  border-radius: 30px 30px 1px 1px;
  background-color: black;
  color: white;
  cursor: pointer;
}
.emphasized2xButton:hover {
  background-color: #0ab3a3;
}
</style>
