<template>
  <div>
    <section id="checkoutEmpty" v-if="cart.empty">
      <p style="margin:10px;">
        Your cart is empty. Please add an item to your cart to checkout.
      </p>

      <router-link
        :to="{
          name: 'category',
          params: { name: $store.state.selectedCategoryName }
        }"
      >
        <button style="margin:10px;" class="normal2xButton">
          Continue Shopping
        </button>
      </router-link>
    </section>
    <section class="categoryView" v-if="!cart.empty">
      <div id="checkoutTitle">
        <p>Checkout</p>
      </div>
      <form
        id="checkoutForm"
        v-on:submit.prevent="submitOrder"
        v-on:reset="resetOrder"
        method="post"
      >
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            size="20"
            id="name"
            name="name"
            v-model.lazy="$v.name.$model"
          />
        </div>
        <template v-if="$v.name.$error">
          <span class="error" v-if="!$v.name.required">Name is required</span>
          <span class="error" v-else-if="!$v.name.minLength">
            Name must have at least
            {{ $v.name.$params.minLength.min }} letters.
          </span>
          <span class="error" v-else-if="!$v.name.maxLength">
            Name can have at most
            {{ $v.name.$params.maxLength.max }} letters.
          </span>
          <span class="error" v-else>
            An unexpected error occurred.
          </span>
        </template>
        <!-- TODO: Add address input and validation messages -->
        <div>
          <label for="address">Address</label>
          <input
            class="textField"
            type="text"
            size="20"
            maxlength="45"
            id="address"
            name="address"
            @blur="$v.address.$touch()"
            v-model.lazy="$v.address.$model"
          />
        </div>
        <template v-if="$v.address.$error">
          <div class="error" v-if="!$v.address.required">
            Address is required
          </div>
          <div class="error" v-if="!$v.address.minLength">
            Address must have at least
            {{ $v.address.$params.minLength.min }} letters.
          </div>
          <div class="error" v-if="!$v.address.maxLength">
            Address can have at most
            {{ $v.address.$params.maxLength.max }} letters.
          </div>
        </template>

        <div>
          <label for="phone">Phone</label>
          <input
            class="textField"
            type="text"
            size="20"
            id="phone"
            name="phone"
            @blur="$v.phone.$touch()"
            v-model.lazy="$v.phone.$model"
          />
        </div>
        <template v-if="$v.phone.$error">
          <div class="error" v-if="$v.phone.$invalid">
            Please enter a valid phone number.
          </div>
        </template>
        <div class="form-element">
          <label for="email">Email</label>
          <input
            class="textField"
            type="email"
            size="20"
            maxlength="45"
            id="email"
            name="email"
            @blur="$v.email.$touch()"
            v-model.lazy="$v.email.$model"
          />
        </div>
        <template v-if="$v.email.$error">
          <div class="error" v-if="$v.email.$invalid">
            Please enter a valid email address.
          </div>
        </template>
        <div>
          <label for="ccNumber">Credit Card</label>
          <input
            class="textField"
            type="text"
            size="20"
            maxlength="45"
            id="ccNumber"
            name="ccNumber"
            @blur="$v.ccNumber.$touch()"
            v-model="$v.ccNumber.$model"
          />
        </div>
        <template v-if="$v.ccNumber.$error">
          <div class="error" v-if="$v.ccNumber.$invalid">
            Please enter a valid card number.
          </div>
        </template>
        <div>
          <label>Exp Date</label>
          <select v-model="ccExpiryMonth">
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index + 1"
              >{{ month }} ({{ index + 1 }})</option
            >
          </select>
          <select v-model="ccExpiryYear">
            <option
              v-for="index in 16"
              :key="index"
              :value="yearFrom(index - 1)"
              >{{ yearFrom(index - 1) }}</option
            >
          </select>
        </div>
      </form>
      <!--      <div-->
      <!--        style="border: 1px solid black; padding: 1em; margin-left: 1em; text-align: left "-->
      <!--      >-->
      <!--        <tree-view-->
      <!--          :data="$v"-->
      <!--          :options="{ rootObjectKey: '$v', maxDepth: 1 }"-->
      <!--        ></tree-view>-->
      <!--      </div>-->

      <div id="checkoutButtonArea">
        <button
          id="resetButton"
          class="normal2xButton"
          @click="resetOrder"
          type="reset"
        >
          Reset Form
        </button>
        <button
          id="checkoutButton"
          class="emphasized2xButton"
          @click.prevent="submitOrder"
          type="submit"
        >
          Complete Purchase
        </button>
      </div>

      <div id="checkoutInfo">
        <span id="checkoutInfoText">
          Total items in your cart :
          <strong> {{ cart.numberOfItems }} </strong>
          <br />
          Your credit card will be charged
          <strong>
            <Price :amount="cart.total" />
          </strong>
          <br />(
          <strong>
            <Price :amount="cart.subtotal" />
          </strong>
          +
          <strong>
            <Price :amount="cart.surcharge" />
          </strong>
          shipping)
        </span>
      </div>

      <section v-show="checkoutStatus != ''" class="checkoutStatusBox">
        <template v-if="checkoutStatus == 'ERROR'">
          <div class="formText formErrorText" v-if="$v.$invalid">
            Please fix the problems above and try again.
          </div>
        </template>

        <template v-if="checkoutStatus == 'PENDING'">
          <div class="formText formPendingText">Processing...</div>
        </template>
        <template v-if="checkoutStatus == 'OK'">
          <div class="formText formOKText">Order placed !</div>
        </template>
        <template v-if="checkoutStatus == 'SERVER_ERROR'">
          <div class="formText formErrorText">
            An unexpected error occurred, please try again.
          </div>
        </template>
      </section>
    </section>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { mapGetters, mapState } from "vuex";
