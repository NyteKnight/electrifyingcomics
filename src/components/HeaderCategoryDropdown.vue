<template>
  <div class="flexItem categoryDropdown">
    <ul>
      <li class="categories">
        <p>Categories</p>
        <ul class="buttons categoryDropdownList">
          <li
            v-for="category in $store.state.categories"
            :key="category.categoryId"
          >
            <router-link
              :to="{ name: 'category', params: { name: category.name } }"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "categoryDropdown",
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>

<style scoped>
ul.horizontal li {
  /* shrink-wraps the li and allows wrapping within their container */
  display: inline-block;
}

.content ul.buttons {
  margin: 1em auto 0;
}

.content ul.buttons li {
  margin-bottom: 0.5em;
}

.content ul.buttons li a {
  border: 1px solid white;
  padding: 0.5em;
  border-radius: 0.2em;
  display: block;
}

ul.buttons li a:not(.selected):hover {
  background-color: #0ab3a3;
  color: #fff;
  border-color: black;
}

ul.buttons li a.selected {
  background-color: #0ab3a3;
  color: #fff;
  cursor: pointer;
}

ul.buttons li a:active {
  background-color: #0ab3a3;
  color: #ddd;
}

.categoryDropdown li {
  display: block;
  position: relative;
  cursor: pointer;
}

.categories {
  margin: 0.5em 0;
  border: 1px solid #0ab3a3;
  border-radius: 0.2em;
}

.categories p,
.categories a,
.categories a:visited,
.categoryDropdownList a,
.categoryDropdownList a:visited {
  display: inline-block;
  width: 100%;
  color: #fff;
  cursor: pointer;
}

.categories a,
.categories p {
  padding: 0.35em 0;
}

.categories p {
  cursor: pointer;
}

.categories {
  margin-bottom: 0;
}
.categories,
.categoryDropdownList {
  background-color: black;
  font-size: 1em;
  text-align: center;
}

.categories {
  /* parity with the transition on .categoryDropdownList on mouse out */
  transition: border-radius 0s 0.5s;
}

.categories:hover {
  border-bottom: 1px solid transparent;
  border-radius: 0.2em 0.2em 0 0;

  /* instant transition on mouse over */
  transition-delay: 0s;
}

.categories .categoryDropdownList {
  position: absolute;
  width: 100%;
  overflow: hidden;
  /* border: 1px solid black; */
  border-top: 1px solid transparent;
  border-radius: 0 0 0.2em 0.2em;

  /* these three lines enable the animation of the menu */
  visibility: hidden;
  max-height: 0;
  transition: visibility, max-height, 0.5s 0s ease-in-out;
}

.categories:hover .categoryDropdownList {
  /* displays the menu on hover */
  max-height: 20em;
  visibility: visible;
}

.categories .categoryDropdownList li a {
  padding: 0.5em 0.5em;
  font-size: 0.9em;
}
.categoryDropdown {
  width: 50%;
  padding-right: 10px;
  font-size: 20px;
}
.categories {
  font-family: cursive;
}
</style>
