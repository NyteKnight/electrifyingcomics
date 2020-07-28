<template>
  <div id="LowerHome">
    <h2>Top Categories</h2>
    <div id="topCategoriesRow">
      <div
        class="card"
        v-for="category in $store.state.categories"
        :key="category.categoryId"
      >
        <router-link
          :to="{ name: 'category', params: { name: category.name } }"
        >
          <img
            :src="
              require(`@/assets/images/categories/${category.name.toLowerCase()}.png`)
            "
            alt="category.name"
          />

          <div class="container">
            <h3>
              <b>{{ category.name }}</b>
            </h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTopCategoriesList",
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>

<style scoped>
section .flexContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 250px;
  min-height: 300px;
  border-radius: 5px;
  color: black;
}

#topCategoriesRow .card:hover,
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
  cursor: pointer;
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}
h1 {
  font-family: cursive;
  font-size: larger;
  font-weight: bold;
  font-size: 1.5em;
}
h2 {
  font-family: cursive;
  font-size: larger;
  font-weight: bold;
  font-size: 1.3em;
}

h3 {
  font-size: 20px;
  font-family: cursive;
  color: black;
}

#topCategoriesRow {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-content: stretch;
  align-items: center;
  /* background: #0AB3A3; */
  color: white;
}
#topCategoriesRow div {
  border: 1px black solid;
  text-align: center;
  margin: 10px; /* and that, will result in a 10px gap */
}
#topCategoriesRow img {
  width: auto;
  height: 200px;
  border-radius: 5px 5px 5px 5px;
}

#topCategoriesRow .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  min-height: 200px;
  border-radius: 5px;
  color: black;
}
</style>