import Price from "@/components/Price.vue";
import isCreditCard from "validator/lib/isCreditCard";
import isMobilePhone from "validator/lib/isMobilePhone";

const phone = value => isMobilePhone(value, "en-US");
const creditCard = value => isCreditCard(value);

export default {
  components: {
    Price
  },
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      email: "",
      ccNumber: "",
      ccExpiryMonth: new Date().getMonth() + 1,
      ccExpiryYear: new Date().getFullYear(),
      checkoutStatus: ""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45)
    },
    address: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45)
    },
    phone: {
      required,
      phone: phone
    },
    email: {
      required,
      email: email
    },
    ccNumber: {
      required,
      creditCard: creditCard
    }
  },

  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["categoryName"]),
    cart() {
      return this.$store.state.cart;
    },
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    }
  },

  methods: {
    resetOrder() {
      console.log("Reset order");
      this.$v.$reset();
      this.checkoutStatus = "";
    },
    submitOrder() {
      console.log("Submit order");
      this.$v.$touch(); // Ensures validators always run
      if (this.$v.$invalid) {
        this.checkoutStatus = "ERROR";
      } else {
        this.checkoutStatus = "PENDING";
        setTimeout(() => {
          this.checkoutStatus = "OK";
          setTimeout(() => {
            this.$router.push({ name: "confirmation" });
          }, 1000);
        }, 1000);
      }
    },

    /* NOTE: For example yearFrom(0) == 2019 */
    yearFrom(index) {
      return new Date().getFullYear() + index;
    }
  }
};
</script>

<style scoped>
.categoryView {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  min-height: 75vh;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 50px;
}

form > div {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5em;
  padding: 7px;
}

form > div > input,
form > div > select {
  margin-left: 0.5em;
}

form > .error {
  color: red;
  text-align: right;
  font-style: italic;
}

#checkoutEmpty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  min-height: 75vh;
}
.normal2xButton {
  background-color: white;
  color: black;
  border-radius: 5px;
  border-color: #0ab3a3;
  cursor: pointer;
  margin: 5px;
}
.normal2xButton:hover {
  background-color: #0ab3a3;
}
.emphasized2xButton {
  border-radius: 30px 30px 1px 1px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 5px;
}
.emphasized2xButton:hover {
  background-color: #0ab3a3;
}
#checkoutInfoText {
  text-align: center;
  display: inline-block;
  padding-top: 20px;
}
#checkoutTitle {
  text-align: center;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: larger;
}
.checkoutStatusBox {
  margin: 30px;
  border: 1px solid black;
  padding: 5px;
}
.formText {
  text-align: center;
}
.formErrorText {
  color: red;
}
.formPendingText {
  color: orange;
}
.formOKText {
  color: black;
}
</style>
