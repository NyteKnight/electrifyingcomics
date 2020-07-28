<template>
  <table id="customers" border="1" cellpadding="3">
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th style="text-align:right;">Price</th>
      <th style="text-align:right;">Total</th>
    </tr>

    <tr v-for="item in cart.items" :key="item.book.bookId">
      <td>{{ item.book.title }}</td>
      <td>
        <input
          type="number"
          min="0"
          max="9"
          step="1"
          placeholder="Quantity desired"
          v-model.trim.number.lazy="item.quantity"
          @change="updateCart({ book: item.book, quantity: item.quantity })"
        />
      </td>
      <td style="text-align:right;">
        <Price :amount="item.price" />
      </td>

      <td style="text-align:right;">
        <Price :amount="item.total" />
      </td>
    </tr>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Price from "@/components/Price";
export default {
  name: "CartTable.vue",
  components: {
    Price
  },
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    ...mapActions(["updateCart"])
  }
};
</script>

<style scoped>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #0ab3a3;
  color: white;
}

#cartContents table {
  padding: 3px;
  border: 1px solid red;
  margin: 50px 50px;
}
#cartContents td,
#cartContents th {
  border: 1px solid #ddd;
  padding: 8px;
}
#cartContents tr:nth-child(even) {
  background-color: #f2f2f2;
}
#cartContents tr:hover {
  background-color: #ddd;
}
#cartContents th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #0ab3a3;
  color: white;
}
#cartContents input[type="number"] {
  width: 50px;
}
</style>
