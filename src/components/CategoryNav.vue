<template>
  <ul class="buttons" id="categoryButtons">
    <template v-for="category in $store.state.categories">
      <li
        :key="category.categoryId"
        v-if="$store.state.selectedCategoryName === category.name"
      >
        <router-link
          :to="{ name: 'category', params: { name: category.name } }"
          class="selected"
        >
          {{ category.name }}
        </router-link>
      </li>
      <li :key="category.categoryId" v-else>
        <router-link
          :to="{ name: 'category', params: { name: category.name } }"
          class="unselected"
        >
          {{ category.name }}
        </router-link>
      </li>
    </template>
  </ul>
</template>

<script>

export default {
  name: "CategoryNav",
  data: function() {
    return {};
  },
  created: function() {},
  methods: {
  }
};
</script>

<style scoped>
.content ul.buttons li a {
  border: 1px solid white;
  padding: 0.5em;
  border-radius: 0.2em;
  display: block;
}
ol,
ul {
  list-style: none;
}
.content ul.buttons li {
  margin-bottom: 0.5em;
}

.categoryNav ul.buttons li a.selected {
  background-color: black;
  color: #fff;
  cursor: pointer;
}
.categoryNav ul.buttons li a.unselected {
  background-color: #0ab3a3;
  color: #fff;
  cursor: pointer;
}
</style>
